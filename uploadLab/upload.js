import { initializeApp }
from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"
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
//HIDING DIVS
document.getElementById("htmlDiv").style.display = 'none'
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
//...................................................................
document.getElementById("html-btn").onclick = function() {
    document.getElementById('htmlDiv').style.display = ''
    document.getElementById('btnTag').onclick = function() {
        const db = getDatabase();
        const postListRef = ref(db, 'posts/html/tags');
        const newPostRef = push(postListRef);
        set(newPostRef, {

            code: document.getElementById('uploadCode').value

        });
    }
}