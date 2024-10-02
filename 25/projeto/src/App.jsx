import { BrowserRouter, Routes, Route, Link  } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Carrinho from "./components/Carrinho"
import Produto from "./components/Produto"


function App() {
  return (
    <>
      <Carrinho/>
      <BrowserRouter>
        
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>

        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
