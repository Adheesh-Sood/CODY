//JS 
//Variables 
var lang = "none";
//................................................................
document.getElementById('py').style.display = "none"
document.getElementById("innerSearch").style.display = "none"
    //................................................................
document.getElementById("go").onclick = function() {
    var search = document.getElementById("searchLang").value;
    if (search == "python") {
        document.getElementById("innerSearch").value = "Python :: "
        document.getElementById("innerBtn").style.display = ""
        lang = "python";
        document.getElementById("py").style.display = ""
    } else if (search == "Python") {
        lang = "python";
        document.getElementById("innerSearch").style.display = ""
        document.getElementById("innerSearch").value = "Python :: "

        document.getElementById("py").style.display = ""

    } else if (search == "HTML") {
        document.getElementById("innerSearch").value = "HTML :: "
        document.getElementById("innerBtn").style.display = ""
        lang = "html";
        window.alert("Html")

    } else if (search == "html") {
        document.getElementById("innerSearch").value = "HTML :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "html";
        window.alert("HTML")
    } else if (search == "CSS") {
        document.getElementById("innerSearch").value = "CSS :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "css";
        Window.alert("CSS")
    } else if (search == "css") {
        document.getElementById("innerSearch").value = "CSS :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "css";
        Window.alert("CSS")
    } else if (search == "javascript") {
        document.getElementById("innerSearch").value = "Javascript :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "js"
        window.alert("Javascript")
    } else if (search == "Javascript") {
        document.getElementById("innerSearch").value = "CSS :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "js"
        window.alert("Javascript")
    } else if (search == "C++") {
        document.getElementById("innerSearch").value = "C++ :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "c++";
        window.alert("C++")
    } else if (search == "C#") {
        document.getElementById("innerSearch").value = "C# :: "

        document.getElementById("innerBtn").style.display = ""
        lang = "c#";
        window.alert("C#")
    } else {
        lang = "none";
        window.alert("No language found as" + search)
    }




}
while (lang != "none") {
    document.getElementById("innerBtn").style.display = ""
}