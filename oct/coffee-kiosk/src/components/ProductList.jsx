import ProductCard from "./ProductCard";

function Menu({ productos, onAdd }) {
  return (
    <div className="Menu">
      {productos.map((p) => (
        <ProductCard key={p.id} productos={p} onAdd={onAdd} />
      ))}
    </div>
  )
}


export default Menu;

