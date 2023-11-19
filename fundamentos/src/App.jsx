//import { Fragment } from "react"; -> similar a una etiqueta vacia
import imgUno from "./assets/imagenes/rick&morty.jpg"
//los componentes siempre inicializarlos con Mayus
const MyButton = (props) => {
    return (
        <button>{props.text}</button>
    )
}

const OnlineTxt = () => {
    return (
        <div>
            <h1> Online </h1>
        </div>
    )
}

const OfflineTxt = () => {
    return (
        <div>
            <h1> Offline </h1>
        </div>
    )
}

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    //const pathImg = "src/assets/imagenes/rick&morty.jpg";
    const user = true;
    const user2 = true;

    const fruits = ["🍎", "🍐", "🍌"];

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>;

            <img src={imgUno} alt={`imagen-${title}`} />

            <MyButton text="boton 1"/>
            <MyButton text="boton 2"/>
            <MyButton text="boton 3"/>

            {user ? <OnlineTxt /> : <OfflineTxt />}
            {user2 && <OfflineTxt />}

            <ul>
                {
                    fruits.map((frut, index) => (
                        <li key={index}> {frut} - {index} </li>
                    ))
                }
            </ul>

        </>
    );

};
export default App;
//solo se puede export una vez por defecto por archivo

/*export const App = () => {
    return <h1>Hola soy React</h1>
}*/