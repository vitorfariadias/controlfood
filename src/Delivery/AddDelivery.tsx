function AddDelivery() {
  let title = 'Adicionar Delivery';
  return (
    <div className="delivery-card">
      <h1 className="delivery-title">{title}</h1>

      <form className="delivery-card__form">
        <section className="form-inputs">
          <input
            type="text"
            id="add-delivery__name"
            placeholder="nome do delivery"
          />
          <br />
          <input
            type="text"
            id="add-delivery__plan"
            placeholder="selecione o plano"
          />
          <br />
          <input
            type="number"
            id="add-delivery__monthly-payment"
            placeholder="mensalidade"
          />
          <br />
          <input
            type="number"
            id="add-delivery__tax-product"
            placeholder="taxa por produto"
          />
          <br />
        </section>

        <input type="submit" className="delivery-add" value="Adicionar" />
      </form>
    </div>
  );
}
export default AddDelivery;
