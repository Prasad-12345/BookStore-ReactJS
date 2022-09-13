import axios from "axios";

const headerConfig = {
    headers : {
        // Accept : application/json,
        Authorization : 'Bearer' + " " + localStorage.getItem('token')
    }
}

export const showBooks = async () => {
    let response = await axios.get("http://127.0.0.1:8000/api/showBooks", headerConfig);
    return response;
}

export const getBooksFromCart = () => {
    let response = axios.get("http://127.0.0.1:8000/api/getAllBooks", headerConfig)
    return response;
}

export const addBookToCart = (cartObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addBookTocart", cartObj, headerConfig)
    return response;
}

export const incrementQtyInCart = (cartQtyObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/incrementQuantityInCart", cartQtyObj, headerConfig)
    return response;
}

export const decrementQtyInCart = (cartQtyObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/decrementQuantityInCart", cartQtyObj, headerConfig)
    return response;
}

export const addBooksToWishlist = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addBookToWishlist", obj, headerConfig)
    return response;
}

export const getBooksFromWishlist = () => {
    let response = axios.get("http://127.0.0.1:8000/api/getAllBooksFromWishlists", headerConfig)
    return response;
}

export const deleteBookFromWishlist = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/deleteBookFromWishlists", obj, headerConfig)
    return response;
}

export const addAddress = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/addAddress", obj, headerConfig)
    return response;
}

export const addOrder = (obj) => {
    let response = axios.post("http://127.0.0.1:8000/api/placeOrder", obj, headerConfig)
    return response;
}

export const deleteFromCart = (obj) => {
    let response = axios.post('http://127.0.0.1:8000/api/deleteBookFromCart', obj, headerConfig)
    return response;
}

export const search = (obj) => {
    console.log(obj);
    let response = axios.get('http://127.0.0.1:8000/api/searchBook', obj, headerConfig)
    return response;
}