import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import '../stylesheets/products.css';
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';
import ProductsList from './ProductsList';
import { Product } from './types';

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="products-content">
      <ProductsList products={products} />
      <AddProducts />
      <EditProducts />
    </div>
  );
}

export default Products;
