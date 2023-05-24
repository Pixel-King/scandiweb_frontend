import React, { useState } from 'react';

const SkuInput:React.FC<{sku: string, setSkuF: Function}> = ({ sku, setSkuF }) => {
  const [errorMessage, setErrorMessage] = useState<string>('Sku is required!');

  const skuChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();
    const { value } = event.target;
    setSkuF(value);
    if (value) {
      setErrorMessage('');
    } else {
      setErrorMessage('Sku is required!');
    }
  };

  return (
    <label htmlFor="sku">
      <span className="input-title">SKU:</span>
      <input type="text" value={sku} id="sku" onChange={skuChangeHandler} autoComplete="off" />
      <div className="input-error">{errorMessage}</div>
    </label>
  );
};

export default SkuInput;
