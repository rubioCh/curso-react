import { createContext } from 'react';
import './App.css'
import { Button, ColorRed, AppForms } from './components';

export const GentlemanContext = createContext({})

const handleClick = () => {
  console.log('uy me clikio todo')
}

const dimeHola = () => {
  alert('Hola!')
}

const submit = () => {
  console.log('sumit')
}

function App() {
  return (
    <>
      <ColorRed><Button parentMethod={dimeHola}>My button</Button></ColorRed>
      <Button parentMethod={handleClick}>
        My Button normal
      </Button>
      <AppForms>
        <button type="submit" onClick={submit} >Submit</button>
|      </AppForms>
   </>
  )
}

export default App