//se crea componente inteligente para traer los datos de la api y realizar la itremlist
import {arrayProducts}from"../../assets/data/products";
import './ItemContainer.css';
import Item from "../Item/Item";
import { useEffect, useState } from "react";




function ItemContainer() {
    
    const [products, setProducts] = useState([]);
//usestate inicializa un valor y guarda estados
    useEffect(() => {//esta funcion ejecuta un bloque de codigo una sola vez
        /*aca va el codigo que se ejecuta cuando se monta el componente*/
        setProducts(arrayProducts);//la primera vez que se carga ya no se renderiza mas ya queda cargado en la constr[products]
    },[]);//este es un array de dependencias y esta vacio el useeffect lo ejecuta una sola vez


    //se utiliza la funcion de cortocircuito  

    //se recorre el array de productos con la funcion map
    //devuelve el elemento del array y lo agregamos mediante un callbacks
    //al componente item
    //se debe agregar una key para identidficar el elemento
    return (<div>
       {products.length > 0 && products.map((prod)=>{
        
            return <Item product={prod} key={prod.id}/>;
       })}

    </div>);
}

export default ItemContainer;