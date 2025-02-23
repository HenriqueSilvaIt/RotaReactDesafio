import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "./routes/Home"
import HomeBody from "./routes/Home/HomeBody"
import Products from "./routes/Home/Products"
import About from "./routes/Home/About"
import Books from "./routes/Home/Products/books"
import Computers from "./routes/Home/Products/computers"
import Eletronics from "./routes/Home/Products/eletronics"

export default function App() {

  return (
    <>
      <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route index element={<Navigate to="/home"/>}/>
        <Route path="home" element={<HomeBody/>}/>

        <Route path="products"  element={<Products/>}>
                <Route path="books" element={<Books/>}/>
                <Route path="computers" element={<Computers/>}/>
                <Route path="eletronics" element={<Eletronics/>}/>
        </Route>

        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
      </BrowserRouter>
    </>
  )
}


