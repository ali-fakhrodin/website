const $ = document
const typeWriterElem = $.querySelector('.main-my_name')
const typeWriterTxt = 'علـی فخرالدین هستـم'
let counter = 0

typeWriterElem.innerHTML = ''

// ------------------------------------- Start Type Writer -------------------------------------
function typeWriter () {
     
     if (counter < typeWriterTxt.length) {
          
          console.log(typeWriterTxt[counter]);
          
          typeWriterElem.innerHTML += typeWriterTxt[counter]
          counter++
     }
     
}

setTimeout (() => {
     
     setInterval (() => {
          typeWriter()
     }, 80)
     
}, 500)
// ------------------------------------- End Type Writer -------------------------------------