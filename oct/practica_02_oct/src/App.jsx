import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Greeting({setName}){
  return <h1>Hola {setName}</h1>
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greeting setName={"Gente que cree que nuro es un aweonao"}/>
        <Greeting setName={"↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓"}/>
        <Greeting setName={"atest"}/>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> +1 </button>
        <button onClick={() => setCount(0 )}> Reset </button>
        <button onClick={() => setCount((count) => count - 1)}> -1 </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
