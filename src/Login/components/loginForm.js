import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from './apiConstants';

function LoginForm(props) {
    const [state, setState] = useState({
        email : "",
        password : "", 
        successMessage: null
    })
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
            "email":state.email,
            "password":state.password
        }
        axios.post(API_BASE_URL+'/user/login', payload)
        .then(function (response){
            if(response.status === 200){
                setState(prevState => ({
                    ...prevState,
                    'successMessage' : 'Login successful. Redirecting to home page..'
                }))
                localStorage.setItem(ACCESS_TOKEN_NAME, response.data.token);
                redirectToHome();
                props.showError(null)
            }
            else if(response.code === 204){
                props.showError("Username and password do not match");
            }
            else{
                props.showError("Username does not exist");
            }
        })
        .catch(function(error){
            console.log(error);
        });
    }
    const redirectToHome = () => {
        // props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToRegister = () => {
        props.history.push('/register');
        // props.updateTitle('Register');
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail">Email address</label>
                    <input type="email" className="form-control" id="email"
                    aria-describedby="emailHelp" placeholder="Enter Email" value={state.email}
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
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
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