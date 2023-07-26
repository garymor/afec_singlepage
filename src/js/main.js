// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '../scss/style.scss'
import product_2 from '../../product_2.jpeg'
import home_1 from '../../img/home_1.jpg'
import howitwrks_1 from '../../img/howitwrks_1.jpg'
import howitwrks_2 from '../../img/howitwrks_2.jpg'
import howitwrks_3 from '../../img/howitwrks_3.jpg'
//import card_prd2_2 from '../../img/card_prd2_2.png'

import _bg from '../../img/_bg.jpeg'
import _bg2 from '../../img/_bg2.jpeg'



function addImage(slct,img,width=200,brdr='1vh') {
    let img_prd = document.createElement('img')
    img_prd.width = width
    img_prd.style.borderRadius=brdr
    img_prd.src = img
    img_prd.classList="img-fluid rounded-9"
    let prd_div = document.querySelector(slct)
    prd_div.appendChild(img_prd,width)
}

addImage('#product_2', product_2)
addImage('#product_1', home_1)
//addImage('#card_prd2_2', card_prd2_2,'1000')

addImage('#h_it_w_crsl', howitwrks_1,80,'5vh')
addImage('#h_it_w_crsl', howitwrks_2,80,'5vh')
addImage('#h_it_w_crsl', howitwrks_3, 80, '8vh')


const body = document.getElementById('bg')
body.style.backgroundImage = `url(${_bg}),url(${_bg2})`
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}



// const card_prd1 = document.getElementById('card_prd1')

// function expand(that) {
//     that.classList.add('bigger')
//     that.classList.remove('original')
// }

// function unexpand(that) {
//     that.classList.add('original')
//     that.classList.remove('bigger')
// }
  
// window.expand = expand
// window.unexpand = unexpand
 

