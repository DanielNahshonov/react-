import React from 'react';
import { FaHome, FaCartArrowDown } from "react-icons/fa";
import './Header.css'; 


export default function Header({ showHomePage, showCart }) {
  return (
    <div className="header-container">
      <FaHome className="logo" onClick={showHomePage} />
      <p>Shop Name</p>
      <FaCartArrowDown className="logo" onClick={showCart} />
    </div>
  );
}

