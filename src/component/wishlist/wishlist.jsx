import React, { useEffect } from "react";
import Header from "../header/header";
import "./wishlist.css";
import { getBooksFromWishlist } from "../../services/dataService";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import { deleteBookFromWishlist } from "../../services/dataService";
import image from "../images/Image 11.png";

function Wishlist() {
  const [wishlistBook, setWishlistBook] = useState([]);
  const [wishlistObj, setWishlistObj] = useState({ id: "" });

  const getAllBooksFromWishlist = () => {
    getBooksFromWishlist()
      .then((response) => {
        console.log(response);
        const filterArray = response.data.filter((book) => {
          setWishlistObj((prevState) => ({ ...prevState, id: book.id }));
        });
        setWishlistBook(response.data);
      })
      .catch((error) => console.log(error));
  };

  const deleteBooksFromWishlist = (obj) => {
    deleteBookFromWishlist(obj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBooksFromWishlist();
  }, []);

  return (
    <div className="wishlistContainer">
      <div className="wishlist-header">
        <Header />
      </div>
      <div className="firstSection-wishlist">
        <div className="firstSection-wishlist-child">
            Home / <span className="MyWishlist-Bold">My Wishlist</span></div>
        </div>
       
      <div className="secondSection-wishlist">
        <div className="secondSection-myWishlist">My Wishlist</div>

        {wishlistBook.map((book) => (
          <div className="secondSection-displayMyWishlist">
            <div className="wishlistBookData">
              <div className="wishListBookData-Image">
                <img src={image} alt="" className="wishlist-bookImage" />
              </div>
              <div className="wishlistBookData-text">
                <div className="wishlistBookData-text1">
                  <div className="wishlistBook-title">{book.name}</div>
                  <div className="wishlistBook-author">by {book.author}</div>
                  <div className="wishlistBook-price">Rs.{book.price}</div>
                </div>
              </div>
            </div>
            <div className="wishlistBookDeleteIcon">
              <DeleteOutlineIcon
                onClick={() => {
                  deleteBooksFromWishlist(wishlistObj);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
