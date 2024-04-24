import React from 'react';
import { RiBeerLine } from "react-icons/ri";
import './ProductList.css'; // Импорт файлов стилей

const products = [
  { id: 1, name: 'Heineken', price: 2.99 },
  { id: 2, name: 'Budweiser', price: 3.49 },
  { id: 3, name: 'Guinness', price: 4.99 },
  { id: 4, name: 'Stella Artois', price: 3.79 },
  { id: 5, name: 'Corona', price: 2.89 },
  { id: 6, name: 'Beck’s', price: 3.29 },
  { id: 7, name: 'Pilsner Urquell', price: 3.99 },
  { id: 8, name: 'Blue Moon', price: 4.49 },
  { id: 9, name: 'Modelo', price: 3.59 },
  { id: 10, name: 'Peroni', price: 4.29 }
];

export default function ProductList({addToCart}) {
  return (
    <div className="product-list-container">
      <div className="product-list-title">
        <h2>Product List</h2>
        <RiBeerLine className="logo"/>
      </div>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id}>
            <span className="product-name">{product.name}</span> - <span className="product-price">${product.price.toFixed(2)}</span>
            <button className="product-add-button" onClick={()=>addToCart(product)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
