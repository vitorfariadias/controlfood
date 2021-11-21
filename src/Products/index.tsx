import '../stylesheets/products.css';
import { ReactComponent as Delete } from '../images/delete.svg';
import { ReactComponent as Edit } from '../images/edit.svg';
import { useEffect } from 'react';

function Products() {

  useEffect(() => {
    console.log('useEffect funcionado!');
  }, []);


  return (
    <>
      <section className="products-content">
        <div className="products-card">
          <h1>Produtos</h1>
          <table className="products-table">
            <thead>
              <tr>
                <th>nome</th>
                <th>descricao</th>
                <th>valorVenda</th>
                <th>valorCusto</th>
                <th>Materia-prima(lista)</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className="products-table__row">
              <tr>
                <td>nome do produto</td>
                <td>descricao do produto</td>
                <td>R$ 12,00</td>
                <td>R$ 2,00</td>
                <td>lista de matéria-prima</td>
                <td>
                  <Delete />
                  <Edit />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="products-add">Adicionar</button>
        </div>
      </section>
    </>
  );
}

export default Products;
