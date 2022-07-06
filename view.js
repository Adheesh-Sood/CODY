//JS 
//Variables 

var lang = "none";
//..................
var input = document.getElementById("search");
//................................................................
document.getElementById("search").display = ""

document.getElementById("innerSearch").style.display = "none"
//................................................................
input.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        var search = document.getElementById("searchLang").value;
        if (search == "python") {
            document.getElementById("error").style.display = "none"
            document.getElementById("search").style.display = "none"
            document.getElementById("search").display = "none"
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "
            document.getElementById("innerBtn").style.display = ""
            lang = "python";

        } else if (search == "Python") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("py").style.display = ""

        } else if (search == "HTML") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "HTML :: "
            document.getElementById("innerBtn").style.display = ""
            lang = "html";
            window.alert("Html")

        } else if (search == "html") {

            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "HTML :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "html";
            window.alert("HTML")
        } else if (search == "CSS") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "CSS :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "css";
            Window.alert("CSS")
        } else if (search == "css") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "CSS :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "css";
            Window.alert("CSS")
        } else if (search == "javascript") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "Javascript :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "js"
            window.alert("Javascript")
        } else if (search == "Javascript") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").display = ""
            document.getElementById("innerSearch").value = "Javascript :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "js"
            window.alert("Javascript")
        } else if (search == "C++") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "C++ :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "c++";
            window.alert("C++")
        } else if (search == "C#") {
            document.getElementById("error").style.display = "none"

            document.getElementById("search").style.display = "none"

            lang = "python";
            document.getElementById("innerSearch").style.display = ""
            document.getElementById("innerSearch").value = "Python :: "

            document.getElementById("innerSearch").value = "C# :: "

            document.getElementById("innerBtn").style.display = ""
            lang = "c#";
            window.alert("C#")
        } else {
            document.getElementById("search").display = "none"
            lang = "none";
            window.alert("No language found as" + search)
            document.getElementById("error").innerHTML = "No language found as" + search
        }




    }
    var innerSearch = document.getElementById("innerSearch")
    innerSearch.addEventListener("keypress", function (event) {
        if (event.key == "Enter") {
            if (lang == "python") {
                console.log("python")
            } else if (lang == "html") {
                console.log("html")
            } else if (lang == "css") {
                console.log("css")
            } else if (lang == 'js') {
                console.log("js")
            } else if (lang == "c++") {
                console.log("cpp")
            } else if (lang == "c#") {
                console.log('c#')
            }
        }

    }

    )
}


)
