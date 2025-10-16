import { useEffect, useState } from "react";
function Pago({ cart }) {
  const [tip, setTip] = useState(15);
  const [monto, setMonto] = useState(0);
  //LA WEA DE REDUCE ES HACER UN ARRAY SACANDO LAS WEAS DE LOS OBJETOS CONCHETUMARE
  useEffect(() => {
    setMonto(cart.reduce((acumulado, cafe) => {
      return acumulado + cafe.price * cafe.cant
    }, 0))
  }, [monto])
  let montoFinal = monto + monto * (tip / 100);
  return (
    <div>
      <div>
        <p>Monto: {monto}, monto post Propina {montoFinal}</p>
      </div>
      <div>
        <button onClick={() => setTip(15)}>Propina 15%</button>
        <button onClick={() => setTip(20)}>Propina 20%</button>
        <button onClick={() => setTip(25)}>Propina 25%</button>
      </div>
      <div>
        <input
          type="number"
          values={tip}
          onChange={(e) => setTip(parseFloat(e.target.value) || 0)} />
      </div>
    </div>
  )
}
//       <div>
//         <input
//           type="number"
//           value={getTip}
//           onChange={(e) => setTip(parseFloat(e.target.value) || 0)} />
//       </div>
//       <h2>Su monto es de {getMonto + getMonto * (getTip / 100)}</h2>
//       <h2>Su propina es del {getTip}%</h2>
//     </div>
//   )
// }
// function App() {
//   const [getMonto, setMonto] = useState(0)
//     <>
//       <div>
//         <h1>TIP CACULATOR</h1>
//       </div>
//       <div className="card" >
//         <input
//           type="number"
//           value={getMonto}
//           onChange={(e) => setMonto(parseFloat(e.target.value) || 0)}
//         />
//         <TipCalculator getMonto={getMonto} />
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>


export default Pago;
