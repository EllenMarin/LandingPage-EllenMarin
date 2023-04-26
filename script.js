let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*section active*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id+']').classList.add('active');
            });
        };
    });

    /**/ 

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

    /*remove navbar link */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*animate-name*/
const typed = new Typed('.animate-text', {
    strings:['E eu estou muito animada hoje!', 'Porque vou vos contar,',' um bocadinho sobre mim...',''],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    
    /*loop:true,
    loopCount: 3,*/
});
