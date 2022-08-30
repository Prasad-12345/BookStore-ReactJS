import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css';
import { login } from '../../services/userService';

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Login() {
    const [loginObj, setLoginObj] = useState({email:'', password:''})

    const[loginRegexObj, setloginRegexObj] = useState({
        emailBorder:false, emailHelper:'',
        passwordBorder:false, passwordHelper:''
    })

    const takeEmail = (event) => {
        setLoginObj((prevState)=>({...prevState, email:event.target.value}))
    }

    const takePassword = (event) => {
        setLoginObj((prevState)=>({...prevState, password:event.target.value}))
    }

    const submit = () => {
        const emailTest = emailRegex.test(loginObj.email);
        const passwordTest = passwordRegex.test(loginObj.password);

        if(emailTest === true){
            setloginRegexObj((prevState)=>({...prevState, emailBorder:false, emailHelper:''}))
        }
        else if(emailTest === false){
            setloginRegexObj((prevState)=>({...prevState, emailBorder:true, emailHelper:'Enter email'}))
        }

        if(passwordTest === true){
            setloginRegexObj((prevState)=>({...prevState, passwordBorder:false, passwordHelper:''}))
        }
        else if(passwordTest === false){
            setloginRegexObj((prevState)=>({...prevState, passwordBorder:true, passwordHelper:'Enter email'}))
        }

        if(emailTest === true && passwordTest === true){
            login(loginObj).then((response)=>{console.log(response); localStorage.setItem('token', response.data.token)}).catch((error)=>console.log(error))
        }
    }
  return (
    <div className="loginContainer">
        <div className='emailSignIn'>
            <TextField onChange={takeEmail} error={loginRegexObj.emailBorder} helperText={loginRegexObj.emailHelper} id="outlined-basic" className='email-SignIn' label="email" variant="outlined" size='small'/>
        </div>
        <div className='passwordSignIn'>
            <TextField onChange={takePassword} error={loginRegexObj.passwordBorder} helperText={loginRegexObj.passwordHelper} id="outlined-basic" className='password-SignIn' label="password" variant="outlined" size='small'/>
        </div>
        <div className='loginBtn'>
            <input onClick={submit} type="button" value="login" className='login-btn' />
        </div>
        <div className="or">
            --------  OR  ----------
        </div>
        <div className="extraBtn">
            <Button variant="contained" className='facebook'>Facebook</Button>
            <Button variant="outlined" className='google'>Google</Button>
        </div>
    </div>

  )
}

export default Login
