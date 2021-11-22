import '../stylesheets/products.css';
import AddProducts from './AddProducts';
import EditProducts from './EditProducts';
import ProductsList from './ProductsList';

function Products() {
  return (
    <div className="products-content">
      <div className="products-card">
        <ProductsList />
      </div>

      <AddProducts />
      <EditProducts />
    </div>
  );
}

export default Products;
