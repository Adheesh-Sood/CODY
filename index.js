var netMode;

var network;

function net(online) {
    console.log(online)
}
window.addEventListener('load', () => {
    document.getElementById('demo').innerHTML = Date()
    net(navigator.onLine)
    network = navigator.onLine;
    if (network == false) {
        netMode = "offline"
            //................................................................
        document.getElementById("goShare").onclick = function() {
            window.alert("No internet(You need a conection to the internet before using share or view)")
        }
        document.getElementById("goView").onclick = function() {
                window.alert("No internet(You need a conection to the internet before using share or view)")

            }
            //................................................................
    } else if (network == true) {
        document.getElementById("goShare").onclick = function() {
            window.location.href = "share.html"
        }
        document.getElementById("goView").onclick = function() {
            document.location.href = "view.html"
        }
        netMode = "online"
    } else {
        netMode = "error"
    }
})
document.getElementById("goVid").onclick = function() {
    window.location.href = "videos.html"
}

document.getElementById("goLearn").onclick = function() {
    window.location.href = "learn.html"
}

let statHover = document.getElementById("stat")
statHover.addEventListener('mouseover', function(event) {

    if (network == false) {
        document.getElementById("stat").style.border = "2px solid red"
        document.getElementById("try").style.display = ""
        document.getElementById("stat").value = "Offline :("
    } else if (network == true) {
        document.getElementById("stat").style.border = "2px solid lime"

        document.getElementById("stat").value = "Online :)"
    }
})
document.getElementById("try").addEventListener('click', function() {
    location.reload();


})
document.getElementById('update').onclick = function() {
    document.getElementById('demo').innerHTML = Date()

}