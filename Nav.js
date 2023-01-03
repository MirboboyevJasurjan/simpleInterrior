let menu = document.querySelector('navbar')
let menuBtn = document.querySelector('#menu-btn')
let menuBanner = document.querySelector('#menu-banner')

const c = console.log.bind(document)

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    menuBanner.classList.toggle("active");
})

window.addEventListener('scroll', () => {
    const div = document.querySelector('div')
    const {
        top: t,
        left: l
    } = div.getBoundingClientRect();
    const {
        scrollX,
        scrollY
    } = window
    const topPos = t + scrollX
    const leftPos = l + scrollY
    console.log(topPos, leftPos)

    if (topPos > 100) {
        menu.style.position = 'fixed';
    }else{
        menu.style.position = 'flex';
    }

})


const moveMenu = () => {
    const posMenu = menu.getBoundingClientRect().top
    if (menu.getBoundingClientRect().top != posMenu) {
        menu.style.position = 'fixed'
    }
}
moveMenu()

const div = document.querySelector('div')
const {
    top: t,
    left: l
} = div.getBoundingClientRect();
const {
    scrollX,
    scrollY
} = window
const topPos = t + scrollX
const leftPos = l + scrollY
console.log(topPos, leftPos)