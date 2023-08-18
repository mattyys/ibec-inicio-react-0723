import './App.css'
//se importa componente button
//import Button from './components/Button/Button';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

//todo xml que va dentro de un return
  return (
    //no puede devolver mas de 1 elemento, todo tiene que estar dentro de una etiqueta contenedora
    //se utiliza <Fragment> para o <> para envolver el contenido y al momento de compilar no se muestra, se diseñaron para no llenar de div las paginas
    <>
     
     <ItemCount initial={1} stock={10} />
     </>
  )
}

export default App
