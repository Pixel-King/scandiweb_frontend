import React, { useState } from 'react';

const PriceInput:React.FC<{price: number, setPriceF: Function}> = ({ price, setPriceF }) => {
  const [errorMessage, setErrorMessage] = useState<string>('Price is required!');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();
    const { value } = event.target;
    setPriceF(value);
    if (value) {
      setErrorMessage('');
    } else {
      setErrorMessage('Price is required!');
    }
  };

  return (
    <label htmlFor="price">
      <span className="input-title">Price ($):</span>
      <input type="number" value={price} id="price" onChange={inputChangeHandler} autoComplete="off" />
      <div className="input-error">{errorMessage}</div>
    </label>
  );
};

export default PriceInput;
