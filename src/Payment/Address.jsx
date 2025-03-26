import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Razorpay from "./RazorPay";
import { useCart } from "../Context/CartContext";

const Address = () => {
  const [address, setAddress] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  // const[totalPrice,setTotalPrice]=useState([]);
  const{cart}=useCart();
  const navigate = useNavigate();

  const fetchAddresses = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Address/Get-All`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setAddress(response.data.data))
      .catch((error) => console.error("Error fetching address", error));
  };

  // const createOrder=()=>{
  //   console.log("Total Amount:", cart.totalAmount);
  //   axios
  //   .post(`${import.meta.env.VITE_BASEURL}/api/Order/Create-RazorPay`,{},{
  //     headers:
  //     {Authorization:`Bearer ${localStorage.getItem("token")}`},
  //     params:{
  //            price:cart.totalAmount
  //     }
      
  //   })
  //   .then((response)=>
  //     setTotalPrice(response.data.data))
  //   // console.log(response.data.data))
    
  //   .catch((error)=>console.error(console.error("Error in payment",error)
  //   )
  //   )
  // }

  // const fetchCartItems = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BASEURL}/api/Cart/GetAll`, {
  //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  //     })
  //     .then((response) => setCartItems(response.data.data))
  //     .catch((error) => console.error("Error fetching cart items", error));
  // };

  const deleteAddress = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this address!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A79277",
      cancelButtonColor: "#EAD8C0",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_BASEURL}/api/Address/Remove/`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
            params: { addressId: id },
          })
          .then((response) => {
            fetchAddresses();
            Swal.fire("Deleted!", response.data.message, "success");
          })
          .catch((error) => console.error("Error deleting address", error));
      }
    });
  };

  useEffect(() => {
    fetchAddresses();
    // fetchCartItems();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-fourth shadow-lg rounded-lg border border-third">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Saved Addresses
      </h2>

     
      <div className="text-center mb-6">
        <button
          onClick={() => navigate("/AddAdress")}
          className="bg-primary text-white py-2 px-6 rounded-md shadow-md hover:bg-secondary transition duration-300"
        >
          + Add New Address
        </button>
      </div>

      {address.length === 0 ? (
        <p className="text-center text-gray-600">No addresses found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {address.map((addr) => (
            <div
              key={addr.addressId}
              className={`border border-third p-5 rounded-xl shadow-md bg-white transition duration-300 hover:shadow-lg ${
                selectedAddress?.addressId === addr.addressId ? "border-primary" : ""
              }`}
            >
              <p className="text-gray-800">
                <strong className="text-primary">Name:</strong> {addr.name}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">Email:</strong> {addr.email}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">Phone:</strong> {addr.phone}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">House Name:</strong> {addr.houseName}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">Place:</strong> {addr.place}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">Pincode:</strong> {addr.pinCode}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">City:</strong> {addr.city}
              </p>
              <p className="text-gray-800">
                <strong className="text-primary">State:</strong> {addr.state}
              </p>

             
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => {
                  
                    setSelectedAddress(addr)}}
                  className="bg-secondary text-white py-1.5 px-5 rounded-lg shadow-md hover:bg-primary transition duration-300"
                >
                  Select
                </button>
                <button
                  onClick={() => deleteAddress(addr.addressId)}
                  className="bg-primary text-white py-1.5 px-5 rounded-lg shadow-md hover:bg-secondary transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      
      {selectedAddress && cart?.items?.length > 0 && (
        <div className="mt-10 p-6 bg-white border border-third shadow-md rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">Order Summary</h3>

        
          <div className="mb-4 p-4 border border-gray-300 rounded-lg">
            <h4 className="text-lg font-semibold text-primary mb-2">Selected Address</h4>
            <p className="text-gray-800">
              <strong>Name:</strong> {selectedAddress.name}
            </p>
            <p className="text-gray-800">
              <strong>Phone:</strong> {selectedAddress.phone}
            </p>
            <p className="text-gray-800">
              <strong>Address:</strong> {selectedAddress.houseName}, {selectedAddress.place}, {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pinCode}
            </p>
          </div>

        
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-primary mb-2">Cart Items</h4>
            <ul>
              {cart?.items?.map((item, index) => (
               <li key={index} className="flex items-center justify-between border-b py-2 text-gray-800">
               <span className="w-16 h-16 flex-shrink-0">
                 <img src={item.url} alt={item.productName} className="w-full h-full object-cover rounded-lg shadow-md" />
               </span>
               <span className="flex-1 px-4">{item.productName} </span>
               <span className="text-secondary font-semibold~">₹{item.price}</span>
            
             </li>
           
              ))}
             <div className="flex justify-between items-center mt-4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
  <h6 className="text-lg font-semibold text-primary">Total Price:</h6>
  <span className="text-xl font-bold text-secondary">₹{cart.totalAmount}</span>
</div>
            </ul>
            
          </div>

        
          <div className="text-center mt-6">
            {/* <button
              onClick={createOrder}
              className="bg-primary text-white py-2 px-6 rounded-md shadow-md hover:bg-secondary transition duration-300"
            >
              Proceed to Checkout
            </button> */}
              <Razorpay
          address={address}
          amount={cart?.totalAmount}
          addressId={selectedAddress}
        />
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
