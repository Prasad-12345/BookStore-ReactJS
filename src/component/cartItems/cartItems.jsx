import React, { useEffect, useState } from 'react'
import './cartItems.css'
import { deleteFromCart, getBooksFromCart } from '../../services/dataService';
import image from '../images/Image 11.png'
import { incrementQtyInCart } from '../../services/dataService';
import { decrementQtyInCart } from '../../services/dataService';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import RemoveCircleOutlineOutlined from '@mui/icons-material/RemoveCircleOutlineOutlined';
// import { deleteFromCart } from '../../services/dataService';

function CartItems(props) {
    const[cartId, setCartId] = useState({'id':''})

    const incrementCartQuantity = (obj) => {
        // setCartId((prevState)=>({...prevState, id:props.cartBook.id}));

        incrementQtyInCart(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

    const decrementCartQuantity = (obj) => {
        // setCartId((prevState)=>({...prevState, id:obj.id}));

        decrementQtyInCart(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

    const getCartId = () => {
        setCartId((prevState)=>({...prevState, id:props.cartBook.id}));
    }

    const removeBookFromCart = (obj) => {
        deleteFromCart(obj).then((response)=>console.log(response)).then((error)=>console.log(error))
    }

    useEffect(()=>{
        getCartId();
    }, [])
    
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
                <div className="cartItems-increment" onClick={()=>{
                    decrementCartQuantity(cartId)
                }}>
                    <RemoveCircleOutlineOutlined/>
                </div>
                <div className="cartItems-quantity">
                    {props.cartBook.book_quantity}
                </div>
                <div className="cartItems-increment" onClick={()=>{
                    incrementCartQuantity(cartId)
                }}>
                    <AddCircleOutlineIcon/>
                </div>
                <div className="cartItems-remove" onClick={()=>removeBookFromCart(cartId)}>
                    remove
                </div>
            </div>
        </div>
    </div>
        
// }
    // </div>
  )
}

export default CartItems
