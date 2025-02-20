import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchData =  async () => {
    setLoading(true)
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        if( !response.ok) {
          throw new Error("Error al obtener datos")
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (err) {
        setError(err as string)
      } finally {
        setLoading(false)
      }
    }
  // comunicamos con un endpoint - entidad externa al componente
  // oeraciones async
  // parametros de entrada

  //maneja el ciclo de vida de un componente
  useEffect( () => {
    fetchData()
    // logica? que logica ? cuando se ejecuta esta logica?
    // 1 - Cuando se monta el componente
    // 2 - cada vez que se modifique uno de los valores del state
    
    // return () => {
      // cuando se destruya el componente
     //   manejar el estado de la memoria
    //} 
  },[])
  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>UPS! Hay un Error: {error} </div>
  }

  return (
      <div>{JSON.stringify(data)}</div> 
  )
}

export default App