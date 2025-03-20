import React from "react";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NavBarra = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-left">
            <div className="nav-logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bandeira_do_Amap%C3%A1.svg/640px-Bandeira_do_Amap%C3%A1.svg.png"
                alt="Bandeira do Amapá"
                onClick={() => navigate("/")} 
                style={{ cursor: "pointer" }}
              />
              <h1>Governo AP</h1>
            </div>
          </div>
          <div className="nav-right">
            <Bell className="icon icon-small" />

            <button
              className="nav-button"
              onClick={() => navigate("/cadastro")}
              style={{ cursor: "pointer", background: "transparent", border: "none" }}
            >
              <User className="icon icon-small" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarra;
