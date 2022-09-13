import React, {useState, useEffect} from 'react'
import CartItems from '../cartItems/cartItems'
import Header from '../header/header'
import Button from '@mui/material/Button';
import './myCart.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { getBooksFromCart } from '../../services/dataService';
import AddressDetail from '../addressDetail/addressDetail';
import OrderSummery from '../orderSummery/orderSummery';
import { addOrder } from '../../services/dataService';
import { Link } from 'react-router-dom';
import { deleteFromCart } from '../../services/dataService';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { getCartApiDetails, getModules } from '../redux/moduleReducer';
import { getCartApiDetails } from '../redux/module';
import { connect } from 'react-redux';

function MyCart() {
    const[cartItems, setCartItems] = useState([])
    const[addressDetails, setAddressDetails] = useState(false)
    const[orderSummery, setOrderSummery] = useState(false)
    const[placeOrderObj, setPlaceOrderObj] = useState({'cartId_json':[], 'address_id':1})
    const [cartId, setCartId] = useState({'id':''})
    // const[cartIdJson, setCartIdJson] = useState([])
    const dispatch = useDispatch();

    const getAllBooksFronCart = () => {
        getBooksFromCart().then((response)=>{console.log(response); 
          dispatch(getCartApiDetails(response.data));
          setCartItems(response.data);
          
          
          let cartIdJson = []
        const filterArray = response.data.filter((cartId)=>{
            // setPlaceOrderObj((prevState)=>({...prevState, cartId_json:[cartId.id]}))
            // for(let i=0; i < response.data.length; i++){
                
                let eachcartId = cartId.id
                cartIdJson.push(eachcartId)
                
            // }
        })
        setPlaceOrderObj((prevState)=>({...prevState, cartId_json:cartIdJson}))
        }).catch((error)=>console.log(error))
    }

    const batchData = useSelector((state) => state.GetCartApiDetails);
    console.log(batchData);
    const cartdetailsRedux = batchData.batchDetails
    console.log(cartdetailsRedux);
    // const orders = () => {
    //     let cartIdJson = []
    //   for(let i = 0; i < cartItems.length; i++){
    //     // cartId = cartId.id
    //     cartIdJson.push(cartIdJson)
    //   }
    // }

    const listenToPlaceholder = () => {
      setAddressDetails(true)
    }

    const listenToOrderSummery = () => {
        setOrderSummery(true);
    }

    const placeOrder = (obj) => {
      addOrder(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

    const deleteBooksFromCart = (obj) => {
      deleteFromCart(obj).then((response)=>(console.log(response))).catch((error)=>console.log(error))
    }

    const getCartId = (obj) => {
      setCartId((prevState)=>({...prevState, id:obj.id}))
    }
    useEffect(()=>{
        getAllBooksFronCart();
    },[])

    const cartedItems = cartdetailsRedux&&cartdetailsRedux.map((cartBook)=><CartItems cartBook={cartBook} getCartId={()=>{getCartId(cartBook)}} cartId={cartId}/>)
    const cartedorderSummery = cartItems.map((orderSummery)=><OrderSummery cartedOrderSummery={orderSummery} placeOrderObj={placeOrderObj}/>)

  return (
    <div className='myCart-Container'>
      {/* <div className="myCart-header"> */}
        <Header/>
      {/* </div> */}
      <div className="home-mycarttext">
         Home / <span className='mycart-text'>My Cart</span>
      </div>
      <div className="myCart-cartItems">
        <div className="myCart-cartItems-textandbtn">
            <div className="myCart-cartItems-text">
                MyCart
            </div>
            <div className='myCart-cartItems-btn'>
                <LocationOnIcon/>
                <span className='useCurrentLocation'>Use current location</span>
            </div>
        </div>
        <div className="importCartItems">{cartedItems}</div>
        <div className="placeOrderBtn">
            {!addressDetails && <Button variant="contained" className='placeOrder-btn' onClick={listenToPlaceholder}>Place Order</Button>} 
        </div>
      </div>
      <div className="addressDetails-mycart">
            {!addressDetails && <div className='addressDetail-text'>Address Detail</div>}
            {addressDetails && <div className="addDetails-import"><AddressDetail listenToOrderSummery={listenToOrderSummery} orderSummery={orderSummery}/></div>}
      </div>
      <div className="orderSummery-mycart">
            {!orderSummery && <div className='orderSummery-text'>Order Summery</div>}
            {orderSummery && 
            <div>
              <div className='orderSummery-text'>Order Summery</div>
              <div className="cartedOrderSummery">{cartedorderSummery}</div>
              <div className="checkout-btn"> 
                <Link to={'/OrderSuccess'}>
                  <Button variant="contained" className='checkout' onClick={()=>{placeOrder(placeOrderObj)}}>checkout</Button>
                </Link>
              </div>
            </div>}
            {/* <div className="checkout-btn">
              
            </div> */}
      </div>
    </div>
  )
}

export default connect()(MyCart)
