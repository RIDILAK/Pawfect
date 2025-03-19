import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductEdit = () => {
  const [products, SetProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [newPrice, setNewPrice] = useState(null);
  const [newDescription, setNewDescription] = useState("");
  const [newCategories, setNewCategories] = useState(null);
  const [newQuantity, setNewQuantity] = useState(null);
  const [newRating, SetNewRating] = useState(null);
  const [editDetails, setEditDetails] = useState({});
  const [open, setClose] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const getCategory = () => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Admin/GetAllCategory`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setCategories(response.data.data);
        console.log("category", response.data.data);
      })
      .catch((error) => {
        console.error("Error Fetching Categories:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASEURL}/api/Product/GetALl`)
      .then((response) => {
        SetProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
    getCategory();
  }, []);

  const details = products.find((product) => product.id.toString() === id);

  useEffect(() => {
    if (details) {
      setEditDetails(details);
      setNewName(details.productName);
      setNewImage(details.imageFile);
      setNewPrice(details.price);
      SetNewRating(details.rating);
      setNewQuantity(details.quantity);
      setNewDescription(details.description);
      setNewCategories(details.categoryId);
    }
  }, [details]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("productName", newName);
      formData.append("price", Number(newPrice));
      formData.append("rating", Number(newRating));
      formData.append("quantity", Number(newQuantity));
      formData.append("description", newDescription);
      formData.append("categoryId", Number(newCategories));

      if (newImage instanceof File) {
        formData.append("imageFile", newImage);
      }

      await axios.put(
        `${import.meta.env.VITE_BASEURL}/api/Admin/UpdateProduct`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
          params: {
            id: id,
          },
        }
      );

      Swal.fire("Product updated successfully!");
      setClose(false);
      navigate(-1);
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASEURL}/api/Admin/DeleteProduct`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            id: id,
          },
        }
      );

      Swal.fire("Product deleted successfully");
      navigate(-1);
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-fourth p-8">
      <button
        onClick={handleBack}
        className="text-primary text-xl font-semibold mb-6"
      >
        ⇦ Back to Products
      </button>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-primary mb-4">
          Product Details
        </h1>
        <ul className="space-y-4">
          <li>
            <img
              src={editDetails.url}
              alt={editDetails.productName}
              className="w-40 h-40 object-cover rounded-md border border-third"
            />
          </li>
          <li className="text-xl font-semibold text-primary">
            {editDetails.productName}
          </li>
          <li className="text-md text-secondary">{editDetails.description}</li>
          <li className="text-lg text-primary">Price: ₹{editDetails.price}</li>
          <li className="text-lg text-primary">
            Quantity: {editDetails.quantity}
          </li>
          <li>
            <button
              onClick={() => setClose(true)}
              className="px-4 py-2 mt-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
            >
              Edit Product
            </button>
          </li>
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Edit Product
            </h3>
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
                <label className="block text-primary mb-2">
                  Product Description
                </label>
                <input
                  type="text"
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full px-4 py-2 border border-third rounded-md"
                />
              </div>

              <div>
                <label className="block text-primary mb-2">Product Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border border-third rounded-md"
                />
              </div>

              {/* <div>
                                <label className="block text-primary mb-2">Product Category</label>
                                <input
                                    type="number"
                                    value={newCategories}
                                    onChange={(e) => setNewCategories(e.target.value)}
                                    className="w-full px-4 py-2 border border-third rounded-md"
                                />
                            </div> */}

              <div>
                <label className="block text-primary mb-2">
                  Product Category
                </label>
                <select
                  value={newCategories}
                  onChange={(e) => setNewCategories(e.target.value)}
                  className="w-full px-4 py-2 border border-third rounded-md"
                >
                  <option value="">Select a category</option>
                  {categories &&
                    categories.map((category, i) => (
                      <option key={i} value={category.categoryId}>
                        {category.categoryName}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-primary mb-2">
                  Product Rating
                </label>
                <input
                  type="number"
                  value={newRating}
                  onChange={(e) => SetNewRating(e.target.value)}
                  className="w-full px-4 py-2 border border-third rounded-md"
                />
              </div>

              <div>
                <label className="block text-primary mb-2">
                  Product Quantity
                </label>
                <input
                  type="number"
                  value={newQuantity}
                  onChange={(e) => setNewQuantity(e.target.value)}
                  className="w-full px-4 py-2 border border-third rounded-md"
                />
              </div>

              <div className="space-x-4">
                <button
                  onClick={handleDelete}
                  className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setClose(false)}
                  className="px-6 py-2 bg-secondary text-white rounded-md hover:bg-secondary/80 transition"
                >
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
