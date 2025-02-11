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
    });
}
if (Arabic) {
    Arabic.addEventListener('click', function () {
        document.dir = 'rtl'; 
        localStorage.setItem('lang', 'ar'); 
    });
}
