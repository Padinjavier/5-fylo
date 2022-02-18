const buttonMenu1 = document.querySelector('#icon-menu1')
const buttonMenu2 = document.querySelector('#icon-menu2')
const menu = document.querySelector('#menu')

const toggleElement = (element, nameClass) => {
	element.classList.toggle(nameClass)
}
// forma corta
buttonMenu1.addEventListener('click', () => {
	toggleElement(menu, 'active')
})
buttonMenu2.addEventListener('click', () => {
	toggleElement(menu, 'active')
})