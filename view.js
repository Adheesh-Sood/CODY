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


var lang = "none";
//..................
var input = document.getElementById("search");
//................................................................
document.getElementById("search").display = ""


//................................................................
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        var search = document.getElementById("searchLang").value;
        if (search == "python") {

            document.getElementById("htmlTags").style.display="none"
            document.getElementById("pyTags").style.display=""
            document.getElementById("error").style.display = "none"

            lang = "python";

        } else if (search == "Python") {
            document.getElementById("htmlTags").style.display="none"

            document.getElementById("pyTags").style.display=""

            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";


            document.getElementById("py").style.display = ""

        } else if (search == "HTML") {
            document.getElementById("pyTags").style.display="none"

            document.getElementById('htmlTags').style.display = ''
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.position = "stick"

            lang = "python";

            lang = "html";
            window.alert("Html")

        } else if (search == "html") {
            document.getElementById("pyTags").style.display="none"

            document.getElementById('htmlTags').style.display = ""

            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = ""

            lang = "python";



            lang = "html";
            window.alert("HTML")
        } else if (search == "CSS") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";

            lang = "css";
            Window.alert("CSS")
        } else if (search == "css") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";



            lang = "css";
            Window.alert("CSS")
        } else if (search == "javascript") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"


            lang = "js"
            window.alert("Javascript")
        } else if (search == "Javascript") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"




            lang = "js"
            window.alert("Javascript")
        } else if (search == "C++") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";



            lang = "c++";
            window.alert("C++")
        } else if (search == "C#") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";




            lang = "c#";
            window.alert("C#")
        } else {
            document.getElementById("search").display = "none"
            lang = "none";
            window.alert("No language found as" + search)
            document.getElementById("error").innerHTML = "No language found as" + search
        }







        //HTML 
        var clickHtml = 0;
        document.getElementById("tagAtt").addEventListener('click', function () {
            clickHtml + 1;


            const dbRef = ref(db, 'posts/html/att');

            onValue(dbRef, (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();
                    const codeDb = childSnapshot.val()

                        ;
                    for (var i in childData) {
                        var newForm = document.createElement("textArea", "br")
                        var newDiv = document.createElement("div")
                        newForm.id = "form" + i
                        newForm.readOnly = true
                        document.body.appendChild(newDiv)
                        newForm.value = (codeDb[i])






                    }
                    newDiv.appendChild(newForm)

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






                });
            }, {
                onlyOnce: true
            });
        })
    }
})

//END ATT
//START TAGS
//................................................................
var clickHtml = 0;
document.getElementById("tagTags").addEventListener('click', function () {
    clickHtml + 1;

    const dbRef = ref(db, 'posts/html/tags');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

                ;
            for (var i in childData) {
                var newForm = document.createElement("textArea", "br");
                var newDiv = document.createElement("div")
                newForm.id = "form" + i
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = (codeDb[i])

            }
            newDiv.appendChild(newForm)
            document.getElementById('tagAtt').addEventListener('click', () => {
                newDiv.style.display = 'none'
            })

            document.getElementById("tagInp").addEventListener('click', () => {
                newDiv.style.display = 'none'
            })
            document.getElementById('tagUi').addEventListener('click', () => {
                newDiv.style.display = 'none'
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
document.getElementById("tagInp").addEventListener('click', function () {
    clickHtml + 1;

    const dbRef = ref(db, 'posts/html/inputs');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

                ;
            for (var i in childData) {
                var newForm = document.createElement("textArea", "br");
                var newDiv = document.createElement("div")
                newForm.id = "form" + i
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = (codeDb[i])


            }
            newDiv.appendChild(newForm)
            document.getElementById('tagAtt').addEventListener('click', () => {
                newDiv.style.display = 'none'
            })
            document.getElementById("tagTags").addEventListener('click', () => {
                newDiv.style.display = "none"
            })
            document.getElementById('tagUi').addEventListener('click', () => {
                newDiv.style.display = 'none'
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
document.getElementById("tagUi").addEventListener('click', function () {
    clickHtml + 1;

    const dbRef = ref(db, 'posts/html/ui');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

                ;
            for (var i in childData) {
                var newForm = document.createElement("textArea", "br");
                var newDiv = document.createElement("div")
                newForm.id = "form" + i
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = (codeDb[i])

            }
            newDiv.appendChild(newForm)
            document.getElementById('tagAtt').addEventListener('click', () => {
                newDiv.style.display = 'none'
            })
            document.getElementById("tagTags").addEventListener('click', () => {
                newDiv.style.display = "none"
            })
            document.getElementById('tagInp').addEventListener('click', () => {
                newDiv.style.display = 'none'
            })


        });
    }, {
        onlyOnce: true
    })
})
    //HTML END
    //PY START
 document.getElementById("print").onclick=function(){
    const dbRef = ref(db, 'posts/py/print');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

            ;
            for (var i in childData) {
                var newForm = document.createElement("textArea", "br");
                var newDiv = document.createElement("div")
                newForm.id = "form" + i
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = (codeDb[i])

            }
            newDiv.appendChild(newForm)

            document.getElementById("var").onclick=function(){
                newDiv.style.display="none"
            }





        })})}
//PRINT END
//Start VAR
document.getElementById("var").onclick=function(){
    const dbRef = ref(db, 'posts/py/var');

    onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            const codeDb = childSnapshot.val()

            ;
            for (var i in childData) {
                var newForm = document.createElement("textArea", "br");
                var newDiv = document.createElement("div")
                newForm.id = "form" + i
                newForm.readOnly = true
                document.body.appendChild(newDiv)
                newForm.value = (codeDb[i])

            }
            newDiv.appendChild(newForm)
            document.getElementById("print").onclick=function(){
                newDiv.style.display="none"
            }




        })})}


