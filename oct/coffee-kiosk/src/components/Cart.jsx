function Cart({ cart, onInc, onDec, onRemove }) {
  return (
    <div>
      <h2>Mi Carrito</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="CartItem">
            <p>{item.name} | ${item.price} (Cantidad: {item.cant}) Total: {item.price * item.cant}</p>
            <div>
              <button onClick={() => onInc(item)}>[+]</button>
              <button onClick={() => onDec(item)}>[-]</button>
              <button onClick={() => onRemove(item)}>Eliminar</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
