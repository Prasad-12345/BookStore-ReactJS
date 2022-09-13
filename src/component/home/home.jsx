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
import Header from '../header/header';
import Pagination from '@mui/material/Pagination';
import { search } from '../../services/dataService';
import { connect, useDispatch } from 'react-redux';


function Home() {
    const[books, setBooks] = useState([]);
    const[view, setView] = useState(true);
    const[selectedBook, setSelectedBook] = useState("");
    const[page, setPage] = useState(1)
    const[booksPerPage, setBooksPerPage] = useState(3);
    const[searchObj, setSearchObj] = useState({value:''})
    
    
    const getBooks = async () => {
       let data = await showBooks().then((response)=>{console.log(response); 
        // if(searchObj.value == null){
            // let filterArray = response.data.filter((book)=>{
            //     if(book.name == searchObj.value){
            //         return book
            //     }

            //     if(book.id == searchObj.value){
            //         return book
            //     }
            // })
        // }
       
        setBooks(response.data)}).catch((error)=>console.log(error));
        console.log(books);
    //    setBooks(data);
    }

    const searchBook = (obj) => {
        search(obj).then((response)=>{console.log(response); setBooks(response.data)}).catch((error)=>console.log(error))
    }

    useEffect(()=>{
        getBooks();
    },[])

    useEffect(()=>{
        searchBook(searchObj)
    },[searchObj])

    const listenToBooks = () => {
        setView(false)
    }

    const listenToEachBook = (data) => {
        setSelectedBook(data);
    }

    const listenToPage = (e,v) => {
        // console.log(v);
        setPage(v);
    }

    const listenToHeaders = (data) => {
        setSearchObj((prevState)=>({...prevState, value:data}))
    }

    const indexOfLastBook = (page * booksPerPage);
    const indexOffirstBook = (indexOfLastBook - booksPerPage);
    const currentBook = books.slice(indexOffirstBook, indexOfLastBook)
    // const booksData = books.map((book)=><Books book={book} listenToBooks={listenToBooks}/>)
  return (
    <div className='homeContainer'>
        <Header searchBook={searchBook} listenToHeaders={listenToHeaders}/>
        {/* <div className="homeHeader">
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
        </div> */}
        {view ? <div className="secondSection">
            <div className="secondSection-one">
                <div className="secondSection-text">Books</div>
                <div className="dropdown">
                    <select className='drop1'>
                        <option>sort by relevance</option>
                        <option>sort by priceHighToLow</option>
                        <option>sort by priceLowToHigh</option>
                    </select>
                </div>
            </div>
            <div className='booksDisplay'  >
                {books.filter((book)=>book.name.includes(searchObj.value)).map((book)=><Books book={book} listenToBooks={listenToBooks} listenToEachBook={listenToEachBook}/>)}
            </div>
        </div> : <BookDetail selectedBook={selectedBook} />}
        {/* <div className="pagination">
            <Pagination onChange={listenToPage} count={10} page={page} />
        </div> */}
    </div>
  )
}

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {
//         title: state.drawerReducer.title,
//     };
// };
// export default connect(mapStateToProps)(Header);

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         searchObj : state.searchReducer.searchObj
//     }
// }
// export default connect(mapStateToProps)(Home)
export default Home;
