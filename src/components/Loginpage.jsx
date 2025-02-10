import React, { useState,useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import logo from "./pictures/original.webp";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverhelper";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      navigate("/warehouse"); // Redirect to warehouse page
    }
  }, [cookies, navigate]);

  const login = async (e) => {
    e.preventDefault(); // Prevent page refresh

    const data = { email, password };
    try {
      const response = await makeUnauthenticatedPOSTRequest(
        // "/api/users/login",
        data
      );
      if (response && response.token) {
        // Store token in cookies
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, { path: "/", expires: date });

        // Redirect to dashboard (or warehouse page)
        navigate("/warehouse");
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  // ...

  return (
    <div style={styles.container}>
      <form onSubmit={login} style={styles.form}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <h3 style={styles.heading}>Login to System</h3>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {/* <div style={styles.forgotPassword}>Forgot password?</div> */}
        <button type="submit" style={styles.button}>
          Login
        </button>
        <Link to="/signup">
          <button 
            type="button"
            style={styles.emailLinkButton}
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e7e3e2",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "93%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  forgotPassword: {
    textAlign: "right",
    fontSize: "12px",
    color: "#05a2fc",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#05a2fc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  orText: {
    textAlign: "center",
    margin: "15px 0",
    fontSize: "16px",
    color: "#555",
  },


  emailLinkButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "20px"
  },
};

export default Loginpage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "./pictures/original.webp";
// import { loginUser } from "../api"; // Import the API function

// const Loginpage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
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
//       const response = await loginUser(formData);
//       if (response.data) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//         navigate("/warehouse");
//       } else {
//         alert(response.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   const handleSignUp = () => {
//     navigate("/signup");
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.logoContainer}>
//           <img src={logo} alt="Logo" style={styles.logo} />
//         </div>
//         <h3 style={styles.heading}>Login to System</h3>
//         <div style={styles.inputGroup}>
//           <label htmlFor="email" style={styles.label}>
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.forgotPassword}>Forgot password?</div>
//         <button
//           type="button"
//           style={styles.emailLinkButton}
//           onClick={handleSignUp}
//         >
//           Sign Up
//         </button>
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles remain the same
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#e7e3e2",
//   },
//   form: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     width: "100%",
//     maxWidth: "400px",
//   },
//   logoContainer: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   logo: {
//     height: "60px",
//     width: "60px",
//     borderRadius: "50%",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "24px",
//     color: "#333",
//   },
//   inputGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     fontSize: "14px",
//     color: "#555",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "14px",
//   },
//   forgotPassword: {
//     textAlign: "right",
//     fontSize: "12px",
//     color: "#05a2fc",
//     marginBottom: "15px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#05a2fc",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   emailLinkButton: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#f4f4f4",
//     color: "#333",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };

// export default Loginpage;
