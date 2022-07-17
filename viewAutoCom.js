const input=document.getElementById('searchLang')
const langs= ['Html' , 'CSS' , 'Javascript' , 'Python' , 'C#' , 'C++']

var html=(langs[0])
var Css=(langs[1])
var Js=(langs[2])
var py=(langs[3])
var Cs=(langs[4])
var Cpp=(langs[5])
console.table(langs)

console.log(langs.join())
input.addEventListener('keypress' , (event)=>{
    var a=false;
    if(event.key==html[0] && event.shiftKey || event.key=="h" && event.shiftKey){
        console.log("html")
    }
    if(event.key==Js[0 && event.shiftKey]){
        console.log("js")
    }
    if(event.key==py[0 && event.shiftKey]){
        console.log("py")
    }
    if(event.key=='C' && event.shiftKey){
        console.log("Css")
    }
    if(event.key=="#"){
        console.log("C#")
    }
    if(event.key=='+'){
        console.log("C++")
    }


})