import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, push} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"
import {getAuth,onAuthStateChanged , signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpnibzSE0ygWpQFbrio3xY85_xq7kotvs",
    authDomain: "uploadpleasework.firebaseapp.com",
    databaseURL: "https://uploadpleasework-default-rtdb.firebaseio.com/",
    projectId: "uploadpleasework",
    storageBucket: "uploadpleasework.appspot.com",
    messagingSenderId: "1019661590610",
    appId: "1:1019661590610:web:4f69fd16fe7bf6fcff3f8b"
};
document.getElementById('account').style.display="none"

const app =  initializeApp(firebaseConfig)
const dbRef= ref(getDatabase(app))
const auth=getAuth(app)
var uid;
document.getElementById('go').addEventListener('click' , ()=>{
    var email = document.getElementById('email').value;
    var pass=document.getElementById('password').value;
    signInWithEmailAndPassword(auth , email , pass)
        .then((userCredential) => {
            const user = userCredential.user;
            onAuthStateChanged(auth , (user)=>{
                if(user){
                    uid=user.uid;
                    console.log(uid)
                    document.getElementById('account').style.display=""
                    document.getElementById('username').textContent=uid;
                }
                else{
                    //signed Out
                }
            })
        })




})
document.getElementById('changeUser').addEventListener('click' , ()=>{
    const db=getDatabase()
    const post=ref(db , 'username/' + uid)
    const newPost= (post)
    set(newPost , {
        username:document.getElementById('userChange').value
    });


})