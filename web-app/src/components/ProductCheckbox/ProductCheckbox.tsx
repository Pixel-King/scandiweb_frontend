import React, { useState } from 'react';
import './DeleteCheckbox.css';
import { useAppDispatch } from '../../store/hooks/hooks.ts';
import { pushSku, removeSku } from '../../store/reducers/selectorReducer.ts';

const ProductCheckbox:React.FC<{sku: string}> = ({
  sku,
}) => {
//   const count = useAppSelector((state) => state.selector.skuArr);
  const dispatch = useAppDispatch();
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.checked);
    if (!isSelected) {
      dispatch(pushSku(sku));
    } else {
      dispatch(removeSku(sku));
    }
  };
  return (
    <div className="delete-checkboxe-container">
      <input type="checkbox" checked={isSelected} className="delete-checkbox" onChange={handleCheckboxChange} />
    </div>
  );
};

export default ProductCheckbox;
