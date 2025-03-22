import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASEURL}/api/Order/User-Retrival`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data?.data) {
        setOrders(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="bg-fourth min-h-screen p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-primary mb-6">Your Orders</h1>
        {orders.length === 0 ? (
          <p className="text-lg text-gray-600 text-center">
            No Orders Found. Start Shopping Now!
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-third rounded-lg p-6 shadow-md border border-secondary"
              >
                <p className="text-sm text-primary font-semibold">
                  Status:{" "}
                  <span className=" text-primary">{order.orderStatus}</span>
                </p>
                <p className="text-sm text-primary font-semibold">
                  Total Price:{" "}
                  <span className=" text-primary">₹{order.totalPrice}</span>
                </p>
                <p className="text-sm text-primary font-semibold">
                  Date:
                  {new Date(order.orderDate).toLocaleDateString()}
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  {order.orderProduct?.map((product) => (
                    <div
                      key={product.orderItemId}
                      className="flex gap-4 items-center p-4 bg-fourth rounded-lg border border-primary shadow-md"
                    >
                      <img
                        src={product.url}
                        alt={product.productName || "Product"}
                        className="w-24 h-24 object-cover rounded-lg border-2 border-secondary"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary">
                          {product.productName}
                        </h3>
                        <p className="text-sm text-primary font-semibold">
                          Price:{" "}
                          <span className=" text-primary">
                            ₹{product.price}
                          </span>
                        </p>
                        <p className="text-sm text-primary font-semibold">
                          Quantity:{" "}
                          <span className=" text-primary">
                            {product.quantity}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
