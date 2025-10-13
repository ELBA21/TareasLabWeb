// En ./components/Cart.jsx

function Cart({ cart, onInc, onDec, onRemove }) {
  return (
    <div>
      <h2>Mi Carrito</h2>
      {/* 1. Comprueba si el carrito está vacío */}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        // 2. Si no está vacío, mapea cada item
        cart.map((item) => (
          // 3. Usa un 'key' único para cada elemento en la lista
          <div key={item.id} className="CartItem">
            {/* Muestra los datos del 'item' actual */}
            <p>{item.name} | ${item.price} (Cantidad: {item.cant})</p>
            <div>
              {/* Llama a las funciones con el 'item' específico */}
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
