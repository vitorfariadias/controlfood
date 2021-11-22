import { ReactComponent as Edit } from '../images/edit.svg';
import { ReactComponent as Delete } from '../images/delete.svg';

function DeliveryList() {
  let title = 'Delivery';
  return (
    <div className="delivery-card">
      <h1 className="delivery-title"> {title} </h1>

      <table className="delivery-table">
        <thead>
          <tr className="delivery-table__header">
            <th>nome</th>
            <th>plano</th>
            <th>mensalidade</th>
            <th>taxa/produto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="delivery-table__row">
            <td>ifood</td>
            <td>basico</td>
            <td>R$ 100,00</td>
            <td>12%</td>
            <td>
              <Edit />
              <Delete />
            </td>
          </tr>
        </tbody>
      </table>

      <button className="delivery-add">Adicionar</button>
    </div>
  );
}
export default DeliveryList;
