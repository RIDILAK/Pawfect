import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
    const [userData, setUserData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const handleLog = () => {
        axios
            .patch(`${import.meta.env.VITE_BASEURL}/api/Admin/BlockUserById`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                params: {
                    id: id
                }
            })
            .then((response) => {
                fetchuser();
                console.log('Updated User Data:', response.data);
            })
            .catch((error) => {
                console.error('Error updating user data:', error);
            });
    };

    const fetchuser=()=>{
        axios
        .get(`${import.meta.env.VITE_BASEURL}/api/Admin/GetUserById`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            params: {
                id: id
            }
        })
        .then((response) => {
            setUserData(response.data.data);
            console.log('Fetched User Data:', response.data);
        })
        .catch((error) => {
            console.error('Error fetching user data:', error);
        });

    }

    useEffect(() => {
       
        fetchuser();
    }, [id]);

   
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="p-6 min-h-screen text-gray-800 font-sans bg-fourth">
            <button
                onClick={handleBack}
                className="mb-4 bg-third text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-fourth transition"
            >
                ⇦ 
            </button>

            <div className="bg-white p-6 rounded-md shadow-md mb-6 border border-third">
                <h1 className="text-2xl font-semibold text-primary mb-4">User Details</h1>
                {userData ? (
                    <ul>
                        <li><strong className="text-secondary">Name:</strong> {userData?.name || 'N/A'}</li>
                        <li><strong className="text-secondary">Email:</strong> {userData?.email || 'N/A'}</li>
                    </ul>
                ) : (
                    <p className="text-secondary">Loading user data...</p>
                )}
            </div>

            {userData && (
                <>
                    <div className="flex justify-center my-6">
                        <button
                            onClick={handleLog}
                            className={`px-6 py-2 font-medium text-white rounded-lg shadow-md transition duration-300 ${
                                userData?.isBlocked ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                            }`}
                        >
                            {userData?.isBlocked ? 'Block' : 'Unblock'}
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md mb-6 border border-third">
                        <h1 className="text-2xl font-semibold text-primary mb-4">Cart Details</h1>
                        {userData?.cart && userData.cart.length > 0 ? (
                            <ul>
                                {userData.cart.map((item, index) => (
                                    <li key={index} className="border-b pb-2 flex items-center space-x-4 border-third">
                                        <img src={item.url} alt={item.heading} className="w-24 h-24 rounded-md shadow-md" />
                                        <div>
                                            <p className="text-secondary font-semibold">{item.heading}</p>
                                            <p className="text-primary">${item.price}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-secondary">No items in the cart</p>
                        )}
                    </div>

                    <div className="bg-white p-6 rounded-md shadow-md border border-third">
                        <h1 className="text-2xl font-semibold text-primary mb-4">Order Details</h1>
                        {userData?.orders && userData.orders.length > 0 ? (
                            <ul>
                                {userData.orders.map((order, index) => (
                                    <li key={index} className="border-b pb-2 flex items-center space-x-4 border-third">
                                        <img src={order.url} alt={order.heading} className="w-24 h-24 rounded-md shadow-md" />
                                        <div>
                                            <p className="text-secondary font-semibold">{order.heading}</p>
                                            <p className="text-primary">${order.price}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-secondary">No orders found</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
}

export default UserDetails;
