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





/*parallax imagens*/
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let img4 = document.getElementById('img4');
let img5 = document.getElementById('img5'); 


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    img1.style.left = value * -1.5 +'px';
    img2.style.left = value * -1.5 +'px';
    img3.style.left = value * 1.5 +'px';
    img4.style.left = value * 1.5 +'px';
    img5.style.top = value * -1.5 +'px';    

});

// Função para verificar se um elemento está visível na janela
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para animar os elementos quando estiverem visíveis
function animateOnScroll() {
    var animateBoxes = document.querySelectorAll('.animate-text, .animate-text2, .skills-box, .courses-box, .projects-link img, .end-paragraph p');

    animateBoxes.forEach(function (box) {
        if (isElementInViewport(box) && !box.classList.contains('show')) {
            box.classList.add('show');
            
            /*animate-text*/
            if (box.classList.contains('animate-text')) {
                const typed = new Typed('.animate-text', {
                    strings: ['Desde que me lembro'],
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 1000,
                });
            }
            
            else if (box.classList.contains('animate-text2')) {
                const typed2 = new Typed('.animate-text2', {
                    strings: ['Eu tenho trabalhado em projetos bem legais'],
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 1000,
                });
            }

            else {
                box.style.animationDuration = '1s';
                box.style.animationDelay = '0.5s';
                box.style.animationFillMode = 'both';
                box.style.animationName = 'fadeInUp';
            } 
        }
    });
}


// Evento de scroll para acionar as animações
window.addEventListener('scroll', animateOnScroll);

