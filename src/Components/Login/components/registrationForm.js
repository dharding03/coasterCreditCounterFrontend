import React, { useState } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN_NAME } from './apiConstants'
import Carousel from '../../Slideshow/Controls';


function RegistrationForm(props) {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: "",
        errorMessage: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {



            const payload = {
                firstName: state.firstName,
                lastName: state.lastName,
                username: state.username,
                email: state.email,
                password: state.password,



            }
            const apiBaseUrl = "http://localhost:7080"
            let config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
            axios.post(apiBaseUrl + "/users/register", payload, config)
                .then(function (response) {
                    if (response.data === "SUCCESS") {
                        setState(prevState => ({
                            ...prevState,
                            successMessage: "Registration successful. Redirecting to home page.."
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                        redirectToHome();
                    } else {
                       state.errorMessage = "Something went wrong. Please try again"
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            state.errorMessage = "Please enter a valid email and password"
        }

    }
    const redirectToHome = () => {
        props.history.push("/home");
    }
    const redirectToLogin = () => {
        props.history.push("/login");
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password.match(state.confirmPassword)) {
            const passwordRequirements = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            const passwordIsValid = passwordRequirements.test(state.password)
            const emailRequirements = /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            const emailIsValid = emailRequirements.test(state.email)
            if (emailIsValid && passwordIsValid) {
                sendDetailsToServer();
            }
            else {
                state.errorMessage = "Please enter a valid email and password"
                
            }
        } else {
            state.errorMessage = "Email or password is invaild"

        }
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">


         
            <Carousel />

            <form>
                <div className="form-group text-left">
                    <label htmlFor="firstName">First Name</label>
                    <input type="firstName"
                        className="form-control"
                        id="firstName"
                        placeholder="First Name"
                        value={state.firstName}
                        onChange={handleChange}
                    />

                </div>
                <div className="form-group text-left">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="lastName"
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
            <div className="alert alert-success mt-2" style={{ display: state.successMessage || state.errorMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage || state.errorMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}><button type="login">Login here</button></span>
            </div>

        </div>
    )
}

export default RegistrationForm;