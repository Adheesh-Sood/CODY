import { initializeApp }
from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, push, child, get, onValue } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const db = getDatabase(app);
const dbRef = ref(db);
var input = document.getElementById("search");


var lang = "none";
//..................

//................................................................
document.getElementById("search").display = ""


//................................................................




        //HTML 
        var clickHtml = false
        document.getElementById("tagAtt").addEventListener('click', function() {



            const dbRef = ref(db, 'posts/html/att');

            onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    const codeDb = childSnapshot.val()

                    ;
                    for (var i in childData) {
                        var newText=document.createElement('h1')
                        var user=document.createElement('h2')
                        var newForm = document.createElement("textArea", )
                        var newDiv = document.createElement("div")
                        var hr=document.createElement('hr')
                        newForm.id = "form"
                        user.id="username"
                        newText.id="headingText"
                        newDiv.id="divCode"
                        newForm.readOnly = true
                        document.body.appendChild(newDiv)
                        newForm.value = codeDb.code
                        newText.textContent=codeDb.title
                        user.textContent=codeDb.username;


                    }
                    newDiv.appendChild(newText)
                    newDiv.appendChild(hr)
                    newDiv.appendChild(newForm)
                    newDiv.appendChild(user)
                    newDiv.appendChild(hr)


                    //................................................................
                    document.getElementById('tagTags').addEventListener('click', () => {
                        newDiv.style.display = 'none'
                    })
                    document.getElementById("tagInp").addEventListener('click', () => {
                        newDiv.style.display = 'none'
                    })
                    document.getElementById('tagUi').addEventListener('click', () => {
                        newDiv.style.display = 'none'
                    })
                    document.getElementById('tagAtt').addEventListener('click', function() {




                    })
                    input.addEventListener("keypress", function(event) {
                            document.getElementById('tags').style.display="none"

                            newDiv.style.display = "none"

                    })






                });
            }, {
                onlyOnce: true
            });


})

//END ATT
//START TAGS
//................................................................
var clickHtml = 0;
document.getElementById("tagTags").addEventListener('click', function() {
        clickHtml + 1;

        const dbRef = ref(db, 'posts/html/tags');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

            ;
            for (var i in childData) {
                var newText=document.createElement('h1')
                var user=document.createElement('h2')
                var newForm = document.createElement("textArea", )
                var newDiv = document.createElement("div")
                user.id="username"
                newForm.id = "form"
                newText.id="headingText"
                newDiv.id="divCode"
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = codeDb.code
                newText.textContent=codeDb.title
                user.textContent=codeDb.username;


            }
            newDiv.appendChild(newText)
            newDiv.appendChild(newForm)
            newDiv.appendChild(user)

                document.getElementById('tagAtt').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })

                document.getElementById("tagInp").addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                document.getElementById('tagUi').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                input.addEventListener("keypress", function(event) {
                    document.getElementById('tags').style.display="none"




                    newDiv.style.display = "none"

                })


            });
        }, {
            onlyOnce: true
        })
    })
    //END TAG
    //START INPUT
    //................................................................
var clickHtml = 0;
document.getElementById("tagInp").addEventListener('click', function() {
        clickHtml + 1;

        const dbRef = ref(db, 'posts/html/inputs');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()
            const username=(childSnapshot.val()).username

            ;
            for (var i in childData) {
                var newText=document.createElement('h1')
                var user=document.createElement('h2')
                var newForm = document.createElement("textArea", )
                var newDiv = document.createElement("div")
                newForm.id = "form"
                user.id="username"
                newText.id="headingText"
                newDiv.id="divCode"
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = codeDb.code
                newText.textContent=codeDb.title
                user.textContent=username



            }
            newDiv.appendChild(newText)
            newDiv.appendChild(newForm)
            newDiv.appendChild(user)
                document.getElementById('tagAtt').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                document.getElementById("tagTags").addEventListener('click', () => {
                    newDiv.style.display = "none"
                })
                document.getElementById('tagUi').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                input.addEventListener("keypress", function(event) {

                        newDiv.style.display = "none"
                        document.getElementById('tags').style.display="none"


                })


            });
        }, {
            onlyOnce: true
        })
    })
    //END INPUT
    //START UI
    ////////////////////////////////
var clickHtml = 0;
document.getElementById("tagUi").addEventListener('click', function() {
        clickHtml + 1;

        const dbRef = ref(db, 'posts/html/ui');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

            ;
            for (var i in childData) {
                var newText=document.createElement('h1')
                var user=document.createElement('h2')
                var newForm = document.createElement("textArea", )
                var newDiv = document.createElement("div")
                newForm.id = "form"
                newText.id="headingText"
                user.id="username"
                newDiv.id="divCode"
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = codeDb.code
                newText.textContent=codeDb.title
                user.textContent=codeDb.username;


            }
            newDiv.appendChild(newText)
            newDiv.appendChild(newForm)
            newDiv.appendChild(user)
                document.getElementById('tagAtt').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                document.getElementById("tagTags").addEventListener('click', () => {
                    newDiv.style.display = "none"
                })
                document.getElementById('tagInp').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                input.addEventListener("keypress", function(event) {

                        newDiv.style.display = "none"

                        document.getElementById('tags').style.display="none"


                })


            });
        }, {
            onlyOnce: true
        })
    })
    //HTML END
    //PY START
document.getElementById("print").onclick = function() {
        const dbRef = ref(db, 'posts/py/print');
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

            ;
            for (var i in childData) {
                var newText=document.createElement('h1')
                var user=document.createElement('h2')
                var newForm = document.createElement("textArea", )
                var newDiv = document.createElement("div")
                newForm.id = "form"
                user.id="username"
                newText.id="headingText"
                newDiv.id="divCode"
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = codeDb.code
                newText.textContent=codeDb.title
                user.textContent=codeDb.username;


            }
            newDiv.appendChild(newText)
            newDiv.appendChild(newForm)
            newDiv.appendChild(user)
                document.getElementById('var').addEventListener('click', () => {
                    newDiv.style.display = 'none'
                })
                var inp = document.getElementById('search')
                input.addEventListener("keypress", function(event) {
                    document.getElementById('tags').style.display="none"


                    newDiv.style.display = "none"

                })




            })
        })
    }
    //PRINT END
    //Start VAR
document.getElementById("var").onclick = function() {
    const dbRef = ref(db, 'posts/py/var');
    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

            ;
            for (var i in childData) {
                var newText=document.createElement('h1')
                var user=document.createElement('h2')
                var newForm = document.createElement("textArea", )
                var newDiv = document.createElement("div")
                newForm.id = "form"
                newText.id="headingText"
                newDiv.id="divCode"
                user.id="username"
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = codeDb.code
                newText.textContent=codeDb.title
                user.textContent=codeDb.username;


            }
            newDiv.appendChild(newText)
            newDiv.appendChild(newForm)
            newDiv.appendChild(user)
            document.getElementById('print').addEventListener('click', () => {
                newDiv.style.display = 'none'
            })
            input.addEventListener("keypress", function(event) {
                document.getElementById('tags').style.display="none"


                newDiv.style.display = "none"

            })





        })
    })
}



//VIEW DATA ENDS HERE\
document.getElementById('test').addEventListener('click' , ()=>{
    const dbRef = ref(db, 'username/' + uid);

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            console.log(childData)






        })})

})

