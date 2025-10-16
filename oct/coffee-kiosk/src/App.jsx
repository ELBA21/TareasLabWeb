import { useState } from "react";
import "./App.css";
import { PRODUCTS } from "./data";
import Cart from "./components/Cart";
import Menu from "./components/ProductList";
import Pago from "./components/Checkout";
import TabBar from "./components/TabBar";

function App() {
  const [tab, setTab] = useState("Menu");
  const [getcart, setcart] = useState([]);

  const onAdd = (prod) => {
    console.log("[DEBUG] Funcion onAdd iniciada");
    setcart((prevcart) => {
      const exist = prevcart.find((p) => p.id === prod.id);
      if (!exist) {
        return [...prevcart, { ...prod, cant: 1 }]
      } else {
        return prevcart.map((p) => p.id === prod.id ? { ...p, cant: p.cant + 1 } : p);
      }
    })
  }
  const onInc = (prod) => {
    console.log("[DEBUG] Funcion oncInc iniciada");
    setcart((prevcart) => {
      const exist = prevcart.find((p) => p.id === prod.id);
      if (!exist) {
        console.log("[debug] se aplica funcion oninc en lugar de onadd");
        return prevcart;
      } else {
        return prevcart.map((p) => p.id === prod.id ? { ...p, cant: p.cant + 1 } : p);
      }
    })
  }
  const onRemove = (prod) => {
    console.log("[DEBUG] Funcion oncRemove iniciada");
    setcart((prevcart) => {
      const exist = prevcart.find((p) => p.id === prod.id);
      if (!exist) {
        console.log("[debug] no se puede eliminar un producto que no existe");
        return prevcart;
      } else {
        return prevcart.filter((p) => p.id !== prod.id);
      }
    })
  }
  const onDec = (prod) => {
    console.log("[DEBUG] Funcion oncDec iniciada");
    setcart((prevcart) => {
      const exist = prevcart.find((p) => p.id === prod.id);
      if (!exist) {
        return prevcart;
      }
      if (exist.cant !== 1) {
        return prevcart.map((p) => p.id === prod.id ? { ...p, cant: p.cant - 1 } : p)
      } else {
        return prevcart.filter((p) => p.id !== prod.id);
      }
    })
  }
  return (
    <>

      <TabBar tab={tab} setActivar={setTab} />
      {tab === "Menu" && <Menu productos={PRODUCTS} onAdd={onAdd} />}
      {tab === "Carrito" && <Cart cart={getcart} onInc={onInc} onDec={onDec} onRemove={onRemove} />}
      {tab === "Pago" && <Pago cart={getcart} />}


    </>
  );
}
export default App;
