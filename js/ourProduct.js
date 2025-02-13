document.body.style.backgroundColor=localStorage.getItem('theme')
var white=document.getElementById('white')
    white.addEventListener('click',function() { 
        document.body.style.backgroundColor='white'
        localStorage.setItem('theme','white')    
    })
    
    var black=document.getElementById('black')
    black.addEventListener('click',function() {
       document.body.style.backgroundColor='black'
       localStorage.setItem('theme','black')
      
    })
    var cssfile=document.getElementById('cssfile')
    cssfile.href=localStorage.getItem('file')
    var English = document.getElementById('English');
    var Arabic = document.getElementById('Arabic');   
    var lang = localStorage.getItem('lang');
    if (lang === 'en') {
        document.dir = 'ltr'; 
    } else {
        document.dir = 'rtl';  
    }
    
    if (English) {
        English.addEventListener('click', function () {
            document.dir = 'ltr'; 
            localStorage.setItem('lang', 'en');
            cssfile.href='css/english.css'
            localStorage.setItem('file','css/english.css')
        });
    }
    if (Arabic) {
        Arabic.addEventListener('click', function () {
            document.dir = 'rtl'; 
            localStorage.setItem('lang', 'ar'); 
            cssfile.href='css/arabic.css'
          localStorage.setItem('file','css/arabic.css')
        });
    }
//     var external2 =document.getElementById('external2')
//    function external(){
//     window.location.href="./external.html"
// }
var internal2 =document.getElementById('internal2')
   function internal(){
    window.location.href="./internal.html"
}
var epocxi2 =document.getElementById('epocxi2')
   function epocxi(){
    window.location.href="./epocxi.html"
}
var Insulation2 =document.getElementById('Insulation2')
   function Insulation(){
    window.location.href="./Insulation.html"
}
