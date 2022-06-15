import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import About from './About'
import FootWear from './Catogaries/FootWear'
import MensWear from './Catogaries/MensWear'
import Mobiles from './Catogaries/Mobiles'
import WomenWear from './Catogaries/WomenWear'
import Details from "./Details"
import Contact from './Contact'
import FandQPage from './FandQPage'
import Home from './Home'
import NavBar from './NavBar'
import Cart from "./Cart"
//import Login from './Login'
export default function AllRoutes() {
  

  return (
    <div>
      
       <NavBar/>
      <Routes>
          {/* <Route path="/contact" element={<Contact/>}></Route>   */}
          <Route path="/mens" element={<MensWear/>}></Route>   
          <Route path="/womens" element={<WomenWear/>}></Route>   
          <Route path="/women's_cloth" element={<FootWear/>}></Route>
          <Route path="/electronics" element={<Mobiles/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/fandq" element={<FandQPage/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/women's_cloth/:id" element={<Details/>}></Route>
          <Route path="/mens/:id" element={<Details/>}></Route>
          <Route path="/womens/:id" element={<Details/>}></Route>
          <Route path="/electronics/:id" element={<Details/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/details" element={<Details/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
      </Routes>
    </div>
  )
}
