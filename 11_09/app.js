let products = [
  { id: 1, name: "Cuaderno", stock: 3 },
  { id: 2, name: "Lápiz", stock: 0 },
  { id: 3, name: "Mochila", stock: 5 }
];

const $ = s => document.querySelector(s);

function addProduct(list,name,stock){
    let newProduct = {id:list.length +1,name:name,stock:stock};
    return [...list, newProduct];
}

function toggleStock(products, id){
  return products.map(product => {
    if(product.id === id){
      return {...product,stock: product.stock > 0 ? 0:1};
    }
    return product;
  })
}
function removeProduct(products, id){
  return products.filter(product => product.id != id);
}
function Pfilter(products){
  return products.filter(p => p.stock>0);
}
function ProductCard({id,name,stock}){
    return `
    <div class="product" data-id="${id}">
    <h3>${name}</h3>
    <p>Stock: ${stock}</p>
    <button data-action="toggle">Cambiar stock</button>
    <button data-action="remove">Eliminar</button>
    </div>
    `;
}
function renderCatalog(list){
    $("#catalog").innerHTML = list.map(ProductCard).join("");
}


renderCatalog(products)

/*function renderList(list) {
  $("#list").innerHTML = list.map(TaskItem).join("");
}*/
$("#form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = $("#newName").value.trim();
    const stock = $("#newStock").value.trim();
    if(!name || !stock) return;
    products = addProduct(products,name,stock)
    $("#newName").value="";
    $("#newStock").value="";
    console.log("Se añade un item");
    renderCatalog(products);
})
$("#catalog").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-action='toggle']");
  if (!btn) return;

  const productDiv = btn.closest(".product");
  const id = Number(productDiv.dataset.id);

  products = toggleStock(products, id);

  renderCatalog(products);
});
$("#catalog").addEventListener("click", (e)=>{
  const btn = e.target.closest("button[data-action='remove']");
  if (!btn) return;

  const productDiv = btn.closest(".product");
  const id = Number(productDiv.dataset.id);
  console.log("Intento de eliminacion");
  products = removeProduct(products,id);
  renderCatalog(products);
});
$("#onlyStock").addEventListener("change", (e)=>{
  if(e.target.checked){
    renderCatalog(Pfilter(products));
  } else {
    renderCatalog(products);
  }
});