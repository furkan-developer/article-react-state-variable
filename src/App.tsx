import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getProducts, Product } from "./data";

enum Mission {
  Previous = 'Previos',
  Next = 'Next'
}

type ButtonProps = {
  mission: Mission
  onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>, mission: Mission) => void
}

function Button({ mission, onButtonClick }: ButtonProps) {

  return <button type='button' className='next-button' onClick={(e) => onButtonClick && onButtonClick(e, mission)} >{mission}</button>
}

function App() {
  const [productIndex, setProductIndex] = useState(0);

  const products: Product[] = getProducts();

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>, mission: Mission): void {
    if (mission === Mission.Next) {
      if ((productIndex + 1) >= products.length) return;
      setProductIndex(productIndex + 1);
    } else if (mission === Mission.Previous) {
      if ((productIndex - 1) < 0) return;
      setProductIndex(productIndex - 1);
    }
  }

  return (
    <div className='product-segment'>
      <Button mission={Mission.Previous} onButtonClick={handleButtonClick} />
      <div className='product-card'>
        <div className='card-header'>Product Card</div>
        <div>
          <p><b>Product Name:</b> {products[productIndex].productName}</p>
          <p><b>Product Description:</b> {products[productIndex].description}</p>
          <p><b>Product Quantity:</b> {products[productIndex].quantity}</p>
        </div>
      </div>
      <Button mission={Mission.Next} onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
