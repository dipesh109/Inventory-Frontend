// // import React, { useState } from "react";

// // const Warehouse = () => {
// //   // State to manage which view is currently active
// //   const [currentView, setCurrentView] = useState("dashboard");

// //   // Function to render the current view based on sidebar selection
// //   const renderCurrentView = () => {
// //     switch (currentView) {
// //       case "dashboard":
// //         return (
// //           <>
// //             <div
// //               style={{
// //                 backgroundColor: "#e7e3e2",
// //                 padding: "20px",
// //                 fontSize: "20px",
// //                 fontFamily: "serif",
// //               }}
// //             >
// //               Inventory Stats
// //             </div>
// //             <div
// //               style={{
// //                 display: "flex",
// //                 flexWrap: "wrap",
// //                 gap: "15px",
// //                 padding: "10px",
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   backgroundColor: "#fa03ed",
// //                   flex: "1 1 200px",
// //                   color: "white",
// //                   padding: "15px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     height: "40px",
// //                     width: "40px",
// //                     backgroundColor: "rgba(255,255,255,0.2)",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     borderRadius: "50%",
// //                     marginRight: "15px",
// //                   }}
// //                 >
// //                   🛒
// //                 </div>
// //                 <div>
// //                   Total Products
// //                   <div>2</div>
// //                 </div>
// //               </div>
// //               <div
// //                 style={{
// //                   backgroundColor: "#56fc05",
// //                   flex: "1 1 200px",
// //                   color: "white",
// //                   padding: "15px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     height: "40px",
// //                     width: "40px",
// //                     backgroundColor: "rgba(255,255,255,0.2)",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     borderRadius: "50%",
// //                     marginRight: "15px",
// //                   }}
// //                 >
// //                   💲
// //                 </div>
// //                 <div>
// //                   Total Store Value
// //                   <div>2</div>
// //                 </div>
// //               </div>
// //               <div
// //                 style={{
// //                   backgroundColor: "#fc0590",
// //                   flex: "1 1 200px",
// //                   color: "white",
// //                   padding: "15px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     height: "40px",
// //                     width: "40px",
// //                     backgroundColor: "rgba(255,255,255,0.2)",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     borderRadius: "50%",
// //                     marginRight: "15px",
// //                   }}
// //                 >
// //                   📦
// //                 </div>
// //                 <div>
// //                   Out of Stock
// //                   <div>2</div>
// //                 </div>
// //               </div>
// //               <div
// //                 style={{
// //                   backgroundColor: "#05a2fc",
// //                   flex: "1 1 200px",
// //                   color: "white",
// //                   padding: "15px",
// //                   display: "flex",
// //                   alignItems: "center",
// //                   borderRadius: "8px",
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     height: "40px",
// //                     width: "40px",
// //                     backgroundColor: "rgba(255,255,255,0.2)",
// //                     display: "flex",
// //                     alignItems: "center",
// //                     justifyContent: "center",
// //                     borderRadius: "50%",
// //                     marginRight: "15px",
// //                   }}
// //                 >
// //                   🏷️
// //                 </div>
// //                 <div>
// //                   All Categories
// //                   <div>2</div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div
// //               style={{
// //                 backgroundColor: "#e7e3e2",
// //                 padding: "25px",
// //                 fontFamily: "garamond",
// //               }}
// //             >
// //               Inventory Items:
// //             </div>
// //             <div style={{ overflowX: "auto" }}>
// //               <table style={{ width: "100%", borderCollapse: "collapse" }}>
// //                 <thead style={{ backgroundColor: "#05a2fc", color: "white" }}>
// //                   <tr>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       S/N
// //                     </th>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       Name
// //                     </th>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       Category
// //                     </th>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       Price
// //                     </th>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       Quantity
// //                     </th>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       Value
// //                     </th>
// //                     <th style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                       Action
// //                     </th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {[1, 2, 3, 4, 5].map((row) => (
// //                     <tr key={row}>
// //                       <td
// //                         style={{
// //                           padding: "10px",
// //                           border: "1px solid #ddd",
// //                           textAlign: "center",
// //                         }}
// //                       >
// //                         {row}
// //                       </td>
// //                       <td style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                         8848 vodka
// //                       </td>
// //                       <td style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                         liquor
// //                       </td>
// //                       <td style={{ padding: "10px", border: "1px solid #ddd" }}>
// //                         $20
// //                       </td>
// //                       <td
// //                         style={{
// //                           padding: "10px",
// //                           border: "1px solid #ddd",
// //                           textAlign: "center",
// //                         }}
// //                       >
// //                         10
// //                       </td>
// //                       <td
// //                         style={{
// //                           padding: "10px",
// //                           border: "1px solid #ddd",
// //                           textAlign: "center",
// //                         }}
// //                       >
// //                         200
// //                       </td>
// //                       <td
// //                         style={{
// //                           padding: "10px",
// //                           border: "1px solid #ddd",
// //                           textAlign: "center",
// //                         }}
// //                       >
// //                         Done
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </>
// //         );
// //       case "add-product":
// //         return (
// //           <div
// //             style={{
// //               backgroundColor: "white",
// //               padding: "20px",
// //               borderRadius: "8px",
// //               boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
// //             }}
// //           >
// //             <h2
// //               style={{
// //                 textAlign: "center",
// //                 marginBottom: "20px",
// //                 color: "#333",
// //               }}
// //             >
// //               Add New Product
// //             </h2>
// //             <form
// //               style={{
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 gap: "15px",
// //               }}
// //             >
// //               <div>
// //                 <label
// //                   style={{
// //                     display: "block",
// //                     marginBottom: "5px",
// //                     color: "#555",
// //                   }}
// //                 >
// //                   Image
// //                 </label>
// //                 <input
// //                   type="file"
// //                   accept="image/*"
// //                   style={{
// //                     width: "100%",
// //                     padding: "10px",
// //                     border: "1px solid #ddd",
// //                     borderRadius: "4px",
// //                   }}
// //                 />
// //               </div>
// //               <div>
// //                 <label
// //                   style={{
// //                     display: "block",
// //                     marginBottom: "5px",
// //                     color: "#555",
// //                   }}
// //                 >
// //                   Product Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   style={{
// //                     width: "100%",
// //                     padding: "10px",
// //                     border: "1px solid #ddd",
// //                     borderRadius: "4px",
// //                   }}
// //                   placeholder="Enter product name"
// //                 />
// //               </div>
// //               <div>
// //                 <label
// //                   style={{
// //                     display: "block",
// //                     marginBottom: "5px",
// //                     color: "#555",
// //                   }}
// //                 >
// //                   Product Category
// //                 </label>
// //                 <select
// //                   style={{
// //                     width: "100%",
// //                     padding: "10px",
// //                     border: "1px solid #ddd",
// //                     borderRadius: "4px",
// //                   }}
// //                 >
// //                   <option>Select Category</option>
// //                   <option>Liquor</option>
// //                   <option>Food</option>
// //                   <option>Beverages</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label
// //                   style={{
// //                     display: "block",
// //                     marginBottom: "5px",
// //                     color: "#555",
// //                   }}
// //                 >
// //                   Price
// //                 </label>
// //                 <input
// //                   type="number"
// //                   style={{
// //                     width: "100%",
// //                     padding: "10px",
// //                     border: "1px solid #ddd",
// //                     borderRadius: "4px",
// //                   }}
// //                   placeholder="Enter price"
// //                 />
// //               </div>
// //               <div>
// //                 <label
// //                   style={{
// //                     display: "block",
// //                     marginBottom: "5px",
// //                     color: "#555",
// //                   }}
// //                 >
// //                   Product Description
// //                 </label>
// //                 <input
// //                   type="number"
// //                   style={{
// //                     width: "100%",
// //                     padding: "10px",
// //                     border: "1px solid #ddd",
// //                     borderRadius: "4px",
// //                   }}
// //                   placeholder="Write Description Of Product"
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 style={{
// //                   backgroundColor: "#05a2fc",
// //                   color: "white",
// //                   padding: "10px",
// //                   border: "none",
// //                   borderRadius: "4px",
// //                   cursor: "pointer",
// //                   marginTop: "10px",
// //                 }}
// //               >
// //                 Add Product
// //               </button>
// //             </form>
// //           </div>
// //         );
// //       case "accounts":
// //         return <div>Accounts Page Content</div>;
// //       case "report-bug":
// //         return <div>Report Bug Form</div>;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         minHeight: "100vh",
// //         "@media (min-width: 768px)": {
// //           flexDirection: "row",
// //         },
// //       }}
// //     >
// //       {/* Sidebar */}
// //       <div
// //         style={{
// //           width: "100%",
// //           backgroundColor: "#e7e3e2",
// //           "@media (min-width: 768px)": {
// //             width: "250px",
// //           },
// //         }}
// //       >
// //         <div
// //           style={{
// //             height: "60px",
// //             backgroundColor: "black",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //             padding: "0 20px",
// //           }}
// //         >
// //           <div
// //             style={{
// //               height: "40px",
// //               width: "40px",
// //               backgroundColor: "white",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               borderRadius: "50%",
// //             }}
// //           >
// //             📊
// //           </div>
// //           <div
// //             style={{
// //               height: "40px",
// //               width: "40px",
// //               backgroundColor: "white",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               borderRadius: "50%",
// //             }}
// //           >
// //             ☰
// //           </div>
// //         </div>

// //         {/* Sidebar Navigation Items */}
// //         {[
// //           { icon: "📊", text: "Dashboard", view: "dashboard" },
// //           { icon: "➕", text: "Add Product", view: "add-product" },
// //           { icon: "👤", text: "Accounts", view: "accounts" },
// //           { icon: "🐞", text: "Report Bug", view: "report-bug" },
// //         ].map(({ icon, text, view }) => (
// //           <div
// //             key={view}
// //             onClick={() => setCurrentView(view)}
// //             style={{
// //               display: "flex",
// //               alignItems: "center",
// //               padding: "10px",
// //               border: "1px solid gray",
// //               cursor: "pointer",
// //               backgroundColor: currentView === view ? "#d1d5db" : "transparent",
// //             }}
// //           >
// //             <div
// //               style={{
// //                 marginRight: "20px",
// //                 fontSize: "20px",
// //               }}
// //             >
// //               {icon}
// //             </div>
// //             <div style={{ color: "black" }}>{text}</div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Main Content Area */}
// //       <div
// //         style={{
// //           flex: 1,
// //           padding: "20px",
// //           backgroundColor: "#f4f4f4",
// //           overflowX: "auto",
// //         }}
// //       >
// //         {renderCurrentView()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Warehouse;


// import AddProduct from "./AddProduct";
// import ReportBug from "./ReportBug";
// import Accounts from "./Account";

// const Warehouse = () => {
//   const [currentView, setCurrentView] = useState("dashboard");

//   const renderCurrentView = () => {
//     switch (currentView) {
//       case "dashboard":
//         return <Dashboard />;
//       case "add-product":
//         return <AddProduct />;
//       case "accounts":
//         return <Accounts />;
//       case "report-bug":
//         return <ReportBug />;
//       default:
//         return null;
//     }
//   };