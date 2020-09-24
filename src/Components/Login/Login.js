import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';

const Login = () => {
    if (firebase.apps.length===0) {
        firebase.initializeApp(firebaseConfig);
     }
    var provider = new firebase.auth.GoogleAuthProvider();

    const googleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            
            var user = result.user;
            console.log(user)

          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            
          });
    }
    

    return (
        <div>
            <button onClick={googleSignIn}>Google</button>
            
        </div>
    );
};

export default Login;