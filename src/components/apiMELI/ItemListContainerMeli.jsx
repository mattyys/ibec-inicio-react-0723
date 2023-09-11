//se hace import de use effect y use state para utilizsar las poromps y la funcion async para usar la api de mercado libre
import { useEffect, useState } from "react";

//se guarda en una constnte la URL base de la api que vamos a utilizar
const URL_BASE = "https://api.mercadolibre.com/sites/MLA";

//se crea la funcion itemlistcontainer para exportar
//se pasa por parametro a devolver query que es la consulta que devuelve
const ItemListContainerMeli = ({ query }) => {
  //se declara el el estado products con su respectivo dispach
  const [products, setProducts] = useState([]);

  //se implementa el useEffect que es el que se utiliza cuando se realiza la coneccion
  //recibe por parametros un callback(funcion flecha)
  useEffect(() => {
    fetch(`${URL_BASE}/search?q=${query}`) //se arma la direccion que retorna resultados
      .then((response) => {
        return response.json();
      }) //se toma la respuesta
      .then((data) => {
        setProducts(data.results);
      }); //se pasa al array products
  }, [query]); //este query es el que recibe del lado usuaruio par amodificar el contenido, sino no es reativo y nose actulaizan los datos

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })
      ) : (
        <p>cargando productos...</p>
      )}
    </div>
  );
};

export default ItemListContainerMeli;
