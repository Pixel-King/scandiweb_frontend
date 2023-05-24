import React, { useState } from 'react';

const TypeSwitcher:React.FC<{type: undefined | 'dvd' | 'book' | 'furniture', setTypeF: Function}> = ({ type, setTypeF }) => {
  const [errorMessage, setErrorMessage] = useState<string>('Please select a product type !');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    event.preventDefault();
    const { value } = event.target;
    if (value) {
      setErrorMessage('');
      setTypeF(value);
    } else {
      setTypeF(undefined);
      setErrorMessage('Please, select a product type!');
    }
  };

  return (
    <label htmlFor="productType">
      <span className="input-title">Product Type:</span>
      <select id="productType" value={type} onChange={inputChangeHandler} required>
        <option value="">Select Type:</option>
        <option value="dvd">DVD</option>
        <option value="book">Book</option>
        <option value="furniture">Furniture</option>
      </select>
      <div className="input-error">{errorMessage}</div>
    </label>
  );
};

export default TypeSwitcher;
