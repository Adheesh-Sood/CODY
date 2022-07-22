var a=false;
console.error('Do not use the console as for you are in a vulnerable place for hackers to get you account info ')
document.getElementById('shortCuts').addEventListener('click'  , ()=>{

    if(a==false){    document.getElementById('shortDiv').style.display="";
        a=true;
    }else{
        document.getElementById('shortDiv').style.display="none"
        console.log(a)
        a=false;
    }

})
var input=document.getElementById('searchLang')
input.addEventListener('keypress' , (event)=>{
    if(input.value=="short"){
        document.getElementById('shortDiv').style.display=""
    }
})
input.addEventListener('keypress' , (event)=>{
    if(event.key='Enter'){
        document.getElementById('shortDiv').style.display="none"
        document.getElementById('shortCuts').style.display="none"



    }

})