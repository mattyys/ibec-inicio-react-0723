import './App.css'
//se importa componente button
import Button from './components/Button/Button';


function App() {

//todo xml que va dentro de un return
  return (
    //no puede devolver mas de 1 elemento, todo tiene que estar dentro de una etiqueta contenedora
    //se utiliza <Fragment> para o <> para envolver el contenido y al momento de compilar no se muestra, se diseñaron para no llenar de div las paginas
    <>

     <Button title='Action 1' />
     <Button title='pedito' />
     <Button title='Action 3' />
     </>
  )
}

export default App
