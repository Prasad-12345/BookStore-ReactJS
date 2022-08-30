import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from '../home/home';

// import { Routes ,Route } from 'react-router-dom';
import Wishlist from '../wishlist/wishlist';

function Router() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route  path="wishlist" element={<Wishlist/>}/>
              <Route  path="home" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
