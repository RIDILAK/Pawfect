import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductAdmin = () => {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    const handleEdit = (id) => {
        navigate(`/admin/edit/${id}`);
    }

    const handleAdd = () => {
        navigate('/admin/addProduct')
    }
    
    useEffect(() => {
        axios.get('http://localhost:3032/products')
            .then((response) => {
                setProduct(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data', error)
            })
    }, [])

    return (
        <div className="bg-fourth min-h-screen p-5">
           
            <h1 className="text-primary text-4xl font-bold mb-6 text-center">Product List</h1>

           
            <div className="mb-6 flex justify-center">
            <button 
    className="bg-primary text-white text-lg font-semibold px-5 py-2 border-none rounded-none hover:bg-primary/80 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 shadow-lg hover:shadow-xl mr-100 mt-5 transform -translate-y-1/2"
    onClick={handleAdd}
>
    Add Product
</button>

            </div>

            
            <div className="overflow-x-auto">
                <table className="min-w-full bg-third border border-third rounded-lg shadow-md">
                    <thead className="bg-secondary">
                        <tr>
                            <th className="py-3 px-5 text-left text-white font-semibold">Image</th>
                            <th className="py-3 px-5 text-left text-white font-semibold">Name</th>
                            <th className="py-3 px-5 text-left text-white font-semibold">Category</th>
                            <th className="py-3 px-5 text-left text-white font-semibold">Price</th>
                            <th className="py-3 px-5 text-left text-white font-semibold">More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((product) => (
                            <tr
                                key={product.id}
                                className="bg-fourth border-b border-third hover:bg-primary/10 transition duration-200"
                            >
                                
                                <td className="py-3 px-5">
                                    <img
                                        src={product.url}
                                        alt={product.heading}
                                        className="w-20 h-20 rounded-md border border-third"
                                    />
                                </td>

                              
                                <td className="py-3 px-5 text-primary font-medium">{product.heading}</td>

                               
                                <td className="py-3 px-5 text-primary">{product.catogory}</td>

                                
                                <td className="py-3 px-5 text-primary font-semibold">₹ {product.price}</td>

                               
                                <td className="py-3 px-5">
                                    <button 
                                        onClick={() => handleEdit(product.id)} 
                                        className="px-6 py-2 text-white bg-primary rounded-md hover:bg-primary/80 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                                    >
                                        View for Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductAdmin
