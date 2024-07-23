import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { fetchProducts } from '../../pages/api/api';
import { Product } from '../../types';
import Button from '../Button';
import { formatPrice } from '../../utils';
import { 
  ProductGrid, 
  ProductCard, 
  ProductImage, 
  ProductFooter,
  Price,
} from './styles';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery<{ products: Product[] }>('products', fetchProducts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load products</p>;

  return (
    <ProductGrid>
      {data?.products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <ProductFooter>
            <Price>{formatPrice(product.price)}</Price>
            <Button rounded="true" onClick={() => dispatch(addToCart(product))}>Comprar</Button>
          </ProductFooter>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default ProductList;
