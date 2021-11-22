function AddProducts() {
  let title = 'Adicionar Produto';
  return (
    <div className="products-card">
      <h1 className="produtos-card__title">{title}</h1>

      <form className="products-card__form">
        <section className="form-inputs">
          <input
            type="text"
            id="add-product__name"
            placeholder="nome do produto"
          />
          <br />
          <input
            type="text"
            id="add-product__description"
            placeholder="descrição do produto"
          />
          <br />
          <input
            type="number"
            id="add-product__sale-value"
            placeholder="valor de venda"
          />
          <br />
          <input
            type="number"
            id="add-product__cost-value"
            placeholder="valor de custo"
          />
          <br />
        </section>

        <input type="submit" className="products-add" value="Adicionar" />
      </form>
    </div>
  );
}
export default AddProducts;
