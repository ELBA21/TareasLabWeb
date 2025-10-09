import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Menu from "./components/ProductList";
import Pago from "./components/Checkout";
function App() {
  const [getActivar, setActivar] = useState(null);
  return (
    <>
      <div class="TablaBotones">
        <button onClick={() => setActivar("Menu")}>Menu</button>
        <button onClick={() => setActivar("Carrito")}>Carrito</button>
        <button onClick={() => setActivar("Pago")}>Pago</button>
      </div>
      {getActivar === "Menu" && <Menu />}
      {getActivar === "Carrito" && <Cart />}
      {getActivar === "Pago" && <Pago />}


    </>
  );
}

export default App;
