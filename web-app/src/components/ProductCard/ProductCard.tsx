import React from 'react';
import './ProductCard.css';
import { Product } from '../../models/product.ts';
import ProductCheckbox from '../ProductCheckbox/ProductCheckbox.tsx';

const ProductCard:React.FC<{product: Product}> = ({
  product,
}) => (
  <div className="card-container">
    <div className="card-wrap">
      <ProductCheckbox sku={product.sku} />
      <div className="prdouct-inf-container">
        <span>{product?.sku}</span>
        <span>{product?.name}</span>
        <span>{`${product?.price} $`}</span>
        {product.size && <span>{`Size: ${product.size}MB`}</span>}
        {product.weight && <span>{`Weight: ${product.weight}MB`}</span>}
        {product.dimensions && <span>{`Dimensions (HxWxL): ${product.dimensions}`}</span>}
      </div>
    </div>
  </div>
);

export default ProductCard;
