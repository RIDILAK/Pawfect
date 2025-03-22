import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../Context/CartContext";



const Razorpay = ({ amount, address, addressId }) => {
    const{cart}=useCart();
  const createOrder = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/Order/Create-RazorPay`,
        {},
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
          params: { price:cart.totalAmount},
        }
      );
      return response.data.data;
    } catch (error) {
      console.error("Error in payment", error);
      Swal.fire("Error", "Failed to create order", "error");
      return null;
    }
  };

  const orderPlaced=async (transactionId)=>{
  try{
    console.log(addressId,"address");
    
    const orders= await axios
    .post(`${import.meta.env.VITE_BASEURL}/api/Order/Place`,{
        "addressId": addressId.addressId,
        "totalAmount": amount,
        "transactionId": transactionId
      },{
        headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
    })
    console.log(orders);
    
    
} catch(error){
    console.error("error in Placed order",error);
    

}

  }

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      Swal.fire("Error", "Failed to load Razorpay SDK.", "error");
      return;
    }

    const order_id = await createOrder();

    if (!order_id) {
      Swal.fire("Error", "Failed to create order.", "error");
      return;
    }

    const options = {
      key: "rzp_test_vvTFia5Of0Lszk", 
      amount: amount * 100, 
      currency: "INR",
      name: "Pawfect",
      description: "Order Payment",
      order_id: order_id,
      handler: function (response) {
        verifyPayment(response);
      },
      prefill: {
        name: address.name,
        email: address.email,
        contact: address.phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const verifyPayment = async (paymentData) => {
    try {
        console.log(paymentData);
        
      const response = await axios.post(
        `${import.meta.env.VITE_BASEURL}/api/Order/Verify-payment`,
        paymentData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      console.log(response);
      

      if (response.data.data) {
         await orderPlaced(paymentData.razorpay_payment_id)
      } else {
        Swal.fire("Error", "Payment verification failed.", "error");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
      Swal.fire("Error", "Payment verification failed.", "error");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
    >
      Proceed to Payment
    </button>
  );
};

export default Razorpay;