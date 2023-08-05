import './Button.css';
//nombres de componentes cn mayuscula
function Button(props){

return(
    //en lenguaje xml para dar clases a las etiquetas es con className
    <button className="button-primary">{props.title}</button>
)

}

export default Button;//exportar el componente para reutilizar o usar donde se requiera