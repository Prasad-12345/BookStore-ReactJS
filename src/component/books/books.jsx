import React from 'react'
import './books.css'
import cat from '../images/cat.webp'
import upsc from '../images/upsc.webp'
import bsf from '../images/BSF.webp'
import imagebook from '../images/Image 11.png'
function Books(props) {
  // let images = [cat, upsc, bsf]
  const bookDetail = (data) => {
      props.listenToBooks(false);
      props.listenToEachBook(data);
  }
  return (
    <div className='booksContainer' onClick={()=>bookDetail(props.book)}>
        <div className="bookTopSection">
            <div className="booksImage">
              <img src={imagebook} alt="" className='book-image'/>
            </div>
        </div>
        <div className="booksBottomSection">
            <div className="booksTitle">{props.book.name}</div>
            <div className="booksAuthor">by {props.book.author}</div>
            <div className="booksPrice">Rs.{props.book.price}</div>
        </div>
    </div>
  )
}

export default Books
