import React from 'react';

export default function Cart({ selectedProducts,clearCart }) {

 
  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {selectedProducts.map((product, index) => (
          <li key={index}>
            <span>{product.name}</span> - <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div>Total: ${calculateTotal().toFixed(2)}</div>
      <button onClick={clearCart}>Buy</button>
    </div>
  );
}
