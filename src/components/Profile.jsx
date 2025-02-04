import React from "react";
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Building,
  CreditCard,
} from "lucide-react";
import userAvatar from "./pictures/hen.webp";
const Profile = () => {
  const userData = {
    name: "Samrat",
    email: "ksamratbikram@gmail.com",
    joinDate: "January 15, 2024",
    panNumber: "ABCDEFG",
    contact: "+977 9869933294",
    address: "Butwal-9, Rupandehi Nepal",
    businessName: "Samrat Enterprises",
  };

  const handleEditProfile = () => {
    console.log("Edit Profile clicked");
    // Add edit profile logic here
  };

  return (
    <div style={{ minHeight: "100vh",marginLeft:"100px" }}>
      {/* Header */}
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

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          padding: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Photo and Join Date */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "#7c3aed",
                  borderRadius: "50%",
                  opacity: "0.1",
                  animation: "pulse 2s infinite",
                }}
              ></div>
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
              <div
                style={{
                  position: "absolute",
                  bottom: "8px",
                  right: "8px",
                  backgroundColor: "#7c3aed",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "2px solid white",
                }}
              ></div>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                    color: "#111827",
                }}
              >
                {userData.businessName}
              </p>{" "}
            </div>

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
                Joined {userData.joinDate}
              </span>
            </div>
          </div>

          {/* Personal Details */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {/* Full Name */}
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
                  <Building
                    style={{ width: "16px", height: "16px", color: "#7c3aed" }}
                  />
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Full Name
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {userData.name}
                </p>
              </div>

              {/* Business Name */}
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
                  <Building
                    style={{ width: "16px", height: "16px", color: "#7c3aed" }}
                  />
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Business Name
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {userData.businessName}
                </p>
              </div>

              {/* Business PAN */}
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
                  <CreditCard
                    style={{ width: "16px", height: "16px", color: "#7c3aed" }}
                  />
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Business PAN
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    fontFamily: "monospace",
                    fontWeight: "600",
                    color: "#111827",
                  }}
                >
                  {userData.panNumber}
                </p>
              </div>

              {/* Contact Number */}
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
                  <Phone
                    style={{ width: "16px", height: "16px", color: "#7c3aed" }}
                  />
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Contact Number
                  </h3>
                </div>
                <p style={{ fontSize: "18px", color: "#111827" }}>
                  {userData.contact}
                </p>
              </div>

              {/* Email */}
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: "400px",
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
                  <Mail
                    style={{ width: "16px", height: "16px", color: "#7c3aed" }}
                  />
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Email
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "18px",
                    color: "#111827",
                  }}
                >
                  {userData.email}
                </p>
              </div>

              {/* Address */}
              <div
                style={{
                  backgroundColor: "#f9fafb",
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  gridColumn: "1 / -1",
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
                  <MapPin
                    style={{ width: "16px", height: "16px", color: "#7c3aed" }}
                  />
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6b7280",
                    }}
                  >
                    Address
                  </h3>
                </div>
                <p style={{ fontSize: "18px", color: "#111827" }}>
                  {userData.address}
                </p>
              </div>
            </div>

            {/* Edit Button */}
            <div style={{ paddingTop: "16px" }}>
              <button
                onClick={handleEditProfile}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
