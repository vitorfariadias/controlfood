import '../stylesheets/products.css';
import ProductsList from './ProductsList';

function Products() {
  return (
    <section className="products-content">
      <div className="products-card">
        <h1 className='produtos-card__title'>Produtos</h1>
        <ProductsList />
      </div>
    </section>
  );
}

export default Products;
