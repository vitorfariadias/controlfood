// EQUIVALE A PRODUCT CARD
import { ReactComponent as Delete } from '../images/delete.svg';
import { ReactComponent as Edit } from '../images/edit.svg';

function ProductsTable() {
  return (
    <div>
      <table className="products-table">
        <thead>
          <tr className="products-table__header">
            <th>nome</th>
            <th>descricao</th>
            <th>valorVenda</th>
            <th>valorCusto</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody className="products-table__row">
          <tr>
            <td>nome do produto</td>
            <td>descricao do produto</td>
            <td>R$ 12,00</td>
            <td>R$ 2,00</td>
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
