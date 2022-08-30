import axios from "axios";

export const signUp = (signupObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/register", signupObj);
    return response;
}

export const login = (loginObj) => {
    let response = axios.post("http://127.0.0.1:8000/api/login", loginObj);
    return response;
}