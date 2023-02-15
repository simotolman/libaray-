import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'
import Products from './pages/Products'
import Books from './pages/Books'
import Book from './pages/Book'
import Videos from './pages/Videos'
import Video from './pages/Video'
import Audios from './pages/Audios'
import Audio from './pages/Audio'
import Admin from './pages/Admin'
import AdminProducts from "./components/admin/products/Explorer";
import AddProduct from "./components/admin/addProduct/AddProduct";
import UpdateProduct from "./components/admin/updateProduct/UpdateProduct";

const ScrollUp = () => {
  const path = useLocation();
  useEffect(() => {
  }, [path])
  
}

const App = () => {
  return (
    <Router>
      <ScrollUp />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="update-product" element={<UpdateProduct />} />
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/books" element={<Books />}></Route>
        <Route path="/products/books/:id" element={<Book />}></Route>
        <Route path="/products/videos" element={<Videos />}></Route>
        <Route path="/products/videos/:id" element={<Video />}></Route>
        <Route path="/products/audios" element={<Audios />}></Route>
        <Route path="/products/audios/:id" element={<Audio />}></Route>
      </Routes>
    </Router>
  )
}


export default App
