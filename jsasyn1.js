const getCharsAsync = async () => {
  const data = await fetch("https://api.agify.io?name=michael");
  const jsondata = await data.json();
  console.log(jsondata);
};
/* --------------------------------------------------DECLARACIONES */
const input = document.querySelector("input");
const btn = document.querySelector("button");
const container = document.createElement("div");
const h1 = document.createElement("h1");
const ul = document.createElement("ul");
container.appendChild(h1);
container.appendChild(ul);
document.body.appendChild(container);

/* ------------------------------------------------------FUNCIONES */
const getCharsAsync2 = async (name) => {
  let baseUrl = `https://api.nationalize.io?name=`;
  baseUrl += name;
  const data = await fetch(baseUrl);
  const jsondata = await data.json();
  return jsondata;
};
const print = (name, list) => {
  h1.innerHTML = name;
  ul.innerHTML = "";
  for (country of list) {
    ul.innerHTML += `<li>Country: ${country.country_id}. Probability: ${country.probability}</li>`;
  }
};
const find = async (name) => {
  const list = await getCharsAsync2(name);
  print(list.name, list.country);
};

/* -------------------------------------------------------EVENTOS */
btn.addEventListener("click", () => {
  find(input.value);
});
