import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductForm.css';
import PriceInput from './Inputs/PriceInput.tsx';
import SkuInput from './Inputs/skuInput.tsx';
import NameInput from './Inputs/NameInput.tsx';
import TypeSwitcher from './Inputs/TypeSwitcher.tsx';
import DvdInput from './Inputs/DvdInput.tsx';
import BookInput from './Inputs/BookInput.tsx';
import FurnitureInputs from './Inputs/FurnitureInputs.tsx';
import { useGetAllProductsQuery, useSaveProductMutation } from '../../store/services/productsApi.ts';

const ProductForm:React.FC<{}> = () => {
  const [sku, setSku] = useState<string>('');
  const [isUnicSku, setIsUnicSKU] = useState<boolean>();
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<undefined | 'dvd' | 'book' | 'furniture'>();
  const [size, setSize] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [length, setLength] = useState<number>(0);

  const navigate = useNavigate();
  const [saveProduct, { isError }] = useSaveProductMutation();
  const { data } = useGetAllProductsQuery('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sku && isUnicSku && data && price && type
        && (size || weight || (height && width && length))) {
      const params = {
        sku,
        name,
        price,
        type,
      };
      if (type === 'dvd') Object.defineProperty(params, 'size', { value: size, enumerable: true });
      if (type === 'book') Object.defineProperty(params, 'weight', { value: weight, enumerable: true });
      if (type === 'furniture') Object.defineProperty(params, 'dimensions', { value: `${height}x${width}x${length}`, enumerable: true });

      saveProduct(params);

      if (!isError) {
        navigate('/');
      }
    }
  };

  useEffect(() => {
    const check = data?.find((el) => el.sku === sku);
    if (check) {
      setIsUnicSKU(false);
    } else {
      setIsUnicSKU(true);
    }
  }, [sku]);

  const SpecInputs = {
    dvd: <DvdInput size={size} setSizeF={setSize} />,
    book: <BookInput weight={weight} setWeightF={setWeight} />,
    furniture: <FurnitureInputs
      height={height}
      width={width}
      length={length}
      setHeightF={setHeight}
      setWidthF={setWidth}
      setLengthF={setLength}
    />,
  };

  return (
    <form id="product_form" onSubmit={handleSubmit}>
      <SkuInput sku={sku} setSkuF={(value: string) => setSku(value)} />
      {!isUnicSku && (
      <div className="input-error">
        Product with this SKU already exists. Please enter a unique sku!
      </div>
      )}
      <NameInput name={name} setNameF={setName} />
      <PriceInput price={price} setPriceF={setPrice} />
      <TypeSwitcher type={type} setTypeF={setType} />
      { type && SpecInputs[type] }
    </form>
  );
};

export default ProductForm;
