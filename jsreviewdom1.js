/*
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.

 */

const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const ul = document.createElement("ul");
for (country of countries) {
  ul.innerHTML += `<li>${country}</li>`;
}
document.body.appendChild(ul);

const remov = document.querySelector(".fn-remove-me");
document.body.removeChild(remov);

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const ul2 = document.createElement("ul");
const div = document.querySelector("[data-function='printHere']");
for (car of cars) {
  ul2.innerHTML += `<li>${car}</li>`;
}
div.appendChild(ul2);

const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
let n = -1;
for (obj of countries2) {
  n++;
  document.body.innerHTML += `<div id="d${n}" class="re"><h4>${obj.title}</h4><img src=${obj.imgUrl} alt="Photo of ${obj.title}"><button id="b${n}"></button></div>`;
}
const btn = document.createElement("button");
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  let remov = document.querySelectorAll(".re");
  let x=remov.length
  document.body.removeChild(remov[x-1]);
});

const b1 = document.querySelector("#b1")
const b2 = document.querySelector("#b2")
const b3 = document.querySelector("#b3")
const b4 = document.querySelector("#b4")
const b5 = document.querySelector("#b0")
const d1 = document.querySelector("#d1")
const d2 = document.querySelector("#d2")
const d3 = document.querySelector("#d3")
const d4 = document.querySelector("#d4")
const d5 = document.querySelector("#d0")

b1.addEventListener('click', ()=>{document.body.removeChild(d1)})
b2.addEventListener('click', ()=>{document.body.removeChild(d2)})
b3.addEventListener('click', ()=>{document.body.removeChild(d3)})
b4.addEventListener('click', ()=>{document.body.removeChild(d4)})
b5.addEventListener('click', ()=>{document.body.removeChild(d5)})
