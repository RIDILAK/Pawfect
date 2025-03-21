import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Address = () => {
  const [address, setAddress] = useState([]);
  const navigate=useNavigate();

  const AllAddress = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Address/Get-All`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAddress(response.data.data);
      })
      .catch((error) => console.error("Error fetching address", error));
  };

  const deleteAddress = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BASEURL}/api/Address/Remove/`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },params:{
                addressId:id
            }
          })
          .then((response) => {
            AllAddress();
            Swal.fire("Deleted!", response.data.message, "success");
          })
          .catch((error) => console.error("Error deleting address", error));
      }
    });
  };
  const handleAdd=()=>{
     navigate("/AddAdress")
  }

  useEffect(() => {
    AllAddress();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Saved Addresses
      </h2>
      {address.length === 0 ? (
        <p className="text-center text-gray-600">No addresses found.</p>
      ) : (
        <div className="space-y-4">
          {address.map((addr) => (
            <div
              key={addr.addressId}
              className="border p-4 rounded-lg shadow-sm bg-gray-100 relative"
            >
              <p>
                <strong>Name:</strong> {addr.name}
              </p>
              <p>
                <strong>Email:</strong> {addr.email}
              </p>
              <p>
                <strong>Phone:</strong> {addr.phone}
              </p>
              <p>
                <strong>House Name:</strong> {addr.houseName}
              </p>
              <p>
                <strong>Place:</strong> {addr.place}
              </p>
              <p>
                <strong>Pincode:</strong> {addr.pinCode}
              </p>
              <p>
                <strong>City:</strong> {addr.city}
              </p>
              <p>
                <strong>State:</strong> {addr.state}
              </p>
              <button
                onClick={() => deleteAddress(addr.addressId)}
                className="mt-3 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Remove
              </button>
              <button
                onClick={handleAdd}
                className="mt-3 bg-green-500 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Address;
