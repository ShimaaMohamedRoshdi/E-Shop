import { BrowserRouter,Routes ,Route } from "react-router-dom"

import Footer from "./components/Footer"
import Home from "./pages/Home" 
import Shop from "./pages/Shop"
import Cart from './pages/Cart'
import CheckOut from "./pages/CheckOut"
import { useState } from "react"
import Order from "./pages/Order"

import FilterData from "./pages/FilterData"
import Contact from "./components/Contact"
import About from "./components/About"
import ProductDetails from "./pages/ProductDetails"
import Wishlist from "./pages/Wishlist"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import ProfileEdit from "./pages/ProfileEdit"

function App() {
  const [order,setOrder]=useState(null)
  return (
   <BrowserRouter>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/checkout" element={<CheckOut setOrder={setOrder}/>}></Route>

      <Route path="/order-confirmation" element={<Order order={order}/>}></Route>
      <Route path="/filter-data" element={<FilterData/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/wishlist" element={<Wishlist/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/profileEdit" element={<ProfileEdit/>}></Route>
    

      


     </Routes>

     <Footer/>
   </BrowserRouter>
   
  )
}

export default App
