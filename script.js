let burger = document.querySelector('#burger');
let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.navlist');


burger = addEventListener('click', function run() {
    navlist.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})

document.getElementById('con').addEventListener('click',clslist);

function clslist(){
    document.getElementById('contact').classList.remove("tog")
    document.getElementById('footer').classList.remove("foot-h")
    document.getElementById('footer').classList.add("foot-m-top")

}

