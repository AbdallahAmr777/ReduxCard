import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element ={<Product/>}/>
          <Route path="/cart" element ={<Cart/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
