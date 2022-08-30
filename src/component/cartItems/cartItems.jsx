import React, { useEffect, useState } from 'react'
import './cartItems.css'
import { getBooksFromCart } from '../../services/dataService';
import image from '../images/Image 11.png'
function CartItems(props) {

    
  return (
    <div className='cartItems-container'>
        <div className="cartItems-leftSection">
            <div className="cartItems-image">
                <img src={image} alt="" className='cartItems-image-img'/>
            </div>
        </div>
        <div className="cartItems-rightSection">
            <div className="cartItems-title">
                {props.cartBook.name}
            </div>
            <div className="cartItems-author">
                by {props.cartBook.name}
            </div>
            <div className="cartItems-price">
                Rs. {props.cartBook.price}
            </div>
            <div className="cartItems-btns">
                <div className="cartItems-decrement">
                    -
                </div>
                <div className="cartItems-quantity">
                    {props.cartBook.book_quantity}
                </div>
                <div className="cartItems-increment">
                    +
                </div>
                <div className="cartItems-remove">
                    remove
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
