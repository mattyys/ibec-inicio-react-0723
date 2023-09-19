//se crea componente inteligente para traer los datos de la api y realizar la itremlist

import "./ItemContainer.css";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/ClipLoader";

function ItemContainer() {
  //1. se define un endpoint para comenzar a trabajar con los productos
  const url = " https://run.mocky.io/v3/a5b866d9-cf81-4a7b-9449-bc9bd1feaf8f";

  //2. se defina un estado para guardar los productos que me deveulve el api
  const [products, setProducts] = useState([]);
  //usestate inicializa un valor y guarda estados

  //3.definir una funcion que se encarge de hacer el fecth al api y guyarde los productos

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
        console.error(err);
    }
  };
  useEffect(() => {
    getProducts();
    //esta funcion ejecuta un bloque de codigo una sola vez
    /*2.Aca aplicamos el fetch que devuelve una promesa y lo uysamos conlas funciones then y catch*/
   // fetch(url)
   //   .then((response) => response.json)
   //   .then((data) => setProducts(data));
  }, []); //este es un array de dependencias y esta vacio el useeffect lo ejecuta una sola vez

  //se utiliza la funcion de cortocircuito

  //se recorre el array de productos con la funcion map
  //devuelve el elemento del array y lo agregamos mediante un callbacks
  //al componente item
  //se debe agregar una key para identidficar el elemento

  //se púeden colocar spiner de react
  return (
    <div className="product-container">
      {products.length > 0 ? (
        products.map((prod) => {
          return <Item product={prod} key={prod.id} />;
        })
      ) : (
        <RingLoader />
      )}
      
    </div>
  );
};

export default ItemContainer;
