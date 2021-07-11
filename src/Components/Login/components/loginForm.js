import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN_NAME} from './apiConstants';
import Carousel from '../../Slideshow/Controls';

function LoginForm(props) {
    const [user, setUser] = useState({})
    const [loggedInUser, foundUser] = useState()
    const [state, setState] = useState({
        username : "",
        password : "", 
        successMessage: "",
        errorMessage: ""
    })

    const apiBaseUrl = "http://localhost:7080"
    let config = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
      }

    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            username:state.username,
            password:state.password
        }
        axios.post(apiBaseUrl+"/users/login", payload, config)
        .then(function (response){
            console.log(response)
            if(response.data === "SUCCESS"){
                setState(prevState => ({
                    ...prevState,
                    successMessage : "Login successful. Redirecting to home page.."
                }))
                localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                redirectToMyAccount();
                
            }
            else{
                state.errorMessage = "Username or password is invalid"
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }


    useEffect (() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser)
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
    }, [])

    useEffect (() => {
        localStorage.setItem("user", JSON.stringify(user));
    })



    const redirectToMyAccount = () => {
        
        props.history.push("/myaccount");
    }
    const redirectToRegister = () => {
        props.history.push("/register");

        
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">

                
                <Carousel />


            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputUsername">Username</label>
                    <input type="username" className="form-control" id="username"
                    aria-describedby="usernameHelp" placeholder="Enter Username" value={state.username}
                    onChange={handleChange} />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword">Password</label>
                    <input type="password" className="form-control" id="password"
                    placeholder="Password" value={state.password} onChange={handleChange} />
                </div>
                <div className="form-check">
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClick}>Submit</button>
            </form>
            <div className="alert alert-success-or-error mt-2" style={{display: state.successMessage || state.errorMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage || state.errorMessage}
            </div>
            <div className="registerMessage">
                <span>Don't have an account?</span>
                <div>
                    <span className="loginText" onClick={() => redirectToRegister()}><button type="register">Register</button></span>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;