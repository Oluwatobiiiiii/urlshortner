
// navbar menu

const hamburgerMenu = document.querySelector(".navbar-toogle");

const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    document.querySelector(".navbar-menu").classList.toggle('active');
    console.log("The navbar has been clicked");
};

hamburgerMenu.addEventListener('click', menuIsActive);

// MANAGMENT
