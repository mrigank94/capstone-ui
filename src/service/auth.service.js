import axios from "axios";
import jwt_decode from "jwt-decode";

const doAuth = async (email, password) => {
    let response = await axios.post('http://localhost:3001/api/auth', {
                email,
                password,
     });

     console.log(response);
     localStorage.setItem('token', response.headers['x-auth-header']);
     return response;
}

const isLoggedIn = () => {
    const data = localStorage.getItem('token');
    if(!data) {
        return false;
    }
    return data;
}

const isAdmin = () => {
    const data = jwt_decode(localStorage.getItem('token'));
    return data.isAdmin;
}

const doLogout = () => {
    localStorage.removeItem('token');
    window.location = '/';
}

export default {
    doAuth,
    isLoggedIn,
    isAdmin,
    doLogout
}