import React, { useState } from 'react'
import './orderSummery.css'
import Button from '@mui/material/Button';
import image from '../images/Image 11.png'

function OrderSummery(props) {
    // const placeOrder = (obj) => {
    //     addOrder(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    // }

  return (
    <div className='orderSummery-container'>
        {/* <div className="orderSummery-text">
            Order Summery
        </div> */}
        <div className="orderSummery-orderData">
            <div className="orderItem-image">
                <img src={image} alt="" className='orderItem-image-img' />
            </div>
            <div className="orderData">
                <div className="cartItems-title">
                    {props.cartedOrderSummery.name}
                </div>
                <div className="cartItems-author">
                    by {props.cartedOrderSummery.author}
                </div>
                <div className="cartItems-price">
                    Rs. {props.cartedOrderSummery.price}
                </div>
            </div>
        </div>
        {/* <div className="checkout-btn">
            <Button variant="contained" className='checkout' onClick={()=>{placeOrder(props.placeOrderObj)}}>checkout</Button>
        </div> */}
    </div>
  )
}

export default OrderSummery
