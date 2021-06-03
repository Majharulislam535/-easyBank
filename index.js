const hamburger = document.querySelector('#btnHamburger');
const header = document.querySelector(".header");
const overly= document.querySelector('.overly');  
 const fadeElement = document.querySelectorAll('.has-fade');
hamburger.addEventListener('click',()=>{
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElement.forEach(element =>{
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
        
       
    }
    else{
        header.classList.add('open');
        fadeElement.forEach(element =>{
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
          
        })
        
    }
})