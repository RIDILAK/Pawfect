import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function AddProduct() {
  const [product, setProduct] = useState({
    productName: '',
    url: '',
    price: null,
    rating: null,
    quantity: null,
    description: '',
    categoryId: null
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { productName, description, categoryId, url, price, rating, quantity } = product;

    if (!productName || !description || !categoryId || !url || !price || !rating || !quantity) {
      setError('All fields are required');
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BASEURL}/api/Admin/AddProduct`, product,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(() => {
        setError('');
        Swal.fire('Success!', 'Product added successfully', 'success');
        navigate('/admin/adminproduct');
      })
      .catch((error) => {
        setError('Error adding product');
        console.error('Error adding product', error);
      });
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-fourth p-8">
      <h1 className="text-3xl font-bold text-primary mb-4 text-center">Add Product</h1>
      <button onClick={handleBack} className="text-primary text-xl font-semibold mb-6">⇦</button>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-third p-6 rounded-lg shadow-lg space-y-4">
        
        <div>
          <label htmlFor="productName" className="block font-medium text-secondary mb-2">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            placeholder="Enter Product Name"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium text-secondary mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter Product Description"
            rows="4"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
        </div>

        <div>
          <label htmlFor="categoryId" className="block font-medium text-secondary mb-2">Category ID</label>
          <input
            type="text"
            id="categoryId"
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
            placeholder="Enter Category ID"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="url" className="block font-medium text-secondary mb-2">Image URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={product.url}
            onChange={handleChange}
            placeholder="Enter Product Image URL"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="price" className="block font-medium text-secondary mb-2">Product Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter Product Price"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block font-medium text-secondary mb-2">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            placeholder="Enter Product Rating (1-5)"
            min="1"
            max="5"
            step="0.1"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block font-medium text-secondary mb-2">Quantity</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            className="w-full border border-primary rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
