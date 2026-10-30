import { useState } from 'react'
import './App.css'

function App() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)

  function sumar() {
    setResultado(Number(numero1) + Number(numero2))
  }

  function restar() {
    setResultado(Number(numero1) - Number(numero2))
  }

  return (
    <div className="calculadora">
      <h1>Sumar y Restar</h1>

      <div className="campo">
        <label>Número 1:</label>
        <input
          type="number"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Número 2:</label>
        <input
          type="number"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
      </div>

      <div className="botones">
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
      </div>

      <h2>Resultado: {resultado}</h2>
    </div>
  )
}

export default App
