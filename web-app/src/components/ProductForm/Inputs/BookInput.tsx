import React, { useState } from 'react';

const BookInput:React.FC<{weight: number, setWeightF: Function}> = ({ weight, setWeightF }) => {
  const [errorMessage, setErrorMessage] = useState<string>('weight is required!');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();
    const { value } = event.target;
    setWeightF(+value);
    if (value) {
      setErrorMessage('');
    } else {
      setErrorMessage('Size is requried!');
    }
  };

  return (
    <div id="Book">
      <label htmlFor="weight">
        <span className="input-title">Weight (KG):</span>
        <input type="number" value={weight} id="weight" onChange={inputChangeHandler} />
        <span className="input-error">{errorMessage}</span>
        <span className="descriptions">Please state the weight in kilograms.</span>
      </label>
    </div>

  );
};

export default BookInput;
