/*
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div
 con la clase .fn-insert-here */

const div = document.createElement("div");
document.body.appendChild(div)
console.log(div)

const p = document.createElement("p")
const div2 = document.createElement("div")
div2.appendChild(p)
document.body.appendChild(div2)
console.log(div2)

const div3 = document.createElement("div")
let n=0
while (n<6){
	n++;
	div3.appendChild(document.createElement("p"));
}
document.body.appendChild(div3)
console.log(div3)

const p2 = document.createElement("p")
p2.innerHTML = 'Soy dinámico!'
document.body.appendChild(p2)

const h2 = document.querySelector(".fn-insert-here")
h2.innerHTML ='Wubba Lubba dub dub'

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement("ul")
for (word of apps){
	ul.innerHTML+=`<li>${word}</li>`
}
document.body.appendChild(ul)

const remove = document.querySelectorAll(".fn-remove-me")
for (obj of remove){document.body.removeChild(obj)}

const firstdiv = document.querySelector("div")
firstdiv.insertAdjacentHTML("afterend",`<p>Voy en medio!</p>`)

const divs = document.querySelectorAll("div.fn-insert-here")
for (let div of divs){
	div.innerHTML = `<p>Voy dentro!</p>`
}