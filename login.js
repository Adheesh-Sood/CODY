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



//  VARIABLES
var loged = "false";


//HIDING ERROR MESSAGES
document.getElementById("invalidEmail").style.display = "none"
document.getElementById("passwordInvalid").style.display = "none"
document.getElementById("accinuse").style.display = "none"
document.getElementById("loginError").style.display = "none"
    //HIDING BODY2



//GETTING username




////////////////////////////////



document.getElementById("Go").onclick = function() {
    const email = document.getElementById("email").value

    const password = document.getElementById("pass").value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            document.getElementById("email_").style.border = "1px solid red"
            document.getElementById("pass").style.border = "1px solid red"


            const user = userCredential.user;

            // ...
            console.log("created user___")
        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            const e = document.getElementById("e")
                // ..
            console.log(errorMessage)

            if (errorMessage == 'Firebase: Error (auth/invalid-email).') {
                accinuse.style.display = "none"
                passwordInvalid.style.display = "none"
                invalidEmail.style.display = ""

                e.innerHTML = "error"


            } else if (errorMessage == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                invalidEmail.style.display = "none"
                accinuse.style.display = "none"
                passwordInvalid.style.display = ""
                console.log("weak password (password must be 6 characters )")

            } else if (errorMessage == 'Firebase: Error (auth/email-already-in-use).') {
                invalidEmail.style.display = "none"
                passwordInvalid.style.display = "none"
                accinuse.style.display = ""
                console.log("account in use ")
                document.getElementById("e").style.border = "1px solid red"
            }
        });




}

document.getElementById("btn_").addEventListener("click", function() {
    const email1 = document.getElementById("email_").value
    const password1 = document.getElementById("pass_").value



    signInWithEmailAndPassword(auth, email1, password1)
        .then((userCredential) => {

            // Signed in 
            const user = userCredential.user;
            // ...
            loged = "true";
            console.log("code to move ahead " + "      loged in ")
                //MOVE USER TO ANOTHER PAGE 

            document.location.href = "#"
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    const uid = user.uid;
                    console.log(uid)
                    // ...
                } else {
                    // User is signed out
                    // ...
                }
            });



        })
        .catch((error) => {


            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            if (errorMessage == 'Firebase: Error (auth/invalid-email).') {
                console.log("invalid email or password")
                document.getElementById('loginError').style.display = ""
            }
        });
})

document.getElementById("google").onclick = function() {
        document.location.href = "google-auth.html"
    }
    //const email2
const email2 = document.getElementById("email2").value
document.getElementById("goR").onclick = function() {
    sendPasswordResetEmail(auth, email2)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage + errorCode)
                // ..
        });

}

//export function
var net;
//CHECK INTERNET 
function network(online) {
    console.log(online)
}

window.addEventListener("load", () => {
    network(navigator.onLine)
    net = navigator.onLine
    if (net == false) {
        document.getElementById("stat").style.backgroundColor = "red"
        document.getElementById("stat").value = "offline"





    } else {
        document.getElementById("stat").style.backgroundColor = "lime"

        document.getElementById("stat").value = "online"
    }

})