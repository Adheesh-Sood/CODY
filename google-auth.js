 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
 import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyBO71lIVrx2GXD_7yVSE29qeVcyueE4GYw",
     authDomain: "signin-popup.firebaseapp.com",
     projectId: "signin-popup",
     storageBucket: "signin-popup.appspot.com",
     messagingSenderId: "983442075037",
     appId: "1:983442075037:web:0e65f7cab0e5b5c4a29374",
     measurementId: "G-YNW4MWVN5S"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 //Not needed ________________________
 const analytics = getAnalytics(app);
 //_____________________________________
 const provider = new GoogleAuthProvider(app);
 const auth = getAuth(app);


 document.getElementById('login').addEventListener('click', function() {
     signInWithPopup(auth, provider)
         .then((result) => {
             document.location.href = "index.html"



             console.log('aaa')
                 // This gives you a Google Access Token. You can use it to access the Google API.
             const credential = GoogleAuthProvider.credentialFromResult(result);
             const token = credential.accessToken;
             // The signed-in user info.
             const user = result.user;
             console.log(user)
                 // ...
         }).catch((error) => {
             // Handle Errors here.
             const errorCode = error.code;
             const errorMessage = error.message;
             // The email of the user's account used.
             const email = error.customData.email;
             // The AuthCredential type that was used.
             const credential = GoogleAuthProvider.credentialFromError(error);
             console.log(errorMessage)

             // ...
         });

 })





 //to solve this error there is one main to dp\o






 //onclick custom 
 document.getElementById("custom").addEventListener('click', function() {
     document.location.href = 'custom_sign-in.html'
 })