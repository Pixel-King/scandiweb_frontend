import React, { useState } from 'react';

// - Height - #height
// - Width - #width
// - Length - #length

const FurnitureInputs:React.FC<{
    height: number,
    width: number,
    length: number,
    setHeightF: Function,
    setWidthF: Function,
    setLengthF: Function,
    }> = ({
      height,
      width,
      length,
      setHeightF,
      setWidthF,
      setLengthF,
    }) => {
      const [heightErrorMessage, setHeightErrorMessage] = useState<string>('Height is required!');
      const [widthErrorMessage, setWidthErrorMessage] = useState<string>('Width is required!');
      const [lengthErrorMessage, setLengthErrorMessage] = useState<string>('Length is required!');

      const heightChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const { value } = event.target;
        setHeightF(+value);
        if (value) {
          setHeightErrorMessage('');
        } else {
          setHeightErrorMessage('Size is requried!');
        }
      };
      const widthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const { value } = event.target;
        setWidthF(+value);
        if (value) {
          setWidthErrorMessage('');
        } else {
          setWidthErrorMessage('Width is requried!');
        }
      };
      const lengthChangeHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();
        const { value } = event.target;
        setLengthF(+value);
        if (value) {
          setLengthErrorMessage('');
        } else {
          setLengthErrorMessage('Length is requried!');
        }
      };

      return (
        <div id="Furniture">
          <label htmlFor="height">
            <span className="input-title"> Height (CM):</span>
            <input type="number" value={height} id="height" onChange={heightChangeHandler} autoComplete="off" />
            <div className="input-error">{heightErrorMessage}</div>
          </label>
          <label htmlFor="width">
            <span className="input-title">Width (CM):</span>
            <input type="number" value={width} id="width" onChange={widthChangeHandler} autoComplete="off" />
            <div className="input-error">{widthErrorMessage}</div>
          </label>
          <label htmlFor="length">
            <span className="input-title">Length (CM):</span>
            <input type="number" value={length} id="length" onChange={lengthChangeHandler} autoComplete="off" />
            <div className="input-error">{lengthErrorMessage}</div>
          </label>
          <span className="descriptions">
            Please provide dimensions in HxWxL format.
            Each of the dimensions should be in centimeters
          </span>
        </div>
      );
    };

export default FurnitureInputs;
