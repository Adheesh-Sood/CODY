 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyAzMjbfCRxvsa9sO5V5AOpun39P3Bn5BQQ",
     authDomain: "cody-cc9a5.firebaseapp.com",
     projectId: "cody-cc9a5",
     storageBucket: "cody-cc9a5.appspot.com",
     messagingSenderId: "1064418253596",
     appId: "1:1064418253596:web:732e3ee1a015546439f8d9"
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

             document.location.href = "index.html"


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

 //export function