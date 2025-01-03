import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orderProducts, setOrderProducts] = useState([]);

  
  const userId = localStorage.getItem('userId');
  console.log('User ID:', userId);

  useEffect(()=>{
    if(userId){
      axios.get(`http://localhost:3032/users/${userId}`)
      .then((response)=>{
        console.log("userdata",response.data);
        const userData = response.data
        if(!userData.ordres ){
          axios.patch(`http://localhost:3032/users/${userId}`,{ordres:[]})
          .then(()=>{
            console.log("orders are empty");
            
          })
          .catch((error)=>{
            console.error("Error order fetching",error);
            
          })
        }else{
          setOrderProducts(userData.ordres)
          console.log("orderproducts",orderProducts);
          
        }
        
      })
    }
  },[])

  return (
    <div className="bg-fourth min-h-screen p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-primary mb-6">Your Orders</h1>
        {orderProducts.length === 0 ? (
          <p className="text-lg text-gray-600 text-center">
            No Orders Found. Start Shopping Now!
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {orderProducts.map((product) => (
              <div
                key={product.id}
                className="bg-third rounded-lg p-4 shadow-md flex gap-4 items-center"
              >
                <img
                  src={product.url}
                  alt={product.heading || 'Product'}
                  className="w-24 h-24 object-cover rounded-lg border-2 border-secondary"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-primary mb-1">{product.heading}</h2>
                  <p className="text-sm text-gray-600 mb-1">{product.description}</p>
                 
                  <p className="text-sm font-semibold text-primary">
                    Price: {product.price ? `₹${product.price}` : 'N/A'}
                  </p>
                  <div className="text-sm text-yellow-500 mt-1">
                    ⭐ {product.rating || 'N/A'}
                  </div>
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
