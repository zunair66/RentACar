import "./BaseStyles.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import Payment from "./pages/Payment/Payment";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/product" element={<ProductDetail/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </div>
  );
}

export default App;
