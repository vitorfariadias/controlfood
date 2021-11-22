import '../stylesheets/delivery.css';
import AddDelivery from './AddDelivery';
import DeliveryList from './DeliveryList';
import EditDelivery from './EditDelivery';

function Delivery() {
  return (
    <div className="delivery-container">
      <DeliveryList />
      <AddDelivery />
      <EditDelivery />
    </div>
  );
}

export default Delivery;
