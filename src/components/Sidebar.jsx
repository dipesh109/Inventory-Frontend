import React, { useState,useEffect, createContext } from "react";
import {
  LayoutDashboard,
  PlusCircle,
  Users,
  Bug,
  LogOut,
  ChevronFirst,
  ChevronLast,
} from "lucide-react";

import logo from "./pictures/inven3.png";
import userAvatar from "./pictures/hen.webp";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const SidebarContext = createContext();

// Define color constants for better management
const colors = {
  primary: "#3b82f6", // Active item color
  sidebar: "#1e293b", // Sidebar background
  text: {
    primary: "#ffffff",
    secondary: "#94a3b8",
  },
  border: "#334155",
  hover: "#2d3748",
  danger: "#f87171", // Logout button color
};

const SidebarButton = ({ active, onClick, icon: Icon, label, color }) => (
  <button
    onClick={onClick}
    style={{
      width: "100%",
      padding: "8px",
      marginBottom: "20px",
      backgroundColor: active ? colors.primary : "transparent",
      color: color || (active ? colors.text.primary : colors.text.secondary),
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "12px",
      transition: "all 0.2s ease",
      fontSize: "16px",
      fontWeight: "500",
      "&:hover": {
        backgroundColor: active ? colors.primary : colors.hover,
      },
    }}
  >
    <Icon size={20} />
    {label}
  </button>
);

const Sidebar = ({ setCurrentView, currentView }) => {
   const [expanded, setExpanded] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();
 
    //logout
    const handleLogout = async () => {
       try {
    
      const confirmLogout = window.confirm(
        "Are you sure you want to log out ?"
      )
      if(confirmLogout){
        const response = await fetch("/api/users/logout", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          removeCookie("token"); // Remove token from cookies
          navigate("/"); // Redirect to login page
        } else {
          alert("Logout failed");
        }
      }
     } catch (error) {
        alert("An error occurred while logging out");
      }
    };

  


  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "add-product", icon: PlusCircle, label: "Add Product" },
    // { id: "accounts", icon: Users, label: "Accounts" },
    // { id: "report-bug", icon: Bug, label: "Report Bug" },
  ];

  return (
    <aside
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 50,
        display: "flex",
      }}
    >
      <nav
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: colors.sidebar,
          color: colors.text.primary,
          padding: "16px 8px",
          transition: "all 0.3s ease",
          width: expanded ? "235px" : "69px",
          overflowY: "auto",
          overflowX: "hidden",
          boxShadow: "2px 0 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
            padding: "8px",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: expanded ? "80px" : "0",
              height: "80px",
              borderRadius: "50%",
              transition: "all 0.3s ease",
            }}
          />

          <button
            onClick={() => setExpanded((curr) => !curr)}
            style={{
              padding: "8px",
              borderRadius: "8px",
              backgroundColor: "transparent",
              border: "none",
              color: colors.text.primary,
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              "&:hover": {
                backgroundColor: colors.hover,
              },
            }}
          >
            {expanded ? <ChevronFirst size={24} /> : <ChevronLast size={24} />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          {/* Menu Items */}
          <div style={{ flex: 1, padding: "0 8px" }}>
            {menuItems.map((item) => (
              <SidebarButton
                key={item.id}
                active={currentView === item.id}
                onClick={() => setCurrentView(item.id)}
                icon={item.icon}
                label={expanded ? item.label : ""}
              />
            ))}
          </div>

          {/* Profile Section */}
          <div
            onClick={() => setCurrentView("myprofile")}
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 8px",
              margin: "8px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor:
                currentView === "myprofile" ? colors.primary : "transparent",
              borderRadius: "8px",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor:
                  currentView === "myprofile" ? colors.primary : colors.hover,
              },
            }}
          >
            <img
              src={userAvatar}
              alt="User Avatar"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: `2px solid ${colors.text.primary}`,
              }}
            />
            {expanded && (
              <div
                style={{
                  marginLeft: "12px",
                  overflow: "hidden",
                }}
              >
                {/* <div
                  style={{
                    fontWeight: "500",
                    color:
                      currentView === "myprofile"
                        ? colors.text.primary
                        : colors.text.primary,
                  }}
                >
                  
                </div> */}
                {/* <div
                  style={{
                    fontSize: "12px",
                    color:
                      currentView === "myprofile"
                        ? colors.text.primary
                        : colors.text.secondary,
                  }}
                >
                  ksamratbikram@gmai
                </div> */}
              </div>
            )}
          </div>

          {/* Logout Section */}
          <div
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 8px",
            }}
          >
            <SidebarButton
              onClick={handleLogout}
              icon={LogOut}
              label={expanded ? "Logout" : ""}
              color={colors.danger}
            />
          </div>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
};

export default Sidebar;
