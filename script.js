const navbar = document.querySelector('.navbar');
const hamburgher = document.querySelector('#hamburgher');

hamburgher.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const hamburgherMenu = document.querySelector('#hamburgher');

document.addEventListener('click', function (e) {
    if (!hamburgher.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

const typed = new Typed('.text', {
    strings: ['silahkan dinikmati.'],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true
});
