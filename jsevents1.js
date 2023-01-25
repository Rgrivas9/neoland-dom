/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click

1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */


const btn = document.createElement("button")
btn.setAttribute("id","id btnToClick")
const click = document.querySelector(".click")
click.insertAdjacentElement("afterend",btn)
btn.addEventListener('click',()=>console.log("Detecta cuando haces click en algo. Como no le pongas la movida de ()=> no anda"))

const focs = document.querySelector(".focus")
focs.addEventListener("focus",()=>console.log(focs.value))



const val = document.querySelector(".value")
val.addEventListener("input",()=>console.log(val.value))