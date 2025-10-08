import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function TipCalculator({setMonto,getMonto}){
  const [getTip, setTip] = useState(0);

  let monto_Final = getMonto + getMonto * (getTip/100); 
  return(
    <div>
      <div>
        <button onClick={() => setTip(15)}>Propina 15%</button>
        <button onClick={() => setTip(20)}>Propina 20%</button>
        <button onClick={() => setTip(25)}>Propina 25%</button>
      </div>
      <div>
        <input 
          type="number"
          value={getTip}
          onChange={(e)=>setTip(parseFloat( e.target.value)|| 0)}/>
      </div>
      <h2>Su monto es de {getMonto + getMonto*(getTip/100)}</h2>
      <h2>Su propina es del {getTip}%</h2>
      
    </div>  
)}
function App() {
  const [getMonto, setMonto] = useState(0) 

  return (
    <>
      <div>
        <h1>TIP CACULATOR</h1>
     </div>
      <div className="card" >
        <input 
          type="number"
          value={getMonto}
            onChange={(e)=>setMonto(parseFloat( e.target.value)|| 0)}
          /> 
        <TipCalculator getMonto={getMonto}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
