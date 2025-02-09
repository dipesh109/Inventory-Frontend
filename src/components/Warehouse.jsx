import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import AddProduct from "./AddProduct";
// import Accounts from "./Account";
// import Reportbug from "./ReportBug";
import Profile from "./Profile";
import { makeAuthenticatedGETRequest } from "../utils/serverhelper";
import {
  Package,
  DollarSign,
  AlertOctagon,
  Tags,
  Edit2,
  Trash2,
  Save,
} from "lucide-react";
import { backendUrl } from "../utils/config";

const StatsCard = ({ color, icon: Icon, title, value }) => (
  <div
    style={{
      backgroundColor: color,
      flex: "1 1 200px",
      color: "white",
      padding: "15px",
      display: "flex",
      alignItems: "center",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    }}
  >
    <div
      style={{
        height: "40px",
        width: "40px",
        backgroundColor: "rgba(255,255,255,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        marginRight: "15px",
      }}
    >
      <Icon size={24} />
    </div>
    <div>
      {title}
      <div style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{value}</div>
    </div>
  </div>
);

const Dashboard = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [brands, setBrands] = useState([
  //   { name: "Absolut Vodka", category: "liquor", price: 20, quantity: 10 },
  //   { name: "Jack Daniel's", category: "whiskey", price: 30, quantity: 15 },
  //   { name: "Turburg", category: "beer", price: 5, quantity: 50 },
  //   { name: "Moët & Chandon", category: "champagne", price: 50, quantity: 8 },
  //   { name: "Khukuri", category: "rum", price: 25, quantity: 20 },
  //   { name: "Johnnie Walker", category: "whiskey", price: 40, quantity: 12 },
  //   { name: "Corona", category: "beer", price: 4, quantity: 60 },
  //   { name: "Grey Goose", category: "vodka", price: 35, quantity: 18 },
  //   { name: "Patrón", category: "tequila", price: 45, quantity: 10 },
  //   { name: "Arna", category: "beer", price: 6, quantity: 40 },
  // ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [tempPrice, setTempPrice] = useState(0);
  const [tempQuantity, setTempQuantity] = useState(0);

  const itemsPerPage = 5;

  // Function to fetch products from your API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await makeAuthenticatedGETRequest("/api/products");
        console.log("Fetched Products:", products); // Debugging
        setBrands(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  console.log(brands);

  const totalValue = Array.isArray(brands)
    ? brands.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;
  // eslint-disable-next-line no-undef
  const outOfStock = Array.isArray(brands)
    ? brands.filter((item) => item.quantity <= 0).length
    : 0;

  const categories = Array.isArray(brands)
    ? new Set(brands.map((item) => item.category)).size
    : 0;

  const handleEdit = (index) => {
    const product = brands[index];
    // setTempName(product.name);
    // setTempCategory(product.category);
    setTempPrice(product.price);
    setTempQuantity(product.quantity);
    // setTempDescription(product.description);
    setEditingIndex(index);
  };

  const handleSave = async (index) => {
    //  try {
    
    //   const confirmDelete = window.confirm(
    //     "Are you sure you want to delete this product?"
    //   );
    // const product = brands[index];
    const updatedProduct = {
      ...brands[index],
      // name: tempName,
      // category: tempCategory,
      price: tempPrice,
      quantity: tempQuantity,
      // description: tempDescription,
    };

    try {
      const response = await fetch(
        `${backendUrl}/api/products/${brands[index]._id}`,
        {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      const updatedData = await response.json();

      setBrands((prevBrands) => {
        return prevBrands.map((item, i) =>
          i === index ? { ...item, ...updatedProduct } : item
        );
      });

      setEditingIndex(null);
      setTempPrice(0);
      setTempQuantity(0);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async (id) => {
     try {
    
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this product?"
      );
     if(confirmDelete){
      const response = await fetch(`${backendUrl}/api/products/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Error ${response.status}`);
      }

      console.log("Product deleted successfully");
      setBrands((prevBrands) => prevBrands.filter((item) => item._id !== id));
    } } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const currentItems = Array.isArray(brands)
    ? brands.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  return (
    <>
      <div className="container" style={{ marginLeft: "100px", width: "70vw" }}>
        <h1
          style={{
            backgroundColor: "#e7e3e2",
            padding: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          Inventory Stats
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <StatsCard
            color="#7c3aed"
            icon={Package}
            title="Total Products"
            value={brands.length}
          />
          <StatsCard
            color="#059669"
            icon={DollarSign}
            title="Total Store Value"
            value={`$${totalValue}`}
          />
          <StatsCard
            color="#dc2626"
            icon={AlertOctagon}
            title="Out of Stock"
            value={outOfStock}
          />
          <StatsCard
            color="#2563eb"
            icon={Tags}
            title="All Categories"
            value={categories}
          />
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Inventory Items
          </h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f8fafc" }}>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    S/N
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Category
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "right",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Price
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "right",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Quantity
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "right",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Value
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "center",
                      borderBottom: "2px solid #e2e8f0",
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    key={item._id}
                    style={{ borderBottom: "1px solid #e2e8f0" }}
                  >
                    <td style={{ padding: "12px" }}>
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td style={{ padding: "12px" }}>{item.name}</td>
                    <td style={{ padding: "12px" }}>{item.category}</td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      {editingIndex === index ? (
                        <input
                          type="number"
                          value={tempPrice}
                          onChange={(e) => setTempPrice(Number(e.target.value))}
                          style={{ width: "80px", padding: "4px" }}
                        />
                      ) : (
                        `$${item.price}`
                      )}
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      {editingIndex === index ? (
                        <input
                          type="number"
                          value={tempQuantity}
                          onChange={(e) =>
                            setTempQuantity(Number(e.target.value))
                          }
                          style={{ width: "80px", padding: "4px" }}
                        />
                      ) : (
                        item.quantity
                      )}
                    </td>
                    <td style={{ padding: "12px", textAlign: "right" }}>
                      ${item.price * item.quantity}
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      {editingIndex === index ? (
                        <button
                          onClick={() => handleSave(index)}
                          style={{
                            padding: "6px 12px",
                            marginRight: "8px",
                            backgroundColor: "#10b981",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          <Save size={16} />
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(index)}
                            style={{
                              padding: "6px 12px",
                              marginRight: "8px",
                              backgroundColor: "#3b82f6",
                              color: "white",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            style={{
                              padding: "6px 12px",
                              backgroundColor: "#ef4444",
                              color: "white",
                              border: "none",
                              borderRadius: "4px",
                              cursor: "pointer",
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "20px",
            }}
          >
            {Array.from({
              length: Math.ceil(brands.length / itemsPerPage),
            }).map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                style={{
                  padding: "8px 12px",
                  backgroundColor:
                    currentPage === i + 1 ? "#3b82f6" : "#f1f5f9",
                  color: currentPage === i + 1 ? "white" : "#64748b",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Warehouse = () => {
  const [currentView, setCurrentView] = useState("dashboard");

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "add-product":
        return <AddProduct />;
      // case "accounts":
      //   return <Accounts />;
      // case "report-bug":
      //   return <Reportbug />;
      case "myprofile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar setCurrentView={setCurrentView} currentView={currentView} />
      <main
        style={{
          marginLeft: "150px",
          flex: 1,
          padding: "20px",
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
          transition: "margin-left 0.3s ease",
        }}
      >
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default Warehouse;
