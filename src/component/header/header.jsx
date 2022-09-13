import React, { useState } from 'react'
import './header.css'
import education from './images/education.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import cart from './images/supermarket.png'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useEffect } from 'react';
import { getBooksFromCart } from '../../services/dataService';
import { useDispatch, useSelector } from 'react-redux';
import { getCartApiDetails } from '../redux/module';
import Badge from '@mui/material/Badge';

function Header(props) {
    const[cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
    const getCartData = () => {
        getBooksFromCart().then((response)=>{console.log(response); 
        setCartData(response.data)
        dispatch(getCartApiDetails(response.data));
        
        }).catch((error)=>console.log(error));
    }

    const batchData = useSelector(state => state.GetCartApiDetails);
    const batchDataRedux = batchData.batchDetails
    console.log(batchDataRedux);

    useEffect(()=>{
        getCartData()
    }, [])
    const length = batchDataRedux&&batchDataRedux.length;
    console.log("length" + length);

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
                    <input type="text" className='inputSearch' onChange={(event)=>props.listenToHeaders(event.target.value)}/>
                </div>
            </div>
            <div className="headerChildtwo">
                <div className="profile">
                    <div className="profileIcon"><PersonOutlineOutlinedIcon/></div>
                    <div className="profileText" style={{color:'white'}}>profile</div>
                </div>
                <div className="cart">
                    <Badge badgeContent={length} color="primary">
                        <img className='cartImage' src={cart} alt="" color='action'/>
                    </Badge>
                    <div className="cartText" style={{color:'white'}}>cart</div>
                </div>
            </div>
        </div>
    // </div>
  )
}

export default Header
