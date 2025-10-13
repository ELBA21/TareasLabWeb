function TabBar({ tab, setActivar }) {
  return (
    <div className="TablaBotones">
      <button onClick={() => setActivar("Menu")} className={tab === "Menu" ? "activa" : ""}>Menu</button>
      <button onClick={() => setActivar("Carrito")} className={tab === "Carrito" ? "activa" : ""}>Carrito</button>
      <button onClick={() => setActivar("Pago")} className={tab === "Pago" ? "activa" : ""}>Pago</button>
    </div>
  );
}

export default TabBar;
