import React, { useEffect } from 'react'
import './bookDetail.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Button from '@mui/material/Button';
import bookImg from '../images/Image 11.png'
import { getBooksFromCart } from '../../services/dataService';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { addBookToCart } from '../../services/dataService';
import { incrementQtyInCart } from '../../services/dataService';
import { decrementQtyInCart } from '../../services/dataService';
import { addBooksToWishlist } from '../../services/dataService';
import CartItems from '../cartItems/cartItems';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getCartApiDetails } from '../redux/module';

function BookDetail(props) {
    const [cartData, setCartData] = useState([])
    const [btnView, setBtnView] = useState(true);
    const [cartBookQty, setCartBookQuantity] = useState('');
    const [cartObj, setCartObj] = useState({'book_id':'', 'book_quantity':1});
    const [bookId, setBookId] = useState(props.selectedBook.id);
    const[cartQtyObj, setCartQtyObj] = useState({'id':''});
    const[wishlisiObj, setWishlistObj] = useState({'cart_id':''});

    const dispatch = useDispatch();
    // var batchData = []
    const batchData = useSelector(state => state.GetCartApiDetails)
    console.log(batchData);
    const batchDataRedux = batchData.batchDetails
    console.log(batchDataRedux);
    // const batchDetails = batchData.batchDetails
    const incrementQuantityInCart = (obj) => {
        incrementQtyInCart(obj).then((response)=>{console.log(response); }).catch((error)=>console.log(error))
    }

    const decrementQuantityInCart = (obj) => {
        decrementQtyInCart(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

    const addBooksToCart = (obj)=> {
        addBookToCart(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

    const addBookToWishlist = (obj) => {
        addBooksToWishlist(obj).then((response)=>console.log(response)).catch((error)=>console.log(error))
    }

    const getallBooksFromCart = () => {
        getBooksFromCart().then((response)=>{console.log(response);
            // dispatch(getCartApiDetails(response.data))
            const filterArray = response.data.filter((cart)=>{
                if(cart.book_id === props.selectedBook.id){
                    setCartBookQuantity(cart.book_quantity)
                    setBtnView(false)
                    setCartQtyObj((prevState)=>({...prevState, id:cart.id}))
                    setWishlistObj((prevState)=>({...prevState, cart_id:cart.id}))
                }
                else{
                    setCartObj((prevState)=>({...prevState, 'book_id': bookId}))
                }
            });
            
            // }
            setCartData(response.data)
            // const allCartBooks = cartData.map((cartBook)=>{<CartItems cartBook={cartBook}/>})
        }).catch((error)=>console.log(error));
        // console.log(cartData);
    }

    useEffect(()=>{
        getallBooksFromCart();
        // console.log(batchData);
        // isBookInCart();
        // console.log(btnView);
    }, [])

     

  return (
    <div className='bookDetailContainer'>
        <div className="leftSection-BookDetail">
            <div className="leftSection-BookDetailTop">
                <div className="bookDetail-BookImage">
                    <img src={bookImg} alt="" className='BookImg' />
                </div>
            </div>
            <div className='leftSection-BookDetailBottom'>
                {btnView ? <input type="button" value="ADD TO BAG" className='addToBag' onClick={()=>addBooksToCart(cartObj)}/> :
                    <div className="updateQtyInCart">
                        <span className="decrement" onClick={()=>{decrementQuantityInCart(cartQtyObj)}}><RemoveCircleOutlineOutlinedIcon/></span>
                        <span className="cartBookQty">{cartBookQty}</span>
                        <span className="increment" onClick={()=>{incrementQuantityInCart(cartQtyObj)}}><AddCircleOutlineIcon/></span>
                    </div> 
                }
                
                <div className="favAndWish">
                    {/* <FavoriteBorderIcon className='fav-icon'/> */}
                    <input type="button" value="WISHLIST" className='wishlist' onClick={()=>{addBookToWishlist(wishlisiObj)}} />
                </div>
            </div>
        </div>
        <div className="rightSection-BookDetail">
            <div className='rightSection-BookDetail-child1'>
                <div className="righrSection-name" >{bookId}{props.selectedBook.name}</div>
                <div className="righrSection-autor">by {props.selectedBook.author}</div>
                <div className="righrSection-rating">
                    <div >4.5 </div>
                    <StarOutlineIcon  className='child1-starIcon'/>
                </div>
                <div className="righrSection-price">RS.{props.selectedBook.price}</div>
                {/* <div className='seperate'>--------------------------------------------------------------------------------------------------------------------------------------</div> */}
            </div>
            <div className="rightSection-BookDetail-child2">
                <div className="bookDetail">
                    Book Detail
                </div>
                <div className="bookDesc">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    Lorem ipsum dolor sit amet, consetetur sadipscing 
                </div>
                {/* <div className='seperate'>--------------------------------------------------------------------------------------------------------------------------------------</div> */}
            </div>
            <div className="rightSection-BookDetail-child3">
                <div className="customerFeedback">
                    Customer Feedback
                </div>
                <div className="feedback-bookDetail">
                    <div className="bookDetail-overallRatings">
                        Overall rating
                    </div>
                    <div className="star-icons">
                        <StarOutlineIcon className='starIcons-books'/>
                        <StarOutlineIcon/>
                        <StarOutlineIcon/>
                        <StarOutlineIcon/>
                        <StarOutlineIcon/>
                    </div>
                    <div className="feedbackInput">
                        <input type="text" className='books-feedbackInput' />
                    </div>
                    <div className="submitFeedback">
                        <Button variant="contained" className='submitFeedback-btn'>submit</Button>
                    </div>
                </div>
                <div className="bookDetail-displayFeedback">
                    <div className="displayReview-box1">
                        <div className="username">
                           <span className='round'>AC</span> Aniket Chile
                        </div>
                        <div className="staricon-display">
                            <StarOutlineIcon className='starIcons-books'/>
                            <StarOutlineIcon/>
                            <StarOutlineIcon/>
                            <StarOutlineIcon/>
                            <StarOutlineIcon/>
                        </div>
                        <div className="userfeedbackuser">
                            Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                        </div>
                    </div>
                    <div className="displayReview-box2">
                        <div className="username">
                            <span className='round'>SB</span> Shweta Bodkar
                        </div>
                        <div className="staricon-display">
                            <StarOutlineIcon className='starIcons-books'/>
                            <StarOutlineIcon/>
                            <StarOutlineIcon/>
                            <StarOutlineIcon/>
                            <StarOutlineIcon/>
                        </div>
                        <div className="userfeedbackuser">
                            Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetail
