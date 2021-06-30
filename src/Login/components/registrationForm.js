import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN_NAME } from './apiConstants'

import Carousel from '../../slideshow/controls';
import SearchBar from '../../SearchBar/components/searchBar';

function RegistrationForm(props) {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: ""
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
            // props.showError(null);

            const payload = {
                "firstName": state.firstName,
                "lastName": state.lastName,
                "username": state.username,
                "email": state.email,
                "password": state.password,

                const payload = {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    username: state.username,
                    email: state.email,
                    password: state.password,

                }
            const ApiBaseUrl = "http://localhost:7080"
            let config = {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                    }

                }
            axios.post(tempApiBaseUrl + '/users/register', payload, config)

            }
            axios.post(ApiBaseUrl + '/users/register', payload, config)

                .then(function (response) {
                    if (response.status === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                        redirectToHome();
                        // props.showError(null)
                    } else {
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

        if (state.password === state.confirmPassword) {
            sendDetailsToServer()

            if (state.password === state.confirmPassword) {
                const passwordRequirements = /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
                const isValid = passwordRequirements.test(state.password)
                sendDetailsToServer({ isValid })

            } else {
                const isNotValid = "Password is invalid"
                props.showError({ isNotValid });

            }
        }
        return (

            <div>
                <header className="App-header">
                    <Carousel />

                    <SearchBar />
                </header>


                <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
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
                                <input type="useranme"
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
                    <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                        {state.successMessage}
                    </div>
                    <div className="mt-2">
                        <span>Already have an account? </span>
                        <span className="loginText" onClick={() => redirectToLogin()}><button type="login">Login here</button></span>
                    </div>

                </div>
            </div>
        )
    }

    export default RegistrationForm;