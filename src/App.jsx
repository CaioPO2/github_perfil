import { useState } from "react"
import Perfil from "./components/Perfil/Index"
import Formulario from "./components/formulario"
import ReposList from "./components/repolist"

function App() {
  const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true)
  return(
    <>
      <Perfil nomeUsuario="CaioPO2" />
      <ReposList nomeUsuario="CaioPO2" />

      {/* {formularioEstaVisivel && (
        <Formulario/>
      )}
      <button onClick={() => setformularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App
