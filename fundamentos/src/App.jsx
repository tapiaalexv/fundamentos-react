//import { Fragment } from "react"; -> similar a una etiqueta vacia

//los componentes siempre inicializarlos con Mayus
const MyButton = () => {
    return(
        <button>i'am a button</button>
    )
}

const App = () => {

    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    const pathImg = "https://picsum.photos/200/300";

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>;
            <img src={pathImg} alt={`imagen-${title}`} />
            <MyButton/>
        </>
    );

};
export default App;
//solo se puede export una vez por defecto por archivo

/*export const App = () => {
    return <h1>Hola soy React</h1>
}*/