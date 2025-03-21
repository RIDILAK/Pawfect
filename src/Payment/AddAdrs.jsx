import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddAdress = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    houseName: "",
    place: "",
    pincode: "",
    city: "",
    state: "",
   
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

const handleSubmit=()=>{
 
  console.log(formData);
  axios
  .post(`${import.meta.env.VITE_BASEURL}/api/Address/Add`,formData,{
    
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  .then((response)=>{
    console.log("Added Address");
    Swal.fire(response.data.message)
    navigate("/address")
    
  })
  .catch((error)=>console.error("Error in adding address",error)
  )
}



  // useEffect(() => {
  //   const userId = localStorage.getItem("userId");
  //   if (!userId) {
  //     console.error("User ID is not available in localStorage");
  //     return;
  //   }

  //   axios
  //     .get(`http://localhost:3032/users/${userId}`)
  //     .then((res) => {
  //       setUserData(res.data);
  //       setUserCart(res.data.cart);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching user data:", error.message);
  //     });
  // }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits.";
    if (!formData.houseName) newErrors.houseName = "House Name is required.";
    if (!formData.place) newErrors.place = "Place is required.";
    if (!formData.pincode) newErrors.pincode = "Pincode is required.";
    else if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = "Pincode must be 6 digits.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.state) newErrors.state = "State is required.";
    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   const userId = localStorage.getItem("userId");
  //   if (!userId) {
  //     console.error("User ID is not available in localStorage");
  //     return;
  //   }

  //   try {
  //     const updatedOrders = [...(userData.ordres || []), ...userCart];

  //     await axios.patch(`http://localhost:3032/users/${userId}`, {
  //       cart: [],
  //       ordres: updatedOrders,
  //     });

  //     Swal.fire("Payment Success", "Your order has been placed!", "success");
  //     navigate("/");
  //   } catch (error) {
  //     console.error(
  //       "Error updating user data",
  //       error.response?.data || error.message
  //     );
  //   }
  // };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 mt-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Address Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <input type="text" name="houseName" placeholder="House Name" value={formData.houseName} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.houseName && <p className="text-red-500 text-sm">{errors.houseName}</p>}

          <input type="text" name="place" placeholder="Place" value={formData.place} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.place && <p className="text-red-500 text-sm">{errors.place}</p>}

          <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}

          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

          <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third" />
          {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
        </div>

      

        <button type="submit" className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-third">
          Submit Address
        </button>
      </form>
    </div>
  );
};

export default AddAdress;
