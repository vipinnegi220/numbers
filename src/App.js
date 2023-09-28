import React, { useState, useEffect } from "react";
import "./App.css";

const CheckoutPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      updateDisplayValue();
    }, 1500);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const updateDisplayValue = () => {
    setDisplayValue(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="CheckoutPage">
      <div className="borrow-amount-container">
        <input
          type="number"
          placeholder="Enter borrow amount..."
          value={inputValue}
          onChange={handleChange}
          className="borrow-amount-input"
        />
        <label className="borrow-amount-display">Display value: {displayValue}</label>
      </div>
    </div>
  );
};

export default CheckoutPage;
