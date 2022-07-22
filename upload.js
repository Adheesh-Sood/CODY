import { initializeApp }
    from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, push , onValue} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"
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
//HIDING DIVS
document.getElementById("htmlDiv").style.display = 'none'
document.getElementById('pyDiv').style.display = 'none'
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbRef = ref(db);
const auth = getAuth(app);
var childData;

document.getElementById('test').addEventListener('click' , ()=>{
    const dbRef = ref(db, 'username/' + uid);

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
             childData = childSnapshot.val();
            console.log(childData)






        })})

})



var titleInp= document.getElementById('title').value
var  codeInp = document.getElementById('uploadCode').value
var uid;

//..........................................................


document.getElementById('go').addEventListener('click' , ()=>{
    var email=document.getElementById('email_').value
    var pass=document.getElementById('pass_').value
    signInWithEmailAndPassword(auth , email , pass)
        .then((userCredential) => {

            // Signed in
            const user = userCredential.user;
            onAuthStateChanged(auth , (user)=>{
                if(user){

                    uid=user.uid;
                    console.log(uid)

                    const dvb = ref(db, 'username/' + uid );

                    onValue(dvb, (snapshot) => {
                        snapshot.forEach((childSnapshot) => {
                            const childKey = childSnapshot.key;
                            childData = childSnapshot.val();
                            document.getElementById('test').onclick=()=>{
                                console.log(childData)
                            }



                            })
                    })}



                else{
                    //signed Out
                }
            })

        })


})
//....................................


//...................................................................
document.getElementById("html-btn").onclick = function () {

    document.getElementById('pyDiv').style.display = "none"
    document.getElementById('renDiv').style.display = '';
    document.getElementById("lang").value = 'HTML'
    document.getElementById('htmlDiv').style.display = ''
    document.getElementById('btnTag').onclick = function () {
        if(titleInp.length===0){
            console.log('a')
        }else{
            console.log(titleInp.length)
        }



                const db = getDatabase();
                const postListRef = ref(db, 'posts/html/tags');
                const newPostRef = push(postListRef);
                set(newPostRef, {
                    username:childData,

                    title:document.getElementById('title').value,

                    code: document.getElementById('uploadCode').value

                });




    }
    document.getElementById('btnAtt').onclick = function () {
        const db = getDatabase();
        const postListRef = ref(db, 'posts/html/att');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            username:childData,

            title:document.getElementById('title').value,


            code: document.getElementById('uploadCode').value
        });

    }
    document.getElementById('inputs').onclick = function () {
        const db = getDatabase();
        const postListRef = ref(db, 'posts/html/inputs');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            username:childData,

            title:document.getElementById('title').value,


            code: document.getElementById('uploadCode').value
        });

    }
    document.getElementById('ui').onclick = function () {
        const db = getDatabase();
        const postListRef = ref(db, 'posts/html/ui');
        const newPostRef = push(postListRef);
        set(newPostRef, {
            username:childData,

            title:document.getElementById('title').value,


            code: document.getElementById('uploadCode').value
        });

    }


}


document.getElementById('run').onclick = function () {
    var code = document.getElementById('uploadCode').value;
    document.getElementById('runRes').innerHTML = code
}
document.getElementById('py-btn').onclick = function () {
    document.getElementById('pyDiv').style.display = ""
}

document.getElementById('print').onclick = function () {


    const postListRef = ref(db, 'posts/py/print');
    const newPostRef = push(postListRef);

    set(newPostRef, {
        username:childData,



        title:document.getElementById('title').value,


        code: document.getElementById('uploadCode').value
    });




}
document.getElementById('var').onclick = function () {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/py/var');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        username:childData,

        title:document.getElementById('title').value,


        code: document.getElementById('uploadCode').value
    });

}
document.getElementById('data').onclick = function () {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/py/data');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        username:childData,

        title:document.getElementById('title').value,


        code: document.getElementById('uploadCode').value
    });
}
document.getElementById("loops").onclick = function () {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/py/if-else');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        username:childData,

        title:document.getElementById('title').value,


        code: document.getElementById('uploadCode').value
    });
}
document.getElementById('loops2').onclick = function () {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/py/while-for');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        username:childData,

        title:document.getElementById('title').value,


        code: document.getElementById('uploadCode').value
    });
}
document.getElementById("math").onclick = function () {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/py/math');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        username:childData,

        title:document.getElementById('title').value,


        code: document.getElementById('uploadCode').value
    });
}

