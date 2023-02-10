const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const navBar = document.querySelector('.navbar')
const img = document.querySelector('#rainbow')

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
    document.body.style.overflow = 'hidden'
    mainMenu.style.display = 'flex';
    mainMenu.style.top = `${navBar.clientHeight}px`;
}
function close(){
    document.body.style.overflow = 'initial'
    mainMenu.style.top = '-100%'
}

const changeImg = () => {
        if (window.innerWidth < 600) {
        img.src ='./Images/rainbow.jpg'
    }
    else {
        img.src = './Images/rainbow-horizontal.jpg'
    }
}

changeImg()

window.addEventListener('resize', () => {
    mainMenu.style.top = `${navBar.clientHeight -1}px`;
    changeImg()
})