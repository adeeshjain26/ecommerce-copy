import React, { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal'; // Adjust the path as per your file structure

const AdminPage = () => {
  const navigate = useNavigate();
  const { addProduct, editProduct, removeProduct, products } = useContext(ProductContext);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    category: '',
    price: 0,
    image: '',
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [confirmationCallback, setConfirmationCallback] = useState(() => () => {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmation = (message, onConfirm) => {
    setConfirmationMessage(message);
    setConfirmationCallback(() => onConfirm);
    setShowConfirmation(true);
  };

  const handleAddOrUpdate = async () => {
    if (formData.id) {
      await editProduct(formData.id, formData);
    } else {
      await addProduct(formData);
    }
    setFormData({
      id: null,
      name: '',
      category: '',
      price: 0,
      image: '',
    });
    navigate('/shop');
  };

  const handleEdit = (product) => {
    handleConfirmation('Are you sure you want to edit this product?', () => setFormData(product));
  };

  const handleDelete = async (productId) => {
    handleConfirmation('Are you sure you want to delete this product?', async () => {
      await removeProduct(productId);
      navigate('/shop');
    });
  };

  const handleConfirm = () => {
    confirmationCallback();
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-6">Product Management</h2>
      <div className="flex flex-col lg:flex-row w-full max-w-7xl space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Product List</h2>
          <ul>
            {products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center border-b last:border-b-0 py-2 text-lg"
              >
                <div>
                  <span className="font-semibold">{product.name}</span> - {product.category} - ₹{product.price}
                </div>
                <div>
                  <button
                    onClick={() => handleEdit(product)}
                    className="text-blue-500 hover:text-blue-700 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">{formData.id ? 'Edit Product' : 'Add Product'}</h2>
          <form onSubmit={handleAddOrUpdate} className="space-y-6">
            <div className="sm:col-span-4">
              <label className="block text-lg font-medium leading-6 text-gray-900">
                Product Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block flex-1 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
                    placeholder="Enter Product Name"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label className="block text-lg font-medium leading-6 text-gray-900">
                Categories
              </label>
              <div className="mt-2">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="Clothing">Clothing</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label className="block text-lg font-medium leading-6 text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    min={500}
                    className="block flex-1 border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
                    placeholder="Enter Product Price"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label className="block text-lg font-medium leading-6 text-gray-900">
                Product Image
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="imageFile"
                  accept=".jpg, .jpeg, .png" 
                  onChange={handleFileChange}
                  className="block w-full text-lg text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-blue-800 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {formData.id ? "Update" : "Add"}
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <ConfirmationModal
          message={confirmationMessage}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default AdminPage;
