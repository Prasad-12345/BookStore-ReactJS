import React from 'react'
import './header.css'
import education from './images/education.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import cart from './images/supermarket.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Header() {
  return (
    // <div className='separate-header'>
          <div className="homeHeader">
            <div className="headerChild1">
                <div className="imageAndText">
                    <img className='bookImage' src={education} alt="" />
                    <div className='booksText'>Bookstore</div>
                </div>
                <div className="search">
                    <div className="searchIcon"><SearchOutlinedIcon /></div>
                    <input type="text" className='inputSearch' />
                </div>
            </div>
            <div className="headerChildtwo">
                <div className="profile">
                    <div className="profileIcon"><PersonOutlineOutlinedIcon/></div>
                    <div className="profileText" style={{color:'white'}}>profile</div>
                </div>
                <div className="cart">
                    <img className='cartImage' src={cart} alt=""/>
                    <div className="cartText" style={{color:'white'}}>cart</div>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default Header
