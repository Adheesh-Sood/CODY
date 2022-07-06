// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var network;

function net(online) {
  console.log(online)
}
window.addEventListener('load', () => {

  net(navigator.onLine)
  network = navigator.onLine;
  if (network == false) {
    netMode = "offline"
    console.log('ofline')
    document.getElementById('code').value = 'ofline'
  }
})


document.getElementById("html").onclick = function () {

  function writeUserData(code) {

    const db = getDatabase();
    const postListRef = ref(db, 'posts/html');
    const newPostRef = push(postListRef);
    set(newPostRef, {

      code: document.getElementById('code').value

    });
  }
  writeUserData(code)

}
//CSS.............................................................................................................................


document.getElementById("css").onclick = function () {

  function writeUserData(code) {

    const db = getDatabase();
    const postListRef = ref(db, 'posts/css');
    const newPostRef = push(postListRef);
    set(newPostRef, {

      code: document.getElementById('code').value

    });
  }
  writeUserData(code)

}
//JS.............................................................................................................................

document.getElementById("js").onclick = function () {

  function writeUserData(code) {

    const db = getDatabase();
    const postListRef = ref(db, 'posts/js');
    const newPostRef = push(postListRef);
    set(newPostRef, {

      code: document.getElementById('code').value

    });
  }
  writeUserData(code)

}

//PY.............................................................................................................................

document.getElementById("py").onclick = function () {

  function writeUserData(code) {

    const db = getDatabase();
    const postListRef = ref(db, 'posts/py');
    const newPostRef = push(postListRef);
    set(newPostRef, {

      code: document.getElementById('code').value

    });
  }
  writeUserData(code)

}






