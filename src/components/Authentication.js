import React, { useEffect, useState } from "react";
import './Authentication.css';
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";


const Authentication = () => {
        const [authenticatedUser, setauthenicatedUser] = useState("");
        useEffect(() => {
            const listenAuth = onAuthStateChanged(auth, (user) => {
                if (user){
                    setauthenicatedUser(user)
                }else{
                    setauthenicatedUser(null)
                }
            })
            return () =>{
                listenAuth();
            }
        },[])
        const userSignOut = () => {
            signOut(auth).then(() =>{
                console.log("user signed out")
            }).catch(error => console.log("error"))
        }

    return (
        <>
        { authenticatedUser === null ?
        <>
            <Link to="/Login">
            <button className="primary-button">Login</button>
            </Link>
        </>:
            <>
            <Link to="/" >
               <button className="primary-button" onClick={userSignOut}>Sign Out</button>
            </Link>
        </>
}
</>
    );
}

export default Authentication;