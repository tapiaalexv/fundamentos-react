//import { Fragment } from "react"; -> similar a una etiqueta vacia

//los componentes siempre inicializarlos con Mayus
const MyButton = () => {
    return(
        <button>i'am a button</button>
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
    const pathImg = "https://picsum.photos/200/300";
    const user = true;
    const user2 = true;

    return (
        <>
            <h1 className={classTitle}>{title.toUpperCase()}</h1>;
            <img src={pathImg} alt={`imagen-${title}`} />
            <MyButton/>
            {user ? <OnlineTxt/> : <OfflineTxt/>}
            {user2 && <OfflineTxt/>}

        </>
    );

};
export default App;
//solo se puede export una vez por defecto por archivo

/*export const App = () => {
    return <h1>Hola soy React</h1>
}*/