import React from 'react';
import './delete-button.css';
import { useAppSelector } from '../../store/hooks/hooks.ts';
import { useDeleteProductsMutation } from '../../store/services/productsApi.ts';

const MassDeleteButton:React.FC<{}> = () => {
  const sku = useAppSelector((state) => state.selector.skuArr);
  const [deleteProducts] = useDeleteProductsMutation();

  return (
    <button type="button" id="delete-product-btn" onClick={() => deleteProducts({ sku })}>Mass Delete</button>
  );
};

export default MassDeleteButton;
