document.body.style.backgroundColor=localStorage.getItem('theme')
// var cssFile=document.getElementById('cssFile')
// cssFile.href=localStorage.getItem('file')
var white=document.getElementById('white')
    white.addEventListener('click',function() {
        console.log('white')
        document.body.style.backgroundColor='white'
        localStorage.setItem('theme','white')
        // cssFile.href='css/page1.css'
        // localStorage.setItem('file','css/page1.css')
    })
    
    var black=document.getElementById('black')
    black.addEventListener('click',function() {
        console.log('black')
       document.body.style.backgroundColor='black'
       localStorage.setItem('theme','black')
    //    cssFile.href='css/black.css'
    //    localStorage.setItem('file','css/black.css')
      
    })