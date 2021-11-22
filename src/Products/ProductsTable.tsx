// EQUIVALE A PRODUCT CARD
import { ReactComponent as Delete } from '../images/delete.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { Product } from './types';

type Props = {
  product: Product;
}

function ProductsTable({ product }: Props) {

  return (
    <div>
      <table className="products-table">
        <thead>
          <tr className="products-table__header">
            <th>nome</th>
            <th>descricao</th>
            <th>valorVenda</th>
            <th>valorCusto</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="products-table__row">
          <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.saleValue}</td>
            <td>{product.costValue}</td>
            <td>
              <Delete />
              <Edit />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="products-add">Adicionar</button>
    </div>
  );
}

export default ProductsTable;
