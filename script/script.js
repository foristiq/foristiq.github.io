const navbar = document.querySelector('.container-navbar')
const navMenu = document.querySelector('.navmenu');
const navSlide = document.getElementById('nav');

window.onscroll = function () {
    var top = window.scrollY;
    if(top >= 100){
        navbar.classList.add('scrolled');
    } else{
        navbar.classList.remove('scrolled');
    }
}
navMenu.addEventListener('click',function(){
    if( navMenu.innerHTML === "Menu"){
        navMenu.innerHTML = "Close"
    }

    else{
        navMenu.innerHTML = "Menu"
    }
});

navMenu.addEventListener('click', function(){
    navSlide.classList.toggle('slide');
});
