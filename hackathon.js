let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.screenY>100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

const toggleChallenge = document.getElementById('toggleChallenge');
const fullChallenge = document.getElementById('fullChallenge');

toggleChallenge.addEventListener('click', (e) => {
    e.preventDefault();
    fullChallenge.classList.toggle('active');
    const icon = toggleChallenge.querySelector('i');
    
    if (fullChallenge.classList.contains('active')) {
        toggleChallenge.innerHTML = 'Hide full challenge <i class="bx bx-chevron-up"></i>';
    } else {
        toggleChallenge.innerHTML = 'See full challenge <i class="bx bx-chevron-down"></i>';
    }
});


ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200
});


const isMobile = window.matchMedia("(max-width: 768px)").matches;
const imageOrigin = isMobile ? 'left' : 'right';
const contentOrigin = isMobile ? 'left' : 'right';

ScrollReveal().reveal('.experience-item:not(.reverse) .experience-image', { origin: imageOrigin });
ScrollReveal().reveal('.experience-item.reverse .experience-content', { origin: contentOrigin });

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.challenge-container, .research-container', { origin: 'bottom' });
ScrollReveal().reveal('.experience-item:not(.reverse) .experience-content', { origin: 'left' });
ScrollReveal().reveal('.experience-item.reverse .experience-image', { origin: 'left' });
