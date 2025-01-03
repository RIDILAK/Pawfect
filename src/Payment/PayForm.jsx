

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PayForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    landmark: "",
    pin: "",
    paymentMethod: "",
    cashOnDelivery: false,
  });

  const [userData, setUserData] = useState({});
  const [userCart, setUserCart] = useState([]);
  const [errors, setErrors] = useState({}); 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID is not available in localStorage");
      return;
    }

    axios
      .get(`http://localhost:3032/users/${userId}`)
      .then((res) => {
        setUserData(res.data);
        setUserCart(res.data.cart);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error.message);
      });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.landmark) newErrors.landmark = "Landmark is required.";
    if (!formData.pin) newErrors.pin = "Pincode is required.";
    else if (!/^\d{6}$/.test(formData.pin)) newErrors.pin = "Pincode must be 6 digits.";
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("User ID is not available in localStorage");
      return;
    }

    try {
      const updatedOrders = [...(userData.ordres || []), ...userCart];

      await axios.patch(`http://localhost:3032/users/${userId}`, {
        cart: [],
        ordres: updatedOrders,
      });

      Swal.fire("Payment Success", "Your order has been placed!", "success");
      navigate("/");
    } catch (error) {
      console.error(
        "Error updating user data",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Payment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third"
          ></textarea>
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

          <input
            type="text"
            name="landmark"
            placeholder="Landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third"
          />
          {errors.landmark && <p className="text-red-500 text-sm">{errors.landmark}</p>}

          <input
            type="text"
            name="pin"
            placeholder="Pincode"
            value={formData.pin}
            onChange={handleChange}
            className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third"
          />
          {errors.pin && <p className="text-red-500 text-sm">{errors.pin}</p>}
        </div>

        <div>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third"
          >
            <option value="">Select Payment Method</option>
            <option value="online">Online Payment</option>
            <option value="cash">Cash on Delivery</option>
          </select>
          {errors.paymentMethod && (
            <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="cashOnDelivery"
            checked={formData.cashOnDelivery}
            onChange={handleChange}
            className="h-5 w-5 text-primary border-secondary rounded-lg focus:ring-2 focus:ring-third"
          />
          <label htmlFor="cashOnDelivery" className="ml-3 text-secondary text-sm">
            Cash on Delivery
          </label>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-third"
          >
            Submit Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayForm;
