import React, { useState } from 'react';

const NameInput:React.FC<{name: string, setNameF: Function}> = ({ name, setNameF }) => {
  const [errorMessage, setErrorMessage] = useState<string>('Name is required!');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();
    const { value } = event.target;
    setNameF(value);
    if (value) {
      setErrorMessage('');
    } else {
      setErrorMessage('Name is required!');
    }
  };

  return (
    <label htmlFor="name">
      <span className="input-title">Name:</span>
      <input type="text" value={name} id="name" onChange={inputChangeHandler} autoComplete="off" />
      <div className="input-error">{errorMessage}</div>
    </label>
  );
};

export default NameInput;
