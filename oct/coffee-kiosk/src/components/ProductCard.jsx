function ProductCard({ productos, onAdd }) {
  const { name, price } = productos;
  return (
    <div className="ProductCard">
      <p>{name}</p>
      <p>${price}</p>
      <button onClick={() => onAdd(productos)}>Agregar!</button>
    </div>
  )
}


export default ProductCard
