document.getElementById('shortCuts').addEventListener('click'  , ()=>{
    document.getElementById('shortDiv').style.display=""
})
var input=document.getElementById('searchLang')
input.addEventListener('keypress' , (event)=>{
    if(event.key='Enter'){
        document.getElementById('shortDiv').style.display="none"

    }
})