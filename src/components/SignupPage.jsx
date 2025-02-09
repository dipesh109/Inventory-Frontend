
import React, { useState,useEffect } from "react";
import logo from "./pictures/original.webp";
// import { registerUser } from "../api"; // Import the API function
import { useCookies } from "react-cookie";
import {  useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverhelper";

const SignupPage = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [phone, setPhone] = useState("");
 const [cookies, setCookie] = useCookies(["token"]);
 const navigate = useNavigate();

  useEffect(() => {
     if (cookies.token) {
       navigate("/warehouse"); // Redirect to warehouse page
     }
   }, [cookies, navigate]);

 const register = async (e) => {
   e.preventDefault(); // Prevent page refresh

   const data = { name, email, password,phone };
   try {
     const response = await makeUnauthenticatedPOSTRequest(
       "/api/users/register",
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
       alert(response.message || "Registration failed. Please try again.");
     }
   } catch (error) {
     alert("Registration failed. Please try again.");
   }
 };

  return (
    <div style={styles.container}>
      <form onSubmit={register} style={styles.form}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <h3 style={styles.heading}>Create Account</h3>
        <div style={styles.inputGroup}>
          <label htmlFor="fullName" style={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
        </div>
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
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>
            Phone Number
          </label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
        <div style={styles.loginLink}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => window.history.back()}>
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

// Styles remain the same
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
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
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
    marginBottom: "15px",
    transition: "background-color 0.3s ease",
  },
  loginLink: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#05a2fc",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default SignupPage;