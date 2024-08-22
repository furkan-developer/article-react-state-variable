import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getProducts, Product } from "./data";

function App() {
  const [productIndex, setProductIndex] = useState(0);

  const products: Product[] = getProducts();

  function handleButtonClick() {
    if ((productIndex + 1) >= products.length) return;

    setProductIndex(productIndex + 1);
    console.log(`productIndex variable after click the button: ${productIndex}`);
  }

  return (
    <div className='product-segment'>
      <button type='button' className='next-button' onClick={handleButtonClick}>next</button>
      <div className='product-card'>
        <div className='card-header'>Product Card</div>
        <div>
          <p><b>Product Name:</b> {products[productIndex].productName}</p>
          <p><b>Product Description:</b> {products[productIndex].description}</p>
          <p><b>Product Quantity:</b> {products[productIndex].quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
