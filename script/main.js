// for burger menu

const burgerMenu = document.getElementById('burgerMenu')
const burgerClose = document.getElementById('burgerClose')
const burgerOpen = document.getElementById('burgerOpen')

burgerOpen.addEventListener('click', function () {
    burgerMenu.classList.add('active');
})
burgerClose.addEventListener('click', function () {
    burgerMenu.classList.remove('active');
})