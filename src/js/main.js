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

import slide_1 from '../../img/slide_1.png'
import slide_2 from '../../img/slide_2.jpeg'
import slide_3 from '../../img/slide_3.jpeg'

import _bg from '../../img/_bg.jpeg'
import _bg2 from '../../img/_bg2.jpeg'



function addImage(slct,img,width=200,brdr='1vh',fluid="img-fluid rounded-9") {
    let img_prd = document.createElement('img')
    img_prd.width = width
    img_prd.style.borderRadius=brdr
    img_prd.src = img
    img_prd.classList = fluid;
    let prd_div = document.querySelector(slct)
    prd_div.appendChild(img_prd,width)
}

addImage('#product_2', howitwrks_2,150,'1vh','rounded-9 start-50')
addImage('#product_1', home_1,150,'1vh','rounded-9 start-50')
//addImage('#card_prd2_2', card_prd2_2,'1000')

addImage('#h_it_w_crsl', slide_1,500,'1vh')
addImage('#h_it_w_crsl', slide_2,500,'1vh')
addImage('#h_it_w_crsl', slide_3, 500, '1vh')

function addSlideImage(slct,img,width=200) {
    let img_prd = document.createElement('img')
    img_prd.width = width
    img_prd.src = img
    img_prd.classList="d-block w-100"
    let prd_div = document.querySelector(slct)
    prd_div.appendChild(img_prd,width)
}

// addSlideImage('#slide_1', slide_1)
// addSlideImage('#slide_2', slide_2)
// addSlideImage('#slide_3',slide_3)

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
 

