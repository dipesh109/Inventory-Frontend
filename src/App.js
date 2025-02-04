import React from 'react';
import Loginpage from './components/Loginpage';
import Warehouse from './components/Warehouse';
// import AddProduct from './components/AddProduct';
import SignupPage from './components/SignupPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/warehouse" element={<Warehouse />}></Route>
          {/* <Route path="/addproduct" element={<AddProduct />}></Route> */}
          <Route path="/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { createContext, useState, useContext, useEffect } from "react";
// import Loginpage from "./components/Loginpage";
// import Warehouse from "./components/Warehouse";
// import AddProduct from "./components/AddProduct";
// import SignupPage from "./components/SignupPage";

// // Create Auth Context
// const AuthContext = createContext();

// // Auth Provider Component
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check authentication status when the app loads
//     const checkAuth = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8000/api/users/getuser",
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           setUser(data);
//           localStorage.setItem("user", JSON.stringify(data));
//         } else {
//           setUser(null);
//           localStorage.removeItem("user");
//         }
//       } catch (error) {
//         console.error("Auth check failed:", error);
//         setUser(null);
//         localStorage.removeItem("user");
//       }
//       setLoading(false);
//     };

//     checkAuth();
//   }, []);

//   const logout = async () => {
//     try {
//       await fetch("http://localhost:8000/api/users/logout", {
//         method: "GET",
//         credentials: "include",
//       });
//       localStorage.removeItem("user");
//       setUser(null);
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; // You can replace this with a proper loading component
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use auth context
// export const useAuth = () => useContext(AuthContext);

// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   return children;
// };

// // Public Route Component (redirects to warehouse if already logged in)
// const PublicRoute = ({ children }) => {
//   const { user } = useAuth();

//   if (user) {
//     return <Navigate to="/warehouse" />;
//   }

//   return children;
// };

// const App = () => {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Public Routes */}
//           <Route
//             path="/"
//             element={
//               <PublicRoute>
//                 <Loginpage />
//               </PublicRoute>
//             }
//           />
//           <Route
//             path="/signup"
//             element={
//               <PublicRoute>
//                 <SignupPage />
//               </PublicRoute>
//             }
//           />

//           {/* Protected Routes */}
//           <Route
//             path="/warehouse"
//             element={
//               <ProtectedRoute>
//                 <Warehouse />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/addproduct"
//             element={
//               <ProtectedRoute>
//                 <AddProduct />
//               </ProtectedRoute>
//             }
//           />

//           {/* Catch all route - redirect to login */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// };

// export default App;
