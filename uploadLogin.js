// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
//hiding reset password div


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpnibzSE0ygWpQFbrio3xY85_xq7kotvs",
    authDomain: "uploadpleasework.firebaseapp.com",
    databaseURL: "https://uploadpleasework-default-rtdb.firebaseio.com",
    projectId: "uploadpleasework",
    storageBucket: "uploadpleasework.appspot.com",
    messagingSenderId: "1019661590610",
    appId: "1:1019661590610:web:4f69fd16fe7bf6fcff3f8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById('go').addEventListener('click' , ()=>{
    var email=document.getElementById('email_').value
    var pass=document.getElementById('pass_').value
    signInWithEmailAndPassword(auth , email , pass)
        .then((userCredential) => {

            // Signed in
            const user = userCredential.user;
            onAuthStateChanged(auth , (user)=>{
                if(user){
                    const uid=user.uid;
                    console.log(uid)
                }
                else{
                    //signed Out
                }
            })
        })


})
