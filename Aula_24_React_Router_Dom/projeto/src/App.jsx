import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/Home"
import ContatoPage from "./pages/Contato"
import Menu from "./componentes/Menu"
import LoginPage from "./pages/Login"
import BuscarCep from "./pages/Buscar/BuscarCep"

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/BuscarCep" element={<BuscarCep/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
