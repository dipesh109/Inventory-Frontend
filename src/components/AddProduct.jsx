import React,{useState} from "react";
import {makeAuthenticatedPOSTRequest,} from "../utils/serverhelper";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
 // handing add product request


  const [name, setName] = useState(""); // Initialize with empty string
  const [sku, setSku] = useState(""); // Initialize with empty string
  const [category, setCategory] = useState(""); // Initialize with empty string
  const [price, setPrice] = useState(""); // Initialize with empty string
  const [quantity, setQuantity] = useState(""); // Initialize with empty string
  const [description, setDescription] = useState(""); // Initialize with empty string

  const navigate = useNavigate();

  const submitProduct = async (e) => {
    e.preventDefault();
     if (!name || !sku || !category || !price || !quantity || !description) {
       alert("Please fill in all fields before submitting.");
       return;
     }

    const data = { name, sku, category, price, quantity, description };

    const response = await makeAuthenticatedPOSTRequest("/api/products/", data);

    if (response.err) {
      alert("Could not create product");
      return;
    }
    alert("Success");
    navigate("/warehouse");
      // Reset form
    
    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setDescription("");
   
  };





  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Product</h2>
      <form style={styles.form} onSubmit={submitProduct}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            name="product"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>SKU</label>
          <input
            type="text"
            placeholder="Enter product SKU"
            name="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* <div style={styles.formGroup}>
          <label style={styles.label}>Product Category</label>
          <select
            type="text"
            name="category"
            style={styles.input}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="liquor">Liquor</option>
            <option value="food">Food</option>
            <option value="beverages">Beverages</option>
          </select>
        </div> */}

        <div style={styles.formGroup}>
          <label style={styles.label}>Category</label>
          <input
            type="text"
            placeholder="Enter product Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
          />
        </div>

        <div style={styles.gridContainer}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Price</label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              step="0.01"
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Quantity</label>
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="0"
              step="1"
              style={styles.input}
            />
          </div>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Product Description</label>
          <textarea
            placeholder="Quantity"
            name="quantity"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
          />
        </div>

        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },
  label: {
    color: "#555",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    minHeight: "120px",
    boxSizing: "border-box",
    resize: "vertical",
  },
  button: {
    backgroundColor: "#7c3aed",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};

export default AddProduct;

// import React, { useState } from "react";
// import { addProduct } from "../api"; // Import the API function

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await addProduct(formData);
//       if (response.data) {
//         alert("Product added successfully!");
//         // Reset form
//         setFormData({
//           name: "",
//           category: "",
//           price: "",
//           quantity: "",
//           description: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Add New Product</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter product name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Liquor">Liquor</option>
//             <option value="Food">Food</option>
//             <option value="Beverages">Beverages</option>
//           </select>
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Price</label>
//           <input
//             type="number"
//             name="price"
//             placeholder="Enter price"
//             value={formData.price}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Enter quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Description</label>
//           <textarea
//             name="description"
//             placeholder="Write Description Of Product"
//             value={formData.description}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.button}>
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles remain the same
// const styles = {
//   container: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     maxWidth: "600px",
//     margin: "0 auto",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "24px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   formGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "5px",
//   },
//   label: {
//     color: "#555",
//     fontWeight: "bold",
//     fontSize: "14px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "14px",
//   },
//   button: {
//     backgroundColor: "#7c3aed",
//     color: "white",
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "10px",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
// };

// export default AddProduct;
