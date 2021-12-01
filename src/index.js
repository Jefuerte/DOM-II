import './less/index.less'

// Your code goes here!


// VARIABLES HERE 
const buttons = document.querySelector('.btn')
const header = document.querySelector('.main-navigation')
const newText = document.querySelector('.intro p')
const img = document.querySelector('.content-section img')
const botImg = document.querySelector('.content-destination img')
const topImg = document.querySelector('.intro img')
const dogHeader = document.querySelector('.intro h2')
const dogP1 = document.querySelector('.text-content p')
const dogP2 = document.querySelector('.content-destination p')
//Click

function buttonColor(evt) {
    buttons.style.backgroundColor = '#8E44AD'
}
document.addEventListener('click', buttonColor)

document.addEventListener('click', backHeader)

function backHeader(evt) {
    header.style.color = 'red'
}

function changePic(evt) {
    img.setAttribute('src', 'https://placedog.net/400/300')
}
document.addEventListener('click', changePic)

function changeHead(evt) {
    dogHeader.innerHTML = 'Welcome To The Dog Bus!'
}
document.addEventListener('click', changeHead)
// KEYDOWN

function biggerFontSize(evt) {
    if (evt.key === 'Escape') {
        newText.style.fontSize = '1.8rem'
    }
}
document.addEventListener('keydown', biggerFontSize)

//mouseover

function changeHeader(evt) {
    header.style.color = 'black'
}
document.addEventListener('mouseover', changeHeader)

function dogMiddle(evt) {
    botImg.setAttribute('src', 'https://placedog.net/600/200')
}
document.addEventListener('mouseover', dogMiddle)

//SCROLL

function changeTop(evt) {
    topImg.setAttribute('src', 'https://placedog.net/900/300')
}
document.addEventListener('scroll', changeTop)


function newP(evt) {
    dogP1.innerHTML = 'Doggo ipsum you are doin me a concern waggy wags floofs noodle horse puggorino, dat tungg tho you are doing me a frighten vvv. Pupper such treat thicc you are doing me a frighten porgo heckin angery woofer heckin wow very biscit the neighborhood pupper doggorino, long water shoob corgo shoober heckin angery woofer heckin good boys yapper big ol pupper. Smol borking doggo with a long snoot for pats waggy wags long water shoob shooberino boofers blop floofs, what a nice floof I am bekom fat most angery pupper I have ever seen length boy borkdrive.'
}
document.addEventListener('scroll', newP)

function newP2(evt) {
    dogP2.innerHTML = 'Doggo ipsum you are doin me a concern waggy wags floofs noodle horse puggorino, dat tungg tho you are doing me a frighten vvv. Pupper such treat thicc you are doing me a frighten porgo heckin angery woofer heckin wow very biscit the neighborhood pupper doggorino, long water shoob corgo shoober heckin angery woofer heckin good boys yapper big ol pupper. Smol borking doggo with a long snoot for pats waggy wags long water shoob shooberino boofers blop floofs, what a nice floof I am bekom fat most angery pupper I have ever seen length boy borkdrive.'
}
document.addEventListener('scroll', newP2)