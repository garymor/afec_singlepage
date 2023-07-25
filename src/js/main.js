// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import '../scss/style.scss'
import logo_img from '../../afec_logo.jpeg'
import product_1 from '../../product_1.jpeg'
import product_2 from '../../product_2.jpeg'

function addImage(slct,img) {
    let img_prd = document.createElement('img')
    img_prd.width = 300
    img_prd.src = img
    img_prd.classList="img-fluid rounded-start"
    let prd_div = document.querySelector(slct)
    prd_div.appendChild(img_prd)
}

addImage('#product_2',product_2)

const img = document.createElement('img')
img.width = 90
img.src = logo_img
img.classList="img-fluid"
const logo_div = document.querySelector('#logo_div')
logo_div.appendChild(img)

const img_prd1 = document.createElement('img')
img_prd1.width = 300
img_prd1.src = product_1
img_prd1.classList="img-fluid rounded-start"
const prd1_div = document.querySelector('#product_1')
prd1_div.appendChild(img_prd1)




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
 

