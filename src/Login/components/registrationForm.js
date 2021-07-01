import React, {useState} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN_NAME} from './apiConstants'
import Carousel from '../../slideshow/controls';
import SearchBar from '../../SearchBar/components/searchBar';

function RegistrationForm(props) {
    const [state , setState] = useState({
        firstName : "",
        lastName : "",
        username : "",
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            // props.showError(null);
            const payload={
                firstName:state.firstName,
                lastName:state.lastName,
                username:state.username,
                email:state.email,
                password:state.password,
            }
            const apiBaseUrl = "http://localhost:7080"
            let config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
              }
            axios.post(apiBaseUrl+'/users/register', payload, config)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        redirectToHome();
                        // props.showError(null)
                    } else{
                        // props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        // props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        // props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password.match(state.confirmPassword)) {
            const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            const passwordIsValid = passwordRequirements.test(state.password)
            const emailRequirements = /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            const emailIsValid = emailRequirements.test(state.email)
            sendDetailsToServer({passwordIsValid, emailIsValid})    
        } else {
            const passwordIsNotValid = "Password is invalid"
            const emailIsNotValid = "Email is invalid"
            props.showError({passwordIsNotValid, emailIsNotValid});
            
        }
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">

        
            <SearchBar />
            <Carousel />

        

            <form>
                <div className="form-group text-left">
                    <label htmlFor="firstName">First Name</label>
                    <input type ="firstName"
                    className="form-control"
                    id="firstName"
                    placeholder="First Name"
                    value={state.firstName}
                    onChange={handleChange}
                    />

                </div>
                <div className="form-group text-left">
                    <label htmlFor="lastName">Last Name</label>
                    <input type ="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Last Name"
                    value={state.lastName}
                    onChange={handleChange}
                    />

                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <div className="form-group text-left">
                    <label htmlFor="username">Username</label>
                    <input type="username"
                    className="form-control"
                    id="username"
                    placeholder="Enter username"
                    value={state.username}
                    onChange={handleChange} />
                </div>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}><button type="login">Login here</button></span> 
            </div>
            
        </div>
    )
}

export default RegistrationForm;