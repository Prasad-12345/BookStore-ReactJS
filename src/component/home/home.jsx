import React, { useEffect } from 'react'
import './home.css'
import education from './images/education.png'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import cart from './images/supermarket.png'
import { showBooks } from '../../services/dataService';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState } from 'react';
import Books from '../books/books';
import BookDetail from '../bookDetail/bookDetail';
function Home() {
    const[books, setBooks] = useState([]);
    const[view, setView] = useState(true);
    const[selectedBook, setSelectedBook] = useState("");
    
    const getBooks = async () => {
       let data = await showBooks().then((response)=>{console.log(response); setBooks(response.data)}).catch((error)=>console.log(error));
        console.log(books);
    //    setBooks(data);
    }

    useEffect(()=>{
        getBooks();
    },[])

    // useEffect((book)=>{
    //     listenToEachBook(book)
    // }, [view])

    const listenToBooks = () => {
        setView(false)
    }

    const listenToEachBook = (data) => {
        setSelectedBook(data);
    }

    // const booksData = books.map((book)=><Books book={book} listenToBooks={listenToBooks}/>)
  return (
    <div className='homeContainer'>
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
        {view ? <div className="secondSection">
            <div className="secondSection-one">
                <div className="secondSection-text">Books</div>
                <div className="dropdown">
                    <select>
                        <option>sort by relevance</option>
                        <option>sort by priceHighToLow</option>
                        <option>sort by priceLowToHigh</option>
                    </select>
                </div>
            </div>
            <div className='booksDisplay'  >
                {books.map((book)=><Books book={book} listenToBooks={listenToBooks} listenToEachBook={listenToEachBook}/>)}
            </div>
        </div> : <BookDetail selectedBook={selectedBook} />}
        
    </div>
  )
}

export default Home
