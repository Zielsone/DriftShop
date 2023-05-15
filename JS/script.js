const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');

const handleNav =() => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
    document.body.classList.toggle('navBlock');

}

const hideNav =() => {
    navBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
    document.body.classList.toggle('navBlock')
}




navBtn.addEventListener('click', handleNav);
navMobile.addEventListener('click', hideNav);