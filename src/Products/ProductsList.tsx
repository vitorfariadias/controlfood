import ProductsTable from './ProductsTable';

function ProductsList() {
  let title = 'Produtos';
  return (
    <>
    <h1 className="produtos-card__title">{title}</h1>
      <ProductsTable />
    </>
  );
}
export default ProductsList;
