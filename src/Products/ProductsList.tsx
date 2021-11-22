import ProductsTable from './ProductsTable';
import { Product } from './types';

type Props = {
  products: Product[];
};

function ProductsList({ products }: Props) {
  let title = 'Produtos';
  return (
    <div className="products-card">
      <h1 className="produtos-card__title">{title}</h1>

      {products.map(product => (<ProductsTable key={product.id} product={product} />))}
    </div>
  );
}
export default ProductsList;
