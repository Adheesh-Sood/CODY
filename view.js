//JS 
document.getElementById('py').style.display = "none"
    //................................................................
document.getElementById("go").onclick = function() {
    var search = document.getElementById("searchLang").value;
    if (search == "python") {
        document.getElementById("py").style.display = ""
    } else if (search == "Python") {
        document.getElementById("py").style.display = ""

    }
}