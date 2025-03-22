import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);
  const[changeStatusOpen,setStatusChange]=useState(false);
  const[updateStatus,setUpdateStatus]=useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const HandleOrders = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Order/Admin-Retrival`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          userId: id,
        },
      })
      .then((response) => {
        setOrders(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => console.error("Error in fetching orders", error));
  };

  const handleLog = () => {
    axios
      .patch(
        `${import.meta.env.VITE_BASEURL}/api/Admin/BlockUserById`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            id: id,
          },
        }
      )
      .then((response) => {
        fetchuser();
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
      });
  };
  const handleStatusChange = (orderId) => {
    console.log(orderId);
    
    axios
      .patch(
        `${import.meta.env.VITE_BASEURL}/api/Order/Update-status`,
        {
            "orderStatus": updateStatus
          },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            OrderId: orderId,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setStatusChange(false)
        HandleOrders();
        
        
      })
      .catch((error) => console.error("Error updating order status", error));
  };

  const fetchuser = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Admin/GetUserById`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        params: {
          id: id,
        },
      })
      .then((response) => {
  
        
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchuser();
    HandleOrders();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-primary font-sans">
      <button
        onClick={handleBack}
        className="mb-6 bg-primary text-white px-4 py-2 rounded-md hover:bg transition shadow-lg"
      >
        ⇦ Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-gray-300">
        <h1 className="text-3xl font-bold text-primary mb-4">User Details</h1>
        {userData ? (
          <ul className="space-y-2">
            <li>
              <strong className="text-primary">Name:</strong> {userData?.name || "N/A"}
            </li>
            <li>
              <strong className="text-primary">Email:</strong> {userData?.email || "N/A"}
            </li>
          </ul>
        ) : (
          <p className="text-primary">Loading user data...</p>
        )}
      </div>

      {userData && (
        <>
          <div className="flex justify-center my-6">
            <button
              onClick={handleLog}
              className={`px-6 py-2 font-medium text-white rounded-lg shadow-md transition duration-300 ${
                userData?.isBlocked
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {userData?.isBlocked ? "Unblock User" : "Block User"}
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h1 className="text-3xl font-bold text-primary mb-4">Order Details</h1>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div key={index} className="border-b pb-4 mb-4 border-gray-300">
                  <p className="text-primary">
                    <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                  <p className="text-primary font-semibold">Order Status: {order.orderStatus}</p>
                  <button
  onClick={() => setStatusChange(true)}
  className="mt-2 text-primary font-semibold"
>
  Change Status:
</button>
<select
  name="orderStatus"
  id="orderStatus"
  className="mt-2 ml-2 p-2 border border-primary rounded-lg bg-white text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary"
  onChange={(e) => setUpdateStatus(e.target.value)}
>
  <option value="Processing">Processing</option>
  <option value="Shipped">Shipped</option>
  <option value="Delivered">Delivered</option>
  <option value="Cancelled">Cancelled</option>
  <option value="Returned">Returned</option>
</select>
<button
  onClick={() => handleStatusChange(order.orderId)}
  className="mt-2 ml-5 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-all shadow-md"
>
  Submit
</button>

              
                  <p className="text-primary">
                    <strong>Customer:</strong> {order.address?.name}
                  </p>
                  <p className="text-primary">
                    <strong>Address:</strong> {order.address?.houseName}, {order.address?.place}
                  </p>
                  <p className="text-primary">
                    <strong>Phone:</strong> {order.address?.phone}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {order.orderProduct?.map((product, productIndex) => (
                      <li
                        key={productIndex}
                        className="flex items-center space-x-4 bg-gray-100 p-3 rounded-lg shadow-sm"
                      >
                        <img
                          src={product.url}
                          alt={product.productName}
                          className="w-24 h-24 rounded-md shadow-md"
                        />
                        <div>
                          <p className="text-primary font-semibold">{product.productName}</p>
                          <p className="text-primary text-lg font-bold">₹{product.price}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p className="text-primary">No orders found</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default UserDetails;
