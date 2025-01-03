import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UserDetails() {
    const [userData, setUserData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3032/users/${id}`)
            .then((response) => {
                setUserData(response.data);
                console.log('Fetched User Data:', response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);                                  
            });
    }, [id]);

    const handleLog = () => {
        const updatedStatus = !userData.isLogged;
        axios
            .patch(`http://localhost:3032/users/${id}`, { isLogged: updatedStatus })
            .then((response) => {
                setUserData(response.data);
                console.log('Updated User Data:', response.data);
            })
            .catch((error) => {
                console.error('Error updating user data:', error);
            });
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="p-6 min-h-screen text-gray-800 font-sans bg-fourth">
            <button
                onClick={handleBack}
                className="mb-4 bg-third text-secondary px-4 py-2 rounded-md hover:bg-secondary hover:text-fourth transition"
            >
                ⇦ Go Back
            </button>

            <div className="bg-white p-6 rounded-md shadow-md mb-6 border border-third">
                <h1 className="text-2xl font-semibold text-primary mb-4">User Details</h1>
                <ul>
                    <li>
                        <strong className="text-secondary">Name:</strong> {userData.name || 'N/A'}
                    </li>
                    <li>
                        <strong className="text-secondary">Email:</strong> {userData.email || 'N/A'}
                    </li>
                </ul>
            </div>

            <div className="flex justify-center my-6">
                <button
                    onClick={handleLog}
                    className={`px-6 py-2 font-medium text-white rounded-lg shadow-md transition duration-300 ${
                        userData.isLogged
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-green-500 hover:bg-green-600'
                    }`}
                >
                    {userData.isLogged ? 'Block' : 'Unblock'}
                </button>
            </div>

            <div className="bg-white p-6 rounded-md shadow-md mb-6 border border-third">
                <h1 className="text-2xl font-semibold text-primary mb-4">Cart Details</h1>
                {userData.cart && userData.cart.length > 0 ? (
                    <ul>
                        {userData.cart.map((item, index) => (
                            <li
                                key={index}
                                className="border-b pb-2 flex items-center space-x-4 border-third"
                            >
                                <img
                                    src={item.url}
                                    alt={item.heading}
                                    className="w-24 h-24 rounded-md shadow-md"
                                />
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
                {userData.ordres && userData.ordres.length > 0 ? (
                    <ul>
                        {userData.ordres.map((order, index) => (
                            <li
                                key={index}
                                className="border-b pb-2 flex items-center space-x-4 border-third"
                            >
                                <img
                                    src={order.url}
                                    alt={order.heading}
                                    className="w-24 h-24 rounded-md shadow-md"
                                />
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
        </div>
    );
}

export default UserDetails;
