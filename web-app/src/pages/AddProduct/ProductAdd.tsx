import React from 'react';
import './ProductAdd.css';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../../components/ProductForm/ProductForm.tsx';

const ProductAdd:React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <section className="add-product">
      <div className="product-menu-container">
        <div className="page-title">
          <h2>Product Add</h2>
        </div>
        <div className="menu-control">
          <input type="submit" className="submit-btn" form="product_form" value="Save" />
          <button type="button" className="navigate-button-cansel" onClick={() => navigate('/')}>Cansel</button>
        </div>
      </div>
      <div className="product-add-form-container">
        <ProductForm />
      </div>
    </section>
  );
};

export default ProductAdd;
