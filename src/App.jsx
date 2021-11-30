import { useState } from "react"
import Formulario from "./components/Formulario"
import PintarDatos from "./components/PintarDatos"

const App = () => {

    const [nombrePersonaje, setNombrePersonaje] = useState('')

    return (
        <>
          <div className="container text-center mt-2">
             <h1>App Rick and Morty</h1>
             <Formulario setNombrePersonaje={setNombrePersonaje}></Formulario>
             <PintarDatos nombrePersonaje={nombrePersonaje}></PintarDatos>
          </div>
        </>
    )
}

export default App
