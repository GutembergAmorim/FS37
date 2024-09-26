import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/Home"
import ContatoPage from "./pages/Contato"
import Menu from "./componentes/Menu"
import LoginPage from "./pages/Login"


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
