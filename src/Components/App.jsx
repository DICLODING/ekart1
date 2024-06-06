import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import Checkout from './Checkout'
import Testimonial from './Testimonial'
import Error from './Error'
import ContactUs from './ContactUs'
import AdminHome from './User/AdminHome'
import Maincategory from './User/Maincategory/Maincategory'
import CreateMaincategory from './User/Maincategory/Createmaincategory'
import Updatemaincategory from './User/Maincategory/Updatemaincategory'



export default function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar/>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/shop' element= {<Shop />}/>
        <Route path='/productdetails' element ={<ProductDetails/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/checkbox' element ={<Checkout/>}/>
        <Route path='/testimonial' element ={<Testimonial/>} />
        <Route path='/error' element = {<Error/>}/>
        <Route path='/adminhome' element = {<AdminHome/>}/>
        <Route path='/user/maincategory' element={< Maincategory/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
       <Route path='/user/maincategory/create' element={<CreateMaincategory/>}/>
       <Route path='/user/maincategory/update:id' element={<Updatemaincategory/>}/>
      </Routes>
       <Footer/>
       </BrowserRouter>
    </>
  )
}
