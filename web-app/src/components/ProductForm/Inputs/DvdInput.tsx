import React, { useState } from 'react';

const DvdInput:React.FC<{size: number, setSizeF: Function}> = ({ size, setSizeF }) => {
  const [errorMessage, setErrorMessage] = useState<string>('Size is required!');

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
    event.preventDefault();
    const { value } = event.target;
    setSizeF(+value);
    if (value) {
      setErrorMessage('');
    } else {
      setErrorMessage('Size is requried!');
    }
  };

  return (
    <div id="DVD">
      <label htmlFor="size">
        <span className="input-title"> Size (MB):</span>
        <input type="number" value={size} id="size" onChange={inputChangeHandler} />
        <span className="input-error">{errorMessage}</span>
      </label>
      <span className="descriptions">Please represent the size as a whole number in megabytes.</span>
    </div>
  );
};

export default DvdInput;
