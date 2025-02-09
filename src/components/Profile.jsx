import React, { useEffect, useState } from "react";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
} from "lucide-react";
import userAvatar from "./pictures/hen.webp";
import { backendUrl } from "../utils/config";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Replace with your actual backend API URL
  // const backendUrl = "http://localhost:8000/api/users/getuser";

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(backendUrl, {
          method: "GET",
          credentials: "include", // Ensures cookies are sent with the request
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // If using JWT auth
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  // Show loading or error message
  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ minHeight: "100vh", marginLeft: "100px" }}>
      <h1
        style={{
          backgroundColor: "#f3f4f6",
          padding: "20px",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
          borderRadius: "8px",
        }}
      >
        My Profile
      </h1>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src={userAvatar} 
              alt="Profile"
              style={{
                borderRadius: "50%",
                width: "192px",
                height: "192px",
                objectFit: "cover",
                border: "4px solid white",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            />
            {/* <p
              style={{ fontSize: "20px", fontWeight: "700", color: "#111827" }}
            >
              {userData.businessName}
            </p> */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#f9fafb",
                padding: "8px 16px",
                borderRadius: "9999px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              <Calendar
                style={{ width: "16px", height: "16px", color: "#7c3aed" }}
              />
              <span style={{ fontSize: "14px", color: "#4b5563" }}>
                {/* Joined {userDate} */}
              </span>
            </div>
          </div>

          {/* Personal Details */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
            }}
          >
            <ProfileDetail
              title="Full Name"
              value={userData.name}
              icon={<Building />}
            />
            {/* <ProfileDetail
              title="Business Name"
              value={userData.businessName}
              icon={<Building />}
            /> */}
            {/* <ProfileDetail
              title="Business PAN"
              value={userData.panNumber}
              icon={<CreditCard />}
            /> */}
            <ProfileDetail
              title="Contact Number"
              value={userData.phone}
              icon={<Phone />}
            />
            <ProfileDetail
              title="Email"
              value={userData.email}
              icon={<Mail />}
            />
            {/* <ProfileDetail
              title="Address"
              value={userData.address}
              icon={<MapPin />}
            /> */}
          </div>

          {/* Edit Profile Button */}
          {/* <div style={{ paddingTop: "16px" }}>
            <button
              onClick={() => console.log("Edit Profile clicked")}
              style={{
                padding: "8px 16px",
                backgroundColor: "#7c3aed",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              Edit Profile
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

// Reusable Component for Profile Details
const ProfileDetail = ({ title, value, icon }) => (
  <div
    style={{
      backgroundColor: "#f9fafb",
      padding: "16px",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      cursor: "pointer",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "8px",
      }}
    >
      {React.cloneElement(icon, {
        style: { width: "16px", height: "16px", color: "#7c3aed" },
      })}
      <h3 style={{ fontSize: "14px", fontWeight: "500", color: "#6b7280" }}>
        {title}
      </h3>
    </div>
    <p style={{ fontSize: "18px", fontWeight: "600", color: "#111827" }}>
      {value}
    </p>
  </div>
);

export default Profile;
