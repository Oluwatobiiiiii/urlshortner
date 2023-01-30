
// navbar menu

const hamburgerMenu = document.querySelector(".navbar-toogle");

const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    document.querySelector(".navbar-menu").classList.toggle('active');
};

hamburgerMenu.addEventListener('click', menuIsActive);

