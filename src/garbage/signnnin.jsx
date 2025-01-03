// // // // // // // // // // // import React from 'react';
// // // // // // // // // // // import { Formik, Form, Field } from 'formik';
// // // // // // // // // // // import axios from 'axios';
// // // // // // // // // // // import * as Yup from 'yup';

// // // // // // // // // // // const signInValidation = Yup.object({
// // // // // // // // // // //   email: Yup.string().email("Please Enter Valid email").required("Please Enter Email"),
// // // // // // // // // // //   password: Yup.string().min(5, "Password must be at least 5 characters").required("Please Enter Password"),
// // // // // // // // // // // });

// // // // // // // // // // // const initialValues = {
// // // // // // // // // // //   email: "",
// // // // // // // // // // //   password: ""
// // // // // // // // // // // };

// // // // // // // // // // // function SignIn() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="App flex justify-center items-center min-h-screen bg-gray-100">
// // // // // // // // // // //       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
// // // // // // // // // // //         <Formik
// // // // // // // // // // //           initialValues={initialValues}
// // // // // // // // // // //           validationSchema={signInValidation}
// // // // // // // // // // //           onSubmit={async (values) => {
// // // // // // // // // // //             try {
// // // // // // // // // // //               const response = await axios.post('http://localhost:5000/signIn', {  // Use a different endpoint for login
// // // // // // // // // // //                 email: values.email,
// // // // // // // // // // //                 password: values.password,
// // // // // // // // // // //               });

// // // // // // // // // // //               console.log('User logged in:', response.data);
// // // // // // // // // // //             } catch (error) {
// // // // // // // // // // //               console.error('Error logging in:', error);
// // // // // // // // // // //             }
// // // // // // // // // // //           }}
// // // // // // // // // // //         >
// // // // // // // // // // //           {({ errors, touched }) => (
// // // // // // // // // // //             <Form>
// // // // // // // // // // //               <div className="mb-4">
// // // // // // // // // // //                 <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">E-mail</label>
// // // // // // // // // // //                 <Field
// // // // // // // // // // //                   type="email"
// // // // // // // // // // //                   name="email"
// // // // // // // // // // //                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 {errors.email && touched.email && <small className="text-red-500">{errors.email}</small>}
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <div className="mb-4">
// // // // // // // // // // //                 <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
// // // // // // // // // // //                 <Field
// // // // // // // // // // //                   type="password"
// // // // // // // // // // //                   name="password"
// // // // // // // // // // //                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // //                 />
// // // // // // // // // // //                 {errors.password && touched.password && <small className="text-red-500">{errors.password}</small>}
// // // // // // // // // // //               </div>

// // // // // // // // // // //               <button
// // // // // // // // // // //                 type="submit"
// // // // // // // // // // //                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // // // // // // // //               >
// // // // // // // // // // //                 Submit
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </Form>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </Formik>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default SignIn;

// // // // // // // // // // // colors:{
// // // // // // // // // // //   primary:'#A79277',
// // // // // // // // // // //   secondary:'#A79277',
// // // // // // // // // // //   Third:"#EAD8C0",
// // // // // // // // // // //   fourth:"#FFF2E1"
// // // // // // // // // // // }
// // // // // // // // // // // import React, { useContext, useEffect, useState } from 'react';
// // // // // // // // // // // import { ProductContext } from './ProductContext';
// // // // // // // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // // // // // // import Footer from './Footer';

// // // // // // // // // // // const Products = () => {
// // // // // // // // // // //     const { products } = useContext(ProductContext);
// // // // // // // // // // //     const [allProducts, setAllProducts] = useState([]);
// // // // // // // // // // // const navigate=useNavigate()
// // // // // // // // // // //     useEffect(() => {
// // // // // // // // // // //         if (products) {
// // // // // // // // // // //             setAllProducts(products);
// // // // // // // // // // //         }
// // // // // // // // // // //     }, [products]);

// // // // // // // // // // //     const handleCardClick = (category) => {
// // // // // // // // // // //         if (category === "entireProducts") {
// // // // // // // // // // //             setAllProducts(products); 
// // // // // // // // // // //         } else {
// // // // // // // // // // //             const filteredProducts = products.filter((product) => product.categories === category);
// // // // // // // // // // //             setAllProducts(filteredProducts);
// // // // // // // // // // //         }
// // // // // // // // // // //     };
// // // // // // // // // // // const handleViewClick =(id)=>{
// // // // // // // // // // // navigate(/productDetails/${id})
// // // // // // // // // // // }


// // // // // // // // // // //     return (
// // // // // // // // // // //         <div className="p-6">
// // // // // // // // // // //             <div className="flex flex-col items-center mb-6">
// // // // // // // // // // //                 <h1 className="font-bold text-xl mb-4">Our Latest Collections</h1>
// // // // // // // // // // //                 <div className="flex space-x-6">
// // // // // // // // // // //                     <p className="hover:text-orange-500 hover:underline cursor-pointer" onClick={() => handleCardClick("entireProducts")}>All</p>
// // // // // // // // // // //                     <p className="hover:text-orange-500 hover:underline cursor-pointer" onClick={() => handleCardClick("Men")}>Men</p>
// // // // // // // // // // //                     <p className="hover:text-orange-500 hover:underline cursor-pointer" onClick={() => handleCardClick("Women")}>Women</p>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //             {allProducts.length === 0 ? (
// // // // // // // // // // //                 <p className="text-center text-gray-500">No Products Available</p>
// // // // // // // // // // //             ) : (
// // // // // // // // // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // // // //                     {allProducts.map((product) => (
// // // // // // // // // // //                         <div
// // // // // // // // // // //                             key={product.id}
// // // // // // // // // // //                             className="bg-white rounded-lg shadow-lg hover:scale-105 hover:rotate transition-transform duration-300 p-4"
// // // // // // // // // // //                         >
// // // // // // // // // // //                             <img
// // // // // // // // // // //                                 src={product.image}
// // // // // // // // // // //                                 alt={product.brand}
// // // // // // // // // // //                                 className="w-full h-48 object-cover rounded-t-lg"
// // // // // // // // // // //                             />
// // // // // // // // // // //                             <div className="p-4">
// // // // // // // // // // //                                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
// // // // // // // // // // //                                     {product.brand}
// // // // // // // // // // //                                 </h2>
// // // // // // // // // // //                                 <p className="text-gray-600">Price: ₹{product.price}</p>
// // // // // // // // // // //                                 <p className="text-gray-600">Discount: {product.discount}%</p>
// // // // // // // // // // //                                 <p className="text-gray-600">
// // // // // // // // // // //                                     Sizes: {product.sizes ? product.sizes.join(', ') : 'N/A'}
// // // // // // // // // // //                                 </p>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                             <div className="flex space-x-4 mt-4">
                                
// // // // // // // // // // //                                 <button className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-red-900 transition-all duration-300 w-full"onClick={()=>handleViewClick(product.id)}>
// // // // // // // // // // //                                     View
// // // // // // // // // // //                                 </button>
// // // // // // // // // // //                             </div>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //             )}
            
// // // // // // // // // // //    <Footer/>
// // // // // // // // // // //         </div>
// // // // // // // // // // //     );
// // // // // // // // // // // };

// // // // // // // // // // // export default Products;

// // // // // // // // // // import React, { useContext, useEffect, useState } from "react";
// // // // // // // // // // import { ProductContext } from "./ProductContext";
// // // // // // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // // // // // import axios from "axios";
// // // // // // // // // // import Footer from "./Footer";
// // // // // // // // // // import Swal from "sweetalert2";

// // // // // // // // // // const ProductDetails = () => {
// // // // // // // // // //   const { products } = useContext(ProductContext);
// // // // // // // // // //   const [productDetails, setProductDetails] = useState(null);
// // // // // // // // // //   const { id } = useParams();
// // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const detail = products.find((product) => product.id === id);

// // // // // // // // // //     if (detail) {
// // // // // // // // // //       setProductDetails(detail);
// // // // // // // // // //     } else {
// // // // // // // // // //       console.log("Product not found:", id);
// // // // // // // // // //     }
// // // // // // // // // //   }, [products, id]);

// // // // // // // // // //   if (!productDetails) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="text-center py-20 text-gray-600">
// // // // // // // // // //         <p className="text-xl">Loading product details...</p>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   const handleAddToCart = async (product) => {
// // // // // // // // // //     const user = localStorage.getItem("user");

// // // // // // // // // //     if (!user) {
// // // // // // // // // //       Swal.fire("Please login to add items to the cart");
// // // // // // // // // //       return;
// // // // // // // // // //     }

// // // // // // // // // //     const userId = user;

// // // // // // // // // //     try {
// // // // // // // // // //       const { data: userData } = await axios.get(http://localhost:3031/users/${userId});

// // // // // // // // // //       const existingProduct = userData.cart.find((item) => item.id === product.id);

// // // // // // // // // //       if (existingProduct) {
// // // // // // // // // //         alert("Product is already in the cart");
// // // // // // // // // //         return;
// // // // // // // // // //       }

// // // // // // // // // //       const updatedCart = [...userData.cart, product];
// // // // // // // // // //       await axios.patch(http://localhost:3031/users/${userId}, { cart: updatedCart });

      
// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: "Product added successfully",
// // // // // // // // // //         icon: "success",
// // // // // // // // // //         timer: 2000, 
// // // // // // // // // //         showConfirmButton: false,
// // // // // // // // // //       });

      
// // // // // // // // // //       setTimeout(() => {
// // // // // // // // // //         navigate("/addToCart");
// // // // // // // // // //         window.location.reload();
// // // // // // // // // //       }, 1000); 
// // // // // // // // // //     } catch (error) {
// // // // // // // // // //       console.error("Error occurred while adding the product:", error);
// // // // // // // // // //       Swal.fire({
// // // // // // // // // //         title: "Error",
// // // // // // // // // //         text: "Failed to add product to cart. Please try again.",
// // // // // // // // // //         icon: "error",
// // // // // // // // // //       });
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-8 bg-gray-50 min-h-screen">
// // // // // // // // // //       <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
// // // // // // // // // //         <div className="flex flex-col md:flex-row items-center justify-between">
// // // // // // // // // //           <div className="w-full md:w-1/2 mb-8 md:mb-0">
// // // // // // // // // //             <img
// // // // // // // // // //               src={product0Details.image}
// // // // // // // // // //               alt={productDetails.brand}
// // // // // // // // // //               className="w-full h-96 object-cover rounded-xl shadow-md"
// // // // // // // // // //             />
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="w-full md:w-1/2 md:pl-8">
// // // // // // // // // //             <h1 className="text-3xl font-semibold text-gray-800 mb-4">{productDetails.brand}</h1>
// // // // // // // // // //             <p className="text-xl font-bold text-gray-900 mb-2">₹{productDetails.price}</p>
// // // // // // // // // //             <p className="text-lg text-gray-600 mb-2">Discount: {productDetails.discount}%</p>
// // // // // // // // // //             <p className="text-lg text-gray-600 mb-4">
// // // // // // // // // //               Sizes: {productDetails.sizes ? productDetails.sizes.join(", ") : "N/A"}
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className="text-lg text-gray-700 mb-6">Description: {productDetails.description}</p>
// // // // // // // // // //             <button
// // // // // // // // // //               className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300 w-full"
// // // // // // // // // //               onClick={() => handleAddToCart(productDetails)}
// // // // // // // // // //             >
// // // // // // // // // //               Add to Cart
// // // // // // // // // //             </button>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //       <Footer />
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ProductDetails;

// // // // // // // // // import React, { useEffect, useContext, useState } from "react";
// // // // // // // // // import AOS from "aos";
// // // // // // // // // import "aos/dist/aos.css";
// // // // // // // // // import Footer from "../Footer";
// // // // // // // // // import { context_page } from "../../context/ProductContext";
// // // // // // // // // import { useCart } from "../../context/CartContext";
// // // // // // // // // import { useNavigate } from "react-router-dom";

// // // // // // // // // const Products = () => {
// // // // // // // // //   const { products } = useContext(context_page);
// // // // // // // // //   const { addWishlist, addToCart } = useCart();
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const [filteredproduct, setFilteredProduct] = useState([]);
// // // // // // // // //   const [selectedCategory, setSelectedCategory] = useState("All");

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     AOS.init({
// // // // // // // // //       duration: 1000,
// // // // // // // // //       once: true,
// // // // // // // // //     });
// // // // // // // // //   }, []);

// // // // // // // // //   // Filter products based on selected category
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (selectedCategory === "All") {
// // // // // // // // //       setFilteredProduct(products);
// // // // // // // // //     } else {
// // // // // // // // //       setFilteredProduct(
// // // // // // // // //         products.filter((product) => product.category === selectedCategory)
// // // // // // // // //       );
// // // // // // // // //     }
// // // // // // // // //   }, [selectedCategory, products]);

// // // // // // // // //   const handleCategoryClick = (category) => {
// // // // // // // // //     setSelectedCategory(category);
    
// // // // // // // // //   };

// // // // // // // // //   const handleNavigate = (productId) => {
// // // // // // // // //     navigate(/productDetails/${productId});
// // // // // // // // //   };

// // // // // // // // //   const handleAddToCart = async (product) => {
// // // // // // // // //     const user = localStorage.getItem("user")

// // // // // // // // //     if(!user){
// // // // // // // // //       alert('Please login to add items in the cart');
// // // // // // // // //       return 
// // // // // // // // //     }
// // // // // // // // //     try{
// // // // // // // // //       const productDetails = Array.isArray(products)
// // // // // // // // //       ? products.find((prod)=>prod.id === product.id) : null;

// // // // // // // // //       if(!productDetails){
// // // // // // // // //         alert("product details not found")
// // // // // // // // //         return;
// // // // // // // // //       }
// // // // // // // // //       addToCart(productDetails)
// // // // // // // // //       alert("Product added to the cart successfully!")
// // // // // // // // //     }catch(error){
// // // // // // // // //       console.error("error adding to cart:",error);
      
// // // // // // // // //     }
// // // // // // // // //   }
  

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //     <div className="bg-gray-100 pt-6 mb-5">
// // // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // // //         {/* Header */}
// // // // // // // // //         <div
// // // // // // // // //           className="text-center mb-10 max-w-[600px] mx-auto"
// // // // // // // // //           data-aos="fade-down"
// // // // // // // // //         >
// // // // // // // // //           <p className="text-sm text-primary">Top Selling Products</p>
// // // // // // // // //           <h1 className="text-3xl font-bold text-dark">Products</h1>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Category Buttons */}
// // // // // // // // //         <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6">
// // // // // // // // //           {["All", "Bed", "Sofa", "Chair", "Table"].map((category) => (
// // // // // // // // //             <button
// // // // // // // // //               key={ category}
// // // // // // // // //               className={`px-5 py-2 rounded-lg text-white text-lg font-medium transition duration-300 transform ${
// // // // // // // // //                 selectedCategory === category
// // // // // // // // //                   ? "bg-primary scale-105"
// // // // // // // // //                   : "bg-secondary hover:bg-primary"
// // // // // // // // //               }`}
// // // // // // // // //               onClick={() => handleCategoryClick(category)}
// // // // // // // // //             >
// // // // // // // // //               {category}
// // // // // // // // //             </button>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Grid of Product Cards */}
// // // // // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // // // // //           {filteredproduct.map((product, index) => (
            
// // // // // // // // //             <div
// // // // // // // // //               key={product.id}
// // // // // // // // //               className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
// // // // // // // // //               data-aos="fade-up"
// // // // // // // // //               data-aos-delay={${index * 100}}
// // // // // // // // //               onClick={() => handleNavigate(product.id)} // Navigate when card is clicked
// // // // // // // // //             >
// // // // // // // // //               <img
// // // // // // // // //                 src={product.image}
// // // // // // // // //                 alt={product.name}
// // // // // // // // //                 className="h-48 w-full object-cover"
// // // // // // // // //               />
// // // // // // // // //               <div className="p-4">
// // // // // // // // //                 <h2 className="text-lg font-semibold text-dark">{product.name}</h2>
// // // // // // // // //                 <p className="text-sm text-gray-500 my-2">{product.description}</p>
// // // // // // // // //                 <div className="flex items-center justify-between mt-3">
// // // // // // // // //                   <span className="text-xl text-primary font-bold">
// // // // // // // // //                     ${product.price}
// // // // // // // // //                   </span>
// // // // // // // // //                   <span
// // // // // // // // //                     className={`text-sm ${
// // // // // // // // //                       product.availability === "In stock"
// // // // // // // // //                         ? "text-red-600"
// // // // // // // // //                         : "text-green-600"
// // // // // // // // //                     }`}
// // // // // // // // //                   >
// // // // // // // // //                     {product.availability || "In stock"}
// // // // // // // // //                   </span>
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Add to Wishlist Button */}
// // // // // // // // //                 <button
// // // // // // // // //                   className="mt-4 w-full px-4 py-1 bg-primary text-white rounded-lg transition duration-300 hover:bg-secondary"
// // // // // // // // //                   onClick={(e) => {
// // // // // // // // //                     e.stopPropagation();
// // // // // // // // //                     addWishlist(product);
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   Add to WishList
// // // // // // // // //                 </button>

// // // // // // // // //                 {/* Add to Cart Button */}
// // // // // // // // //                 <button
// // // // // // // // //                   className="mt-2 w-full px-4 py-1 bg-third text-white rounded-lg transition duration-300 hover:bg-green-600"
// // // // // // // // //                   onClick={(e) => {
// // // // // // // // //                     e.stopPropagation();
// // // // // // // // //                     handleAddToCart(product)
                    
// // // // // // // // //                     // addToCart(product);
// // // // // // // // //                   }}
// // // // // // // // //                 >
// // // // // // // // //                   Add To Cart
// // // // // // // // //                 </button>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //       <Footer />
// // // // // // // // //     </div>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Products;


// // // // // // // // import React, { createContext, useState, useContext } from 'react';
// // // // // // // // import axios from 'axios';


// // // // // // // // const CartContext = createContext();

// // // // // // // // export const useCart = () => {
// // // // // // // //   return useContext(CartContext);
// // // // // // // // };

// // // // // // // // export const CartProvider = ({ children }) => {


// // // // // // // //   const [cart,setCart] = useState(()=>JSON.parse(localStorage.getItem('wishlist')) ||[])
// // // // // // // //   const [wishlist,setWishlist] = useState(()=>JSON.parse(localStorage.getItem('cart')) ||[])

// // // // // // // //   const addToCart = (product) => {
// // // // // // // //     setCart((prevCart) => {
// // // // // // // //       const isItemInCart = prevCart.find((item) => item.id === product.id);
// // // // // // // //       if (isItemInCart) {
// // // // // // // //         return prevCart.map((item) =>
// // // // // // // //           item.id === product.id
// // // // // // // //             ? { ...item, quantity: item.quantity + 1 }
// // // // // // // //             : item
// // // // // // // //         );
// // // // // // // //       } else {
// // // // // // // //         const updatedCart = [...prevCart, {...product,quantity:1}]
// // // // // // // //         localStorage.setItem('cart',JSON.stringify(updatedCart))
// // // // // // // //         return updatedCart
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //   }

  

// // // // // // // //   const removeFromCart = async (id) => {
// // // // // // // //     try {
// // // // // // // //       const user = localStorage.getItem('user');
// // // // // // // //       if(!user) {
// // // // // // // //         alert('User not logged in')
// // // // // // // //         return;
// // // // // // // //       }
// // // // // // // //       setCart((prevCart)=>{
// // // // // // // //         const updatedCart = prevCart.filter((item)=>item.id !== id)
// // // // // // // //         localStorage.setItem('cart',JSON.stringify(updatedCart))
// // // // // // // //         return updatedCart
// // // // // // // //       });
// // // // // // // //       const userId = user;
// // // // // // // //       const response = await axios.get(http://localhost:3004/users/${userId})
// // // // // // // //       const updatedCart=response.data.cart.filter((item)=>item.id)

// // // // // // // //       await axios.patch(http://localhost:3004/users/${userId},{
// // // // // // // //         cart:updatedCart
// // // // // // // //       })
    
// // // // // // // //       alert('Item removed from cart')
// // // // // // // //     }catch(error){
// // // // // // // //       console.error('Error while removing product from cart',error);
      
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const addWishlist = (product) => {
// // // // // // // //     setWishlist((prevWishlist)=>{
// // // // // // // //       const isProductWishlist = prevWishlist.find((item) =>item.id===product.id)
// // // // // // // //       if(isProductWishlist){
// // // // // // // //         return prevWishlist
// // // // // // // //       }else{
        
        
// // // // // // // //         return [...prevWishlist,product]
// // // // // // // //       }
// // // // // // // //     })
// // // // // // // //   }
// // // // // // // //   const removeWishlist=(id)=>{
// // // // // // // //     setWishlist((prevWishlist)=>prevWishlist.filter((item)=>item.id!==id))
// // // // // // // //   }

// // // // // // // //   const incrementQuantity=(id)=>{
// // // // // // // //     setCart((prevCart)=>{
// // // // // // // //       return prevCart.map((item)=>
// // // // // // // //       item.id===id ? {...item,quantity:item.quantity+1} : item)
// // // // // // // //     })
// // // // // // // //   }
// // // // // // // //   const decrementquantity = (id) => {
// // // // // // // //     setCart((prevCart)=>{
// // // // // // // //       return prevCart.map((item)=>
// // // // // // // //       item.id===id&&item.quantity>1
// // // // // // // //     ? {...item , quantity : item.quantity-1} : item
// // // // // // // //     )
// // // // // // // //     })
// // // // // // // //   }



// // // // // // // //   return (
// // // // // // // //     <CartContext.Provider value={{
// // // // // // // //       cart,
// // // // // // // //       wishlist,
// // // // // // // //       addToCart,
// // // // // // // //       removeFromCart,
// // // // // // // //       addWishlist,
// // // // // // // //       removeWishlist,
// // // // // // // //       incrementQuantity,
// // // // // // // //       decrementquantity,

// // // // // // // //       }}>
// // // // // // // //       {children}
// // // // // // // //     </CartContext.Provider>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // import React, {  useEffect, useState } from 'react'
// // // // // // // import {useCart} from '../../context/CartContext'
// // // // // // // import axios from 'axios'
// // // // // // // import Footer from '../Footer'
// // // // // // // import {  useNavigate } from 'react-router-dom'
// // // // // // // // import PaymentPage from '../PaymentPage/PaymentPage'

// // // // // const CartPage = () => {
// // // // //   const [toCart,setToCart] = useState([])

// // // // //   const user = localStorage.getItem('user')
// // // // //   const {removeFromCart}=useCart()
// // // // //   const navigate = useNavigate()

// // // // //   useEffect(()=>{
// // // // //     if(!user){
// // // // //       alert("Please login to view your cart")
// // // // //       return
// // // // //     }
// // // // //     const userId = user 
    
// // // // //     axios.get(http://localhost:3004/users/${userId})
// // // // //     .then((response)=>{
      
      
// // // // //       const updatedCart = response.data.cart
// // // // //       console.log("updated",updatedCart);
      
// // // // //       axios.patch(http://localhost:3004/users/${userId},{
// // // // //         cart:updatedCart
// // // // //       })
// // // // //       console.log("hh",updatedCart);
      
// // // // //       setToCart(updatedCart)
      
// // // // //     })
// // // // //     .catch((error)=>{
// // // // //       console.error("Error while removing product",error);
      
// // // // //     })
// // // // //   },[])
// // // // // // //   const handleRemove = (id) =>{
// // // // // // //     removeFromCart(id);
// // // // // // //     setToCart((prevCart)=>prevCart.filter((item)=> item.id !== id))
    
    
// // // // // // //   }
// // // // // // //   const calculateTotal=()=>{
// // // // // // //     return toCart.reduce((acc,item)=>acc+item.price,0)
// // // // // // //   }
// // // // // // //   const handlePayment = () =>{
// // // // // // //     navigate('/paymentdetails')
// // // // // // //   }
// // // // // // //   // const {removeWishlist} = useCart()
  
// // // // // // //  return (
// // // // // // //     <div className='mx-auto max-w-7xl px-6 py-12'>
// // // // // // //       <h1 className='text-3xl font-bold text-gray-800 mb-4 '>Your Cart</h1>
// // // // // // //       <div className='flex flex-col gap-6'>
// // // // // // //         {toCart.length === 0 ? (
// // // // // // //           <p className='text-xl text-gray-600'>Your cart is empty!</p>
// // // // // // //         ) : (
// // // // // // //           toCart.map((product) => (
// // // // // // //             <div key={product.id} className='flex items-center justify-between'>
// // // // // // //       .        <img src={product.image} alt={product.name} className='w-[100px] h-[100px] object-cover' />
// // // // // // //               <div className='flex-1 ml-4'>
// // // // // // //                 <h2 className='text-xl font-semibold'>{product.name}</h2>
// // // // // // //                 <p className='text-gray-600'>{product.price}</p>
// // // // // // //               </div>
// // // // // // //               <button 
// // // // // // //                 className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600'
// // // // // // //                 onClick={() => handleRemove(product.id)}
// // // // // // //               >
// // // // // // //                 Remove
// // // // // // //               </button>
// // // // // // //             </div>
           
// // // // // // //           ))
          
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //       {toCart.length>0&&(
// // // // // // //          <div className='mt-6'>
// // // // // // //          <div className='flex justify-between items-center'>
// // // // // // //            <span className='text-lg font-semibold'>Total:</span>
// // // // // // //            <span className='text-lg font-bold'>${calculateTotal()}</span>
// // // // // // //          </div>
// // // // // // //          <button
// // // // // // //            className='bg-primary text-white px-5 py-2 rounded-lg mt-4 hover:bg-green-600 mb-4'
// // // // // // //            onClick={handlePayment}
// // // // // // //          >
// // // // // // //            Proceed to Payment
// // // // // // //          </button>
// // // // // // //        </div>
// // // // // // //       )}
// // // // // // //       <Footer />
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default CartPage


// // // // // // import React from "react";
// // // // // // import { useCart } from '../../context/CartContext';
// // // // // // import { Link } from 'react-router-dom';

// // // // // // const WishList = () => {
// // // // // //   const { wishlist, addToCart, removeFromWishList } = useCart();

// // // // // //   return (
// // // // // //     <div className="container mx-auto p-4">
// // // // // //       <h1 className="text-3xl font-bold mb-4">Wishlist</h1>
// // // // // //       {wishlist.length === 0 ? (
// // // // // //         <p className="text-xl text-gray-500">Your wishlist is empty</p>
// // // // // //       ) : (
// // // // // //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //           {wishlist.map((item) => (
// // // // // //             <div key={item.id} className="border rounded-lg shadow-lg p-4">
// // // // // //               <img
// // // // // //                 src={item.image}
// // // // // //                 alt={item.name}
// // // // // //                 className="w-full h-64 object-cover rounded-lg mb-4"
// // // // // //               />
// // // // // //               <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
// // // // // //               <p className="text-lg text-gray-600 mb-4">{item.price}</p>

// // // // // //               <div className="flex justify-between items-center">
// // // // // //                 <button
// // // // // //                   onClick={() => addToCart(item)}
// // // // // //                   className="bg-primary text-white py-2 px-4 rounded-md hover:bg-third transition duration-200"
// // // // // //                 >
// // // // // //                   Add to Cart
// // // // // //                 </button>

// // // // // //                 <button
// // // // // //                   onClick={() => removeFromWishList(item.id)}
// // // // // //                   className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
// // // // // //                 >
// // // // // //                   Remove
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               <Link
// // // // // //                 to={/productDetails/${item.id}}
// // // // // //                 className="block text-center text-blue-500 mt-4 hover:underline"
// // // // // //               >
// // // // // //                 View Details
// // // // // //               </Link>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default WishList;

// // // // import React, { useState } from "react";
// // // // import axios from "axios";
// // // // import Swal from "sweetalert2";
// // // // import { useNavigate } from "react-router-dom";

// // // // const PayForm = () => {
// // // //   const navigate = useNavigate();
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     address: "",
// // // //     landmark: "",
// // // //     pin: "",
// // // //     paymentMethod: "",
// // // //     cashOnDelivery: false,
// // // //   });

// // // //   const [userData, setUserData] = useState({});
// // // //   const [userCart, setUserCart] = useState([])

// // // //   const handleChange = (e) => {
// // // //     const { name, value, type, checked } = e.target;
// // // //     setFormData((prevData) => ({
// // // //       ...prevData,
// // // //       [name]: type === "checkbox" ? checked : value,
// // // //     }));
// // // //   };

// // // //   const handlePayment = () =>{
// // // //     navigate('/payment')
// // // //   }

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const userId = localStorage.getItem("user");
// // // //     if (!userId) {
// // // //       console.error("User ID is not available in localStorage");
// // // //       return;
// // // //     }
// // // //     try {

// // // //       axios.get(http://localhost:3004/users/${userId})
// // // //       .then((res)=>{
// // // //         console.log(res.data)
// // // //         setUserData(res.data)
// // // //         setUserCart(res.data.cart)
// // // //       })
    
// // // //       // if(userCart.length === 0){
// // // //       //   Swal.fire('Error',"Cart is empty. No items to place an order .","error")
// // // //       //   return ;
// // // //       // }
  
// // // //       const updatedOrders = [...(userData.orders  []), ...userCart];

// // // //       await axios.patch(http://localhost:3004/users/${userId}, {
// // // //         cart: [],
// // // //         orders: updatedOrders,
// // // //       });

// // // //       Swal.fire("Payment Success", "Your order has been placed!", "success");
// // // //       navigate("/");
      
// // // //     } catch (error) {
// // // //       console.error(
// // // //         "Error updating user data",
// // // //         error.response?.data  error.message
// // // //       );
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-8 mt-12">
// // // //       <h2 className="text-3xl font-bold mb-8 text-center text-primary">Payment Form</h2>
// // // //       <form onSubmit={handleSubmit} className="space-y-6">
// // // //         <div className="space-y-4">
// // // //           <input
// // // //             type="text"
// // // //             name="name"
// // // //             placeholder="Full Name"
// // // //             value={formData.name}
// // // //             onChange={handleChange}
// // // //             className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third transition duration-300"
// // // //           />
// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             placeholder="Email Address"
// // // //             value={formData.email}
// // // //             onChange={handleChange}
// // // //             className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third transition duration-300"
// // // //           />
// // // //           <textarea
// // // //             name="address"
// // // //             placeholder="Address"
// // // //             value={formData.address}
// // // //             onChange={handleChange}
// // // //             className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third transition duration-300"
// // // //           ></textarea>
// // // //           <input
// // // //             type="text"
// // // //             name="landmark"
// // // //             placeholder="Landmark"
// // // //             value={formData.landmark}
// // // //             onChange={handleChange}
// // // //             className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third transition duration-300"
// // // //           />
// // // //           <input
// // // //             type="text"
// // // //             name="pin"
// // // //             placeholder="Pincode"
// // // //             value={formData.pin}
// // // //             onChange={handleChange}
// // // //             className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third transition duration-300"
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <select
// // // //             name="paymentMethod"
// // // //             value={formData.paymentMethod}
// // // //             onChange={handleChange}
// // // //             className="block w-full px-6 py-3 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-third transition duration-300"
// // // //           >
// // // //             <option value="">Select Payment Method</option>
// // // //             <option value="online">Online Payment</option>
// // // //             <option value="cash">Cash on Delivery</option>
// // // //           </select>
// // // //         </div>

// // // //         <div className="flex items-center">
// // // //           <input
// // // //             type="checkbox"
// // // //             name="cashOnDelivery"
// // // //             checked={formData.cashOnDelivery}
// // // //             onChange={handleChange}
// // // //             className="h-5 w-5 text-primary border-secondary rounded-lg focus:ring-2 focus:ring-third transition duration-300"
// // // //           />
// // // //           <label htmlFor="cashOnDelivery" className="ml-3 text-secondary text-sm">
// // // //             Cash on Delivery
// // // //           </label>
// // // //         </div>

// // // //         <div className="mt-6">
// // // //           <button
// // // //             type="submit"
// // // //             className="w-full py-3 px-6 bg-primary text-white rounded-lg hover:bg-secondary focus:outline-none focus:ring-4 focus:ring-third transition duration-300"
// // // //             onClick={handleSubmit}
// // // //           >
// // // //             Submit Payment
// // // //           </button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };
// // // // export default PayForm;


// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // const Order = () => {
// // //   const [orderProducts, setOrderProducts] = useState([]);
// // //   const userId = localStorage.getItem('user');
// // //   console.log("userss",userId);
  

 

// // //   useEffect(() => {
// // //     if (userId) {
// // //       axios
// // //         .get(http://localhost:3004/users/${userId})       
// // //         .then((response) => {
// // //           console.log("user data",response.data);
// // //           const userData = response.data
// // //          if(!userData.orders){ 
// // //           axios.patch(http://localhost:3004/users/${userId},{orders:[] })
// // //           .then(()=>{
// // //             console.log("orders are empty");
            
// // //           })
// // //           .catch((error)=>{
// // //             console.error("error initializing orders field",error);
            
// // //           })
          
// // //           // setOrderProducts(response.data.orders || []);
// // //           // console.log("order product",orderProducts)
          
// // //          }else{
// // //           setOrderProducts(userData.orders)
// // //           // console.log("no orders found for the user");
          
// // //          } 

// // //         })
// // //         .catch((error) => {
// // //           console.error("Error fetching order products:", error);
// // //         });
// // //     }
// // //   }, [userId]); 

  

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 py-10">
// // //       <div className="max-w-6xl mx-auto px-4">
// // //         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
// // //           Your Orders
// // //         </h1>

// // //         {orderProducts.length === 0 ? (
// // //           <p className="text-center text-gray-600 text-lg">
// // //             No orders found. Start shopping now!
// // //           </p>
// // //         ) : (
// // //           <div className="flex flex-wrap justify-center gap-6">
// // //             {orderProducts.map((product) => (
// // //               <div
// // //                 key={product.id}
// // //                 className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-72"
// // //               >
// // //                 <img
// // //                   src={product.image}
// // //                   alt={product.name || "Product"}
// // //                   className="w-full h-40 object-cover"
// // //                 />
// // //                 <div className="p-4">
// // //                   <h2 className="text-lg font-semibold text-gray-800">
// // //                     {product.name}
// // //                   </h2>
// // //                   <p className="text-gray-600 text-sm">
// // //                     {product.description}
// // //                   </p>
// // //                   <p className="text-gray-600 text-sm">
// // //                     Category: {product.category}
// // //                   </p>
// // //                   <p className="text-gray-800 font-bold mt-2">
// // //                     Price: {product.price || "N/A"}
// // //                   </p>
// // //                   <div className="mt-2">
// // //                     <span className="text-yellow-500 font-semibold">
// // //                       ⭐ {product.rating || "N/A"}
// // //                     </span>
// // //                   </div>
                  
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Order;


// // // import React, { useContext, useEffect, useState } from 'react';
// // // import { useNavigate, useParams } from 'react-router-dom';
// // // import { context_page } from '../../../context/ProductContext';
// // // import axios from 'axios';
// // // import Swal from 'sweetalert2';

// // // const Prodt = () => {
// // //   const [newName, setNewName] = useState('');
// // //   const [newImage, setNewImage] = useState('');
// // //   const [newPrice, setNewPrice] = useState('');
// // //   const [newDescription, setNewDescription] = useState('');
// // //   const [newCategories, setNewCategories] = useState('');
// // //   const [editDetails, setEditDetails] = useState({});
// // //   const [open, setClose] = useState(false);

// // //   const navigate = useNavigate();
// // //   const { id } = useParams();
// // //   const { products } = useContext(context_page);

// // //   const details = products.find((product) => product.id === id);

// // //   const valueToChange = {
// // //     image: newImage,
// // //     description: newDescription,
// // //     category: newCategories,
// // //     price: newPrice,
// // //     name: newName,
// // //   };

// // //   useEffect(() => {
// // //     if (details) {
// // //       setEditDetails(details);
// // //       setNewCategories(details.category);
// // //       setNewImage(details.image);
// // //       setNewDescription(details.description);
// // //       setNewName(details.name);
// // //       setNewPrice(details.price);
// // //     }
// // //   }, [details]);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.patch(http://localhost:3004/products/${id}, valueToChange);
// // //       Swal.fire('Product updated successfully!');
// // //       setClose(false); // Close the modal after saving
// // //     } catch (error) {
// // //       console.error('Error updating product', error);
// // //     }
// // //   };

// // //   const handleDelete = async () => {
// // //     try {
// // //       await axios.delete(http://localhost:3004/products/${id});
// // //       Swal.fire('Product deleted successfully!');
// // //       navigate(-1); // Navigate back after deleting
// // //     } catch (error) {
// // //       console.error('Error deleting product', error);
// // //     }
// // //   };

// // //   const handleBack = () => {
// // //     navigate(-1);
// // //   };

// // //   return (
// // //     <div className="p-6 ml-56">
// // //       <button
// // //         className="text-2xl font-semibold mb-4 hover:text-blue-600 ml-56"
// // //         onClick={handleBack}
        
// // //       >
// // //         ⇦
// // //       </button>
// // //       <div className="bg-white shadow-md rounded-lg p-6 w-1/2 mx-auto">
// // //         <h1 className="text-3xl font-bold mb-4">Product Details</h1>
// // //         <ul className="space-y-4">
// // //           <li>
// // //             <img
// // //               className="rounded-lg w-64 h-64 object-cover"
// // //               src={editDetails.image}
// // //               alt={editDetails.name}
// // //             />
// // //           </li>
// // //           <li className="text-xl font-semibold">{editDetails.name}</li>
// // //           <li className="text-gray-600">{editDetails.description}</li>
// // //           <li className="text-green-500 font-bold">Price: {editDetails.price}</li>
// // //           <li>
// // //             <button
// // //               className="bg-gradient-to-r from-secondary via-sixth to-third text-white px-4 py-2 rounded hover:bg-blue-600"
// // //               onClick={() => setClose(true)}
// // //             >
// // //               Edit Product
// // //             </button>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {open && (
// // //         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
// // //           <div className="bg-white rounded-lg shadow-lg p-8 w-1/3">
// // //             <h3 className="text-2xl font-bold mb-4">Edit Product</h3>
// // //             <form onSubmit={handleSubmit}>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Product Name</label>
// // //                 <input
// // //                   type="text"
// // //                   className="w-full border rounded p-2"
// // //                   value={newName}
// // //                   onChange={(e) => setNewName(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Product Price</label>
// // //                 <input
// // //                   type="text"
// // //                   className="w-full border rounded p-2"
// // //                   value={newPrice}
// // //                   onChange={(e) => setNewPrice(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Product Description</label>
// // //                 <input
// // //                   type="text"
// // //                   className="w-full border rounded p-2"
// // //                   value={newDescription}
// // //                   onChange={(e) => setNewDescription(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Product Image URL</label>
// // //                 <input
// // //                   type="text"
// // //                   className="w-full border rounded p-2"
// // //                   value={newImage}
// // //                   onChange={(e) => setNewImage(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="mb-4">
// // //                 <label className="block text-gray-700">Product Category</label>
// // //                 <input
// // //                   type="text"
// // //                   className="w-full border rounded p-2"
// // //                   value={newCategories}
// // //                   onChange={(e) => setNewCategories(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="flex space-x-4">
// // //                 <button
// // //                   type="button"
// // //                   className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// // //                   onClick={handleDelete}
// // //                 >
// // //                   Delete
// // //                 </button>
// // //                 <button
// // //                   type="submit"
// // //                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
// // //                 >
// // //                   Save
// // //                 </button>
// // //                 <button
// // //                   type="button"
// // //                   className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
// // //                   onClick={() => setClose(false)}
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Prodt;

// // import axios from "axios";
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const ProductsAdmin = () => {
// //   const [products, setProducts] = useState([]);
// //   const navigate = useNavigate()

// //   const handleEdit = (id) => {

// //     console.log(id)
// //     navigate(/admin/edit/${id})
// //   }
// //   const handleAdd=() => {
// //     navigate('/admin/addProduct')
// //   }

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:3004/products") // Replace with your backend URL
// //       .then((response) => {
// //         setProducts(response.data);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching products:", error);
// //       });
// //   }, []);

// //   return (
// //     <div className="relative p-6 bg-gray-100 min-h-screen ml-80">
     
// //       <h1 className="text-3xl font-bold text-center mb-8 ">Product List</h1>
// //       <div className="flex justify-center space-x-28 mt-6">
// //         <button className="bg-gray-200 text-black px-6 py-2 rounded hover:bg-blue-200 shadow-lg mb-10 flex justify-center ml-96" onClick={handleAdd}>Add product</button>
// //       </div>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white border border-gray-300 rounded-lg">
// //           <thead>
// //             <tr className="bg-gray-200">
// //               <th className="text-left px-4 py-2 border-b font-semibold">Image</th>
// //               <th className="text-left px-4 py-2 border-b font-semibold pl-10">Name</th>
// //               <th className="text-left px-4 py-2 border-b font-semibold">Category</th>
// //               <th className="text-left px-4 py-2 border-b font-semibold pl-28">Description</th>
// //               <th className="text-left px-4 py-2 border-b font-semibold pl-6">Price</th>
// //               <th className="text-left px-4 py-2 border-b font-semibold">More</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {products.map((product) => (
// //               <tr key={product.id} className="hover:bg-gray-100">
// //                 <td className="px-4 py-2 border-b">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="w-16 h-16 object-cover rounded-md"
// //                   />
// //                 </td>
// //                 <td className="px-4 py-2 border-b text-gray-800">{product.name}</td>
// //                 <td className="px-4 py-2 border-b text-gray-600">{product.category}</td>
// //                 <td className="px-4 py-2 border-b text-gray-700">{product.description}</td>
// //                 <td className="px-4 py-2 border-b text-gray-700 pr-14">{product.price}</td>
// //                 <button className="bg-secondary text-white  pl-8 pr-6 mt-4 mr-1" onClick={()=>handleEdit(product.id)}>View for edit</button>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductsAdmin;


// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// // import SignIn from "./pages/SignIn";
// // import Signup from "./pages/SignUp";
// // import Navbar from "./components/Navbar";
// // import Hero from "./components/Hero";
// // import ProductCard from "./components/ProductCard";
// // import './index.css';
// // import Products from "./components/Products/Products";
// // import Footer from "./components/Footer";
// // import Services from "./components/Services/Services";
// // import Contact from "./components/Services/Contact";
// // import { CartProvider } from "./context/CartContext"; // Import CartProvider
// // import ProductDetails from "./components/Products/ProductDetails";
// // import ProductContext from "./context/ProductContext";
// // import WishList from "./components/Cart/WishlistPage";
// // import CartPage from "./components/Cart/CartPage";
// // import Order from "./components/PaymentPage/Order";
// // import PayForm from "./components/PaymentPage/PayForm";
// // import Dashboard from "./components/Admin/Dashboard";
// // import ProductsAdmin from "./components/Admin/Products/Products";
// // import Users from "./components/Admin/User/Users";
// // import AdminMain from "./components/Admin/AdminMain";
// // import AddProduct from "./components/Admin/Products/AddProduct";
// // import Prodt from "./components/Admin/Products/prodt";
// // import UserDetails from "./components/Admin/User/UserDetails";
// // // import EditProduct from "./components/Admin/Products/Editproduct";
// // // import ProductsAdmin from "./components/Admin/Products/Products";

// // // import SideBar from "./components/Admin/SideBar";

// // function App() {
// //   return (
// //     <CartProvider>
// //       <ProductContext>
// //         <Router>
// //           <AppContent />
// //         </Router>
// //       </ProductContext>
// //     </CartProvider>
// //   );
// // }

// // function AppContent() {


// //   const location = useLocation()
// //   const excludedRoutes = ["/paymentdetails","/signin","/signup"]
// //   const hideNavbar = location.pathname.startsWith('/admin') || excludedRoutes.some(path => location.pathname === path)

// //   return (
// //     <>

// //       {!hideNavbar && <Navbar/>}

// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             <>
// //               <Hero />
// //               <ProductCard />
// //               <Footer />
// //             </>
// //           }
// //         />
// //         <Route path="/products" element={<Products />} />
// //         <Route path="/productDetails/:id" element={<ProductDetails />} />
// //         <Route path="/wishlist" element={<WishList />} />
// //         <Route path="/cart" element={<CartPage />} />
// //         <Route path="/services" element={<Services />} />
// //         <Route path="/contact" element={<Contact />} />
// //         <Route path="/order" element={<Order />} />
// //         <Route path="/paymentdetails" element={<PayForm />} />
// //         <Route path="/signin" element={<SignIn />} />
// //         <Route path="/signup" element={<Signup />} />

// //     {/------------------------>Admin-----------------------/}
// //         <Route path="/admin" element={<AdminMain/>}>
// //           <Route index element={<Dashboard/>}/>
// //           <Route path = "prdcts" element={<ProductsAdmin/>}/>
// //           <Route path = "users" element={<Users/>}/>
// //           <Route path="addProduct" element={<AddProduct />}/>
// //           <Route path="edit/:id"element={<Prodt/>}></Route>
// //           <Route path="userDetails/:id" element={<UserDetails/>}></Route>

// //           {/* <Route path = "editproduct" element={<EditProduct/>}/> */}
// //         </Route>
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';

// // const AddProduct = () => {
// //   const [product, setProduct] = useState({
// //     name: '',
// //     description: '',
// //     category: '',
// //     image: '',
// //   });
// //   const navigate = useNavigate();

// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setProduct({ ...product, [name]: value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (!product.name || !product.description || !product.category || !product.image) {
// //       setError('All fields are required');
// //       return;
// //     }

// //     axios
// //       .post('http://localhost:3004/products', product)
// //       .then(() => {
// //         setError('');
// //         Swal.fire('Product added successfully');
// //         navigate('/admin/prdcts');
// //       })
// //       .catch((error) => {
// //         setError('Error adding product');
// //         console.error('Error adding product:', error);
// //       });
// //   };

// //   return (
// //     <div className="p-6 bg-white min-h-screen">
// //       <h1 className="text-3xl font-bold text-secondary text-center mb-8">Add Product</h1>
// //       <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-200 p-6 rounded-lg shadow-lg">
// //         <div className="mb-4">
// //           <label htmlFor="name" className="block text-sm font-semibold text-forth">Product Name</label>
// //           <input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={product.name}
// //             onChange={handleChange}
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
// //             placeholder="Enter product name"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="description" className="block text-sm font-semibold text-forth">Description</label>
// //           <textarea
// //             id="description"
// //             name="description"
// //             value={product.description}
// //             onChange={handleChange}
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
// //             placeholder="Enter product description"
// //           ></textarea>
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="category" className="block text-sm font-semibold text-forth">Category</label>
// //           <input
// //             type="text"
// //             id="category"
// //             name="category"
// //             value={product.category}
// //             onChange={handleChange}
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
// //             placeholder="Enter product category"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="image" className="block text-sm font-semibold text-forth">Image URL</label>
// //           <input
// //             type="text"
// //             id="image"
// //             name="image"
// //             value={product.image}
// //             onChange={handleChange}
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
// //             placeholder="Enter product image URL"
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label htmlFor="price" className="block text-sm font-semibold text-forth">Product Price</label>
// //           <input
// //             type="text"
// //             id="price"
// //             name="Price"
// //             value={product.price}
// //             onChange={handleChange}
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
// //             placeholder="Enter product price"
// //           />
// //         </div>

// //         {error && <p className="text-fifth text-sm">{error}</p>}

// //         <div className="flex justify-center mt-6">
// //           <button
// //             type="submit"
// //             className="px-8 py-2 bg-secondary text-third rounded-md hover:bg-fifth transition-colors duration-200"
// //           >
// //             Add Product
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default AddProduct;

// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react';
// // import {  useNavigate } from 'react-router-dom';

// // const Users = () => {
// //   const [user, setUser] = useState([]); 
// //   const navigate = useNavigate()
// //   const handleNavigate = (id) => {
// //     console.log("id",id);
    
// //     navigate(/admin/userDetails/${id})
// //   }

// //   useEffect(() => {
// //     axios
// //       .get('http://localhost:3004/users')
// //       .then((res) => {
// //         const filteredUsers = res.data.filter((u)=>!u.email.startsWith('Admin'))
// //         setUser(filteredUsers);
// //         console.log("user", filteredUsers);
// //       })
// //       .catch((error) => {
// //         console.error("Fetching error", error);
// //       });
// //   }, []); // Empty array as dependency to run the effect once

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       {/* Outer box for the entire content */}
// //       <div className="bg-white p-6 rounded-lg shadow-lg">
// //         <table className="min-w-full table-auto border-collapse border border-gray-300">
// //           <thead>
// //             <tr className="bg-gray-200">
// //               <th className="px-4 py-2 border-b text-left">USER ID</th>
// //               <th className="px-4 py-2 border-b text-left">NAME</th>
// //               <th className="px-4 py-2 border-b text-left">EMAIL</th>
// //               <th  className="px-4 py-2 border-b text-left">VIEW MORE</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {user.map((user) => (
// //               <tr key={user.id} className="hover:bg-gray-100">
// //                 <td className="px-4 py-2 border-b">{user.id}</td>
// //                 <td className="px-4 py-2 border-b">{user.username}</td>
// //                 <td className="px-4 py-2 border-b">{user.email}</td>
// //                 <td className="px-4 py-2 border-b">
// //                   <button onClick={()=>handleNavigate(user.id)} className="text-blue-500 hover:underline">
// //                     View More
// //                   </button>
// // //                 </td>
// // //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Users;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const UserDetails = () => {
//   const [userData, setUserData] = useState({});
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Fetch user data on load
//   useEffect(() => {
//     axios
//       .get(http://localhost:3004/users/${id})
//       .then((response) => {
//         setUserData(response.data);
//         console.log("Fetched userData:", response.data);
//       })
//       .catch((error) => {
//         console.error("Fetching data error", error);
//       });
//   }, [id]);

//   // Toggle 'isLogged' status
//   const handleLog = () => {
//     const updatedStatus = !userData.isLogged;
//     axios
//       .patch(http://localhost:3004/users/${id}, { isLogged: updatedStatus })
//       .then((response) => {
//         setUserData(response.data);
//         console.log("Updated userData:", response.data);
//       })
//       .catch((error) => {
//         console.error("Error updating user data:", error);
//       });
//   };

//   // Navigate back
//   const handleBack = () => {
//     navigate(-1);
//   };

//   return (
//     <div className="pl-10 ml-60">
//     <div className="w-full bg-white pl-8">
//       {/* Back Button */}
//       <button
//         onClick={handleBack}
//         className="text-3xl font-semibold mb-4 hover:text-blue-600 ml-16 pt-3"
//       >
//         ⇦ 
//       </button>

//       {/* Logo */}
//       <div className="flex justify-center mb-6 ">
//         <img
//           src="https://i.pinimg.com/736x/fb/aa/c9/fbaac96db045e2290593d6f3c73ebc40.jpg"
//           alt="logo"
//           className="w-24 h-24 rounded-full"
//         />
//       </div>

//       {/* User Details */}
//       <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">User Details</h1>
//         <ul className="text-gray-700 space-y-2">
//           <li>
//             <strong>Name:</strong> {userData.username || "N/A"}
//           </li>
//           <li>
//             <strong>Email:</strong> {userData.email || "N/A"}
//           </li>
//         </ul>
//       </div>

//       {/* Cart Details */}
//       <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Cart Details</h1>
//         {userData.cart && userData.cart.length > 0 ? (
//           <ul className="space-y-4">
//             {userData.cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-lg object-cover mr-4"
//                 />
//                 <div>
//                   <p className="font-medium text-gray-800">{item.name}</p>
//                   <p className="text-gray-600">${item.price}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 italic">No items in the cart</p>
//         )}
//       </div>

//       {/* Order Details */}
//       <div className="max-w-3xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Details</h1>
//         {userData.orders && userData.orders.length > 0 ? (
//           <ul className="space-y-4">
//             {userData.orders.map((order, index) => (
//               <li
//                 key={index}
//                 className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm"
//               >
//                 <img
//                   src={order.image}
//                   alt={order.name}
//                   className="w-16 h-16 rounded-lg object-cover mr-4"
//                 />
//                 <div>
//                   <p className="font-medium text-gray-800">{order.name}</p>
//                   <p className="text-gray-600">${order.price}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500 italic">No orders found</p>
//         )}
//       </div>

//       {/* Block/Unblock Button */}
//       <div className="flex justify-center mt-6">
//         <button
//           onClick={handleLog}
//           className={`px-6 py-2 font-medium text-white rounded-lg shadow-md transition duration-300 ${
//             userData.isLogged
//               ? "bg-red-500 hover:bg-red-600"
//               : "bg-green-500 hover:bg-green-600"
//           }`}
//         >
//           {userData.isLogged ? "Block" : "Unblock"}
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';  // This will render the child routes
import classes from './Adminlayout.module.scss';  // Add SCSS for the layout

const AdminLayout = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();  

  useEffect(() => {

    const user = localStorage.getItem("user");
    
    if (user) {

      const parsedUser = JSON.parse(user);
      

      if (parsedUser.isAdmin) {
        setAdmin(true);
      } else {
        setAdmin(false); 
      }
    }
  }, []);  
  if (!admin) {

    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow rounded">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Access Denied</h1>
          <p className="text-gray-600">You do not have permission to access this page.</p>
        </div>
      </div>
    );
  }

  const handleItemClick = (item) => {
    setActiveItem(item);  // Update active item when clicked
  };

  return (
    <div className={classes.adminLayout}>
      {/* Sidebar Component */}
      <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />

      {/* Main Content */}
      <main className={classes.mainContent}>
        <Outlet />  {/* This renders the nested routes */}
      </main>
    </div>
  );
};

export default AdminLayout;