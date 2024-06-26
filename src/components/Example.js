// import React, { useState } from 'react';

// const ProductForm = ({ formData, setFormData, handleSubmit }) => {
//   const [imageFiles, setImageFiles] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setImageFiles(e.target.files);
//   };

//   return (
//     <div className="w-full lg:w-1/2 bg-orange-200 overflow-y-auto max-h-screen rounded-lg shadow-md p-6">
//       <h2 className="text-2xl font-bold mb-4">
//         {formData.id ? 'Edit Product' : 'Add Product'}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Product Name
//           </label>
//           <div className="mt-2">
//             <input
//               type="text"
//               name="productName"
//               value={formData.productName}
//               onChange={handleChange}
//               required
//               className="block w-full border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
//               placeholder="Enter Product Name"
//             />
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Brand Name
//           </label>
//           <div className="mt-2">
//             <input
//               type="text"
//               name="brandName"
//               value={formData.brandName}
//               onChange={handleChange}
//               required
//               className="block w-full border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
//               placeholder="Enter Brand Name"
//             />
//           </div>
//         </div>

//         <div className="sm:col-span-3">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Category
//           </label>
//           <div className="mt-2">
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//               className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-lg"
//             >
//               <option value="" disabled>
//                 Select a category
//               </option>
//               <option value="Clothing">Clothing</option>
//               <option value="Shoes">Shoes</option>
//               <option value="Furniture">Furniture</option>
//             </select>
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Price
//           </label>
//           <div className="mt-2">
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//               min={500}
//               className="block w-full border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
//               placeholder="Enter Product Price"
//             />
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Colours
//           </label>
//           <div className="mt-2">
//             <input
//               type="text"
//               name="colours"
//               value={formData.colours}
//               onChange={handleChange}
//               className="block w-full border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
//               placeholder="Enter colours separated by commas"
//             />
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Available Sizes
//           </label>
//           <div className="mt-2">
//             <input
//               type="text"
//               name="availableSizes"
//               value={formData.availableSizes}
//               onChange={handleChange}
//               className="block w-full border-0 bg-transparent py-2 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-lg"
//               placeholder="Enter sizes separated by commas"
//             />
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Product Details
//           </label>
//           <div className="mt-2">
//             <textarea
//               name="productDetails"
//               value={formData.productDetails}
//               onChange={handleChange}
//               className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//               rows={4}
//               placeholder="Enter product details separated by commas"
//             />
//           </div>
//         </div>

//         <div className="sm:col-span-4">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Description
//           </label>
//           <div className="mt-2">
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
//               rows={4}
//               placeholder="Enter Product Description"
//             />
//           </div>
//         </div>

//         <div className="col-span-full">
//           <label className="block text-lg font-medium leading-6 text-gray-900">
//             Product Images
//           </label>
//           <div className="mt-2">
//             <input
//               type="file"
//               name="images"
//               accept=".jpg, .jpeg, .png"
//               multiple
//               onChange={handleFileChange}
//               className="block w-full text-lg text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-md bg-slate-900 px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           {formData.id ? 'Update' : 'Add'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;
