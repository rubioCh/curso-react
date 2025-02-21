import './App.css'
import { useFetch } from './hooks'

const url = "https://rickandmortyapi.com/api/episode/1"
interface Data {
  id: number;
  name: string;
  air_date: string;
  episode: string
  characters: Array<string>;
  url: string;
  created: string;
}

function App() {
  const {data, loading, error} = useFetch<Data>(url);
  
  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (error) {
    return <div>UPS! Hay un Error: {error.message} </div>
  }

  return (
      <div>{JSON.stringify(data)}</div> 
  )
}

export default App