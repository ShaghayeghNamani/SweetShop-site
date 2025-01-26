const header = document.querySelector("header");

window.addEventListener('click', function(){
    header.classList.toggle('sticky', window.scrollY > 80);
})