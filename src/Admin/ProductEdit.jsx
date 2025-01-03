import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
const ProductEdit = () => {
    const [products, SetProducts] = useState([]);
    const [newName, setNewName] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newCategories, setNewCategories] = useState('');
    const [editDetails, setEditDetails] = useState({});
    const [open, setClose] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios
            .get('http://localhost:3032/products')
            .then((response) => {
                SetProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    
    const details = products.find((product) => product.id.toString() === id);
    console.log("dncdj",details);
    

  
    const valueToChange = {
        url: newImage,
        discription: newDescription, 
        catogory: newCategories,     
        price: newPrice,
        heading: newName,
    };

    useEffect(() => {
        if (details) {
            setEditDetails(details);
            setNewCategories(details.catogory); 
            setNewImage(details.url);
            setNewDescription(details.discription); 
            setNewPrice(details.price);
            setNewName(details.heading)
        }
    }, [details]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:3032/products/${id}`, valueToChange);
            Swal.fire('Product updated Successfully!');
            setClose(false);
        } catch (error) {
            console.error('Error updating product', error);
        }
    };

    const handleDelete = async () => {   
        try {
            await axios.delete(`http://localhost:3032/products/${id}`);
            Swal.fire('Product deleted Successfully');
            navigate(-1);
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="min-h-screen bg-fourth p-8">
            <button 
                onClick={handleBack} 
                className="text-primary text-xl font-semibold mb-6">
                ⇦ Back to Products
            </button>

            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-primary mb-4">Product Details</h1>
                <ul className="space-y-4">
                    <li>
                        <img 
                            src={editDetails.url} 
                            alt={editDetails.heading} 
                            className="w-40 h-40 object-cover rounded-md border border-third" 
                        />
                    </li>
                    <li className="text-xl font-semibold text-primary">{editDetails.heading}</li>
                    <li className="text-md text-secondary">{editDetails.discription}</li> 
                    <li className="text-lg text-primary">Price: ₹{editDetails.price}</li>
                    <li>
                        <button 
                            onClick={() => setClose(true)} 
                            className="px-4 py-2 mt-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
                            Edit Product
                        </button>
                    </li>
                </ul>
            </div>

            {open && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Edit Product</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-primary mb-2">Product Name</label>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    className="w-full px-4 py-2 border border-third rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-primary mb-2">Product Price</label>
                                <input
                                    type="text"
                                    value={newPrice}
                                    onChange={(e) => setNewPrice(e.target.value)}
                                    className="w-full px-4 py-2 border border-third rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-primary mb-2">Product Description</label>
                                <input
                                    type="text"
                                    value={newDescription}
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    className="w-full px-4 py-2 border border-third rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-primary mb-2">Product Image URL</label>
                                <input
                                    type="text"
                                    value={newImage}
                                    onChange={(e) => setNewImage(e.target.value)}
                                    className="w-full px-4 py-2 border border-third rounded-md"
                                />
                            </div>

                            <div>
                                <label className="block text-primary mb-2">Product Category</label>
                                <input
                                    type="text"
                                    value={newCategories}
                                    onChange={(e) => setNewCategories(e.target.value)}
                                    className="w-full px-4 py-2 border border-third rounded-md"
                                />
                            </div>

                            <div className="space-x-4">
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                                    Delete
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setClose(false)}
                                    className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80 transition">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductEdit;
