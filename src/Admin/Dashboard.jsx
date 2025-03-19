
import axios from 'axios';
import { useState,useEffect } from 'react';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    
    const userCount = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASEURL}/api/Admin/GetallUsers`,{
          headers:{
           Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        });
        setTotalUsers(response.data.data.length);
        // const ordersCount = response.data.reduce((acc, user) => {
        //   return acc + (user.ordres ? user.ordres.length : 0);
        // }, 0);
        // setTotalOrders(ordersCount);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const orderCount = async ()=>{
      try{
        const response= await axios.get(`${import.meta.env.VITE_BASEURL}/api/Order/Get-All`,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }
        });
        setTotalOrders(response.data.data.length);
      } catch(error){
        console.error('Error fetching Orders:',error);
        
      }
    }

   
    const ProductsCount = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASEURL}/api/Product/GetALl`);
        setTotalProducts(response.data.data.length);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    userCount ();
    ProductsCount();
    orderCount();
  }, []);

  return (
    <div className="p-6 bg-fourth min-h-screen">
    
      <h1 className="text-3xl font-bold text-primary mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
        <div className="bg-third p-6 rounded-lg shadow-md flex items-center">
          <span className="text-4xl mr-4">🛍</span>
          <div>
            <h2 className="text-xl font-semibold text-primary">Total Products</h2>
            <p className="text-2xl font-bold text-secondary">{totalProducts}</p>
          </div>
        </div>

        
        <div className="bg-third p-6 rounded-lg shadow-md flex items-center">
          <span className="text-4xl mr-4">👥</span>
          <div>
            <h2 className="text-xl font-semibold text-primary">Total Users</h2>
            <p className="text-2xl font-bold text-secondary">{totalUsers}</p>
          </div>
        </div>

        <div className="bg-third p-6 rounded-lg shadow-md flex items-center">
          <span className="text-4xl mr-4">📦</span>
          <div>
            <h2 className="text-xl font-semibold text-primary">Total Orders</h2>
            <p className="text-2xl font-bold text-secondary">{totalOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
