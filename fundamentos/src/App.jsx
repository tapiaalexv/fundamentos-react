//import { Fragment } from "react"; -> similar a una etiqueta vacia

const App = () => {

    const title = "Mi titulo desde una constante";

    return (
        <>
            <h1 className="text-center">{title.toUpperCase()}</h1>;
            <img src="https://picsum.photos/200/300" alt="" />
        </>
    );


};
export default App;
//solo se puede export una vez por defecto por archivo

/*export const App = () => {
    return <h1>Hola soy React</h1>
}*/