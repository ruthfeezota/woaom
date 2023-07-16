import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory} from "react-router-dom";
import { auth } from "../firebase/firebase";
import Footer from './Footer';
import GoogleLogin from './LoginGoogle';




function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const login = (event) => {
        event.preventDefault(); //Stop the refresh!
        //login logic
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                history.push("/SearchPage");
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault(); //Stop the refresh!
        //do the register logic

        auth
            .createUserWithEmailAndPassword(email, password)
            .then (auth => {
                //created a user and logged in redirect to homepage...
                history.push("/SearchPage");
            })
            .catch((e) => alert(e.message));
    };

   
    return (
        <div className="login">

            <Link to="/">
                <img
                    className="login__logo"
                    src='https://i.ibb.co/P655TxT/Woaom-Logo-2.png'
                    alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                    <GoogleLogin/>
                </form>

                <p>
                By signing-in you agree to the Woaom Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <GoogleLogin/>
                
                <button onClick={register} className="login__registerButton">Create your Woaom Account</button>
            </div>
            <div className='footer'>
            <Footer />
            </div>
        </div>


    );
}

export default Login;