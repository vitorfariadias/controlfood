import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Delivery from "./Delivery";
  import Home from './Home';
import Navbar from "./Navbar";
import Products from "./Products";
import User from "./User";

function RoutesFunction() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/delivery" element={<Delivery />}/>
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesFunction;
