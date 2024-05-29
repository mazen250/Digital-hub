import { useState } from "react";

import "./Navbar.css";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Logo from "../assets/digitalhub-logo.png";
import userStore from "../stores/userStores";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = userStore();
  return (
    <nav className="bg-gray-900 p-4 border-b-2 border-gray-600 text-white">
      <div
        className={`w-[90%] mx-auto flex items-center justify-between
       flex-row
      `}
      >
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-20" />
        </div>

        <div className="hidden md:flex items-center space-x-16 text-lg">
          <Link to="/" className="text-white hover:text-gray-500 px-2 py-1">
            Main
          </Link>
          <Link to="/" className="text-white hover:text-gray-500 px-2 py-1">
            Gallary
          </Link>
          <Link to="/" className="text-white hover:text-gray-500 px-2 py-1">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button type="primary" onClick={logout}>
            Logout
          </Button>

          <div className="border-r-2 border-gray-3000 h-6"></div>
          <button className="text-white px-4 py-2 rounded-md">List</button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
            {isOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
          <div className={`menu ${isOpen ? "open-menu" : "close-menu"}`}>
            <Link to="/" className="text-white hover:text-gray-500">
              main
            </Link>
            <Link to="/" className="text-white hover:text-gray-500">
              prices
            </Link>
            <Link to="/" className="text-white hover:text-gray-500">
              contact us
            </Link>

            <button className="text-white px-4 py-2 rounded-md">login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
