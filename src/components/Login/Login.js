import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignInClick = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                console.log(result.user.photoURL);
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { UserName: displayName, email: email, userImage: photoURL };
                setLoggedInUser(signedInUser);
                sessionStorage.setItem('token', signedInUser.email);
                history.replace(from);
                // console.log(signedInUser)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    const handleLogOut = () => {
        setLoggedInUser({});
    }

    return (
        <div style={{textAlign: 'center', marginTop: '200px'}} >
           {
                loggedInUser.email ?
                <button onClick={handleLogOut} className="btn btn-primary">Logout</button> :
                <button onClick={handleGoogleSignInClick} className="btn btn-primary">Login with Google</button>
           }
        </div>
    );
};

export default Login;