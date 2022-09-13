import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../home/home';
import MyCart from '../myCart/myCart';
import OrderSuccess from '../orderSuccessPage/orderSuccess';

// import { Routes ,Route } from 'react-router-dom';
import Wishlist from '../wishlist/wishlist';
import MainPage from '../mainPage/mainPage';

function Router() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<MainPage/>}/>
              <Route  path="wishlist" element={<Wishlist/>}/>
              <Route  path="home" element={<Home/>}/>
              <Route path="orderSuccess" element={<OrderSuccess/>}/>
              <Route path="MyCart" element={<MyCart/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
