var input=document.getElementById('searchLang')
input.addEventListener('keypress', ()=>{
    document.getElementById('svg').style.display="none"
    document.getElementById('svgSearch').style.display=""
})
input.addEventListener('keypress' , (event)=>{
    if(event.key=="Enter"){document.getElementById("svgSearch").style.display="none"}

})