import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';
import { useGetAllProductsQuery } from '../../store/services/productsApi.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import MassDeleteButton from '../../components/MassDeleteButton/MassDeleteButton.tsx';

const ProductList:React.FC<{}> = () => {
  const { data } = useGetAllProductsQuery('');
  const navigate = useNavigate();

  let productList = data?.map((product) => (<ProductCard product={product} key={product.sku} />));

  useEffect(() => {
    productList = data?.map((product) => <ProductCard product={product} key={product.sku} />);
  }, [data]);

  return (
    <section className="product-list">
      <div className="product-menu-container">
        <div className="page-title">
          <h2>Product List</h2>
        </div>
        <div className="menu-control">
          <button type="button" className="navigate-button" onClick={() => navigate('/add-product')}>
            Add
          </button>
          <MassDeleteButton />
        </div>
      </div>
      <div className="product-list-container">
        <div className="product-list-wrapper">
          {
            productList
          }
        </div>
      </div>
    </section>
  );
};

export default ProductList;
