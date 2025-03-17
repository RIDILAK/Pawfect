
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    console.log("id", id);
    navigate(`/admin/userDetails/${id}`);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Admin/GetallUsers`,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
      .then((res) => {
        const filteredUsers = res.data.data.filter((u) => !u.email.startsWith('Admin')&& !u.email.startsWith('admin'));
        setUser(filteredUsers);
      })
      .catch((error) => {
        console.error("Fetching error", error);
      });
  }, []);

  return (
    <div className="p-8 bg-fourth min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-primary text-center">Users List</h1>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-3 px-4 border">User Id</th>
              <th className="py-3 px-4 border">Name</th>
              <th className="py-3 px-4 border">E-mail</th>
              <th className="py-3 px-4 border">View More</th>
            </tr>
          </thead>

          <tbody>
            {user.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? 'bg-third' : 'bg-fourth'
                } hover:bg-primary/20`}
              >
                <td className="py-2 px-4 border text-center">{user.id}</td>
                <td className="py-2 px-4 border text-center">{user.name}</td>
                <td className="py-2 px-4 border text-center">{user.email}</td>
                <td className="py-2 px-4 border text-center">
                  <button
                    onClick={() => handleNavigate(user.id)}
                    className="bg-primary hover:bg-secondary text-white font-medium py-1 px-3 rounded transition-all duration-300"
                  >
                    View More
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
