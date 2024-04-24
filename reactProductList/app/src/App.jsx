import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [showHomePage, setShowHomePage] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const clearCart = () => {
    setSelectedProducts([]);
  };
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };
  

  const addToCart = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    console.log('added');
  };
  

  const handleShowHomePage = () => {
    setShowHomePage(true);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowHomePage(false);
    setShowCart(true);
  };

  return (
    <>
      <Header showHomePage={handleShowHomePage} showCart={handleShowCart} />
      {showHomePage && <ProductList addToCart={addToCart}/>}
      {showCart && <Cart selectedProducts={selectedProducts} clearCart={clearCart}/>}

    
    </>
  );
}

export default App;
