const input = document.querySelector("input");
const btn = document.querySelector("button");
let n = 0;

/* ------------------------------------------------------FUNCIONES */
const getCharsAsync2 = async (name) => {
  let baseUrl = `https://api.nationalize.io?name=`;
  baseUrl += name;
  const data = await fetch(baseUrl);
  const jsondata = await data.json();
  return jsondata;
};
const createP = (name, list) => {
  let str = "";
  let i = -1;
  for (country of list) {
    i++;
    if (i == 0) {
      str += `El nombre ${name} tiene un ${Math.round(
        country.probability * 1000
      )/10} % de ser de ${country.country_id}`;
    }
    if (i == list.length - 1) {
      str += `y un ${Math.round(country.probability * 1000)/10} % de ser de ${
        country.country_id
      }`;
    }
    if (i != 0 && i != list.length - 1) {
      str += `, un ${Math.round(country.probability * 1000)/10} % de ser de ${
        country.country_id
      }`;
    }
  }
  return str;
};
const print = (name, list) => {
  let container = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let btn = document.createElement("button");
  btn.innerHTML = "X";
  h1.innerHTML = name;
  p.innerHTML = createP(name, list);
  container.appendChild(h1);
  container.appendChild(p);
  container.appendChild(btn);
  btn.classList.add(`${name}${n}`);
  container.classList.add(`${name}${n}`);
  document.body.appendChild(container);
  btn.addEventListener("click", () => {
    document.body.removeChild(
      document.querySelector(`div.${btn.getAttribute("class")}`)
    );
  });
};
const find = async (name) => {
  const list = await getCharsAsync2(name);
  print(list.name, list.country);
};

/* -------------------------------------------------------EVENTOS */
btn.addEventListener("click", () => {
  if (input.value != "" && isNaN(input.value)) {
    n++;
    find(input.value);
  }
  if (input.value == "") {
    alert("Debes introducir algo para buscar");
  }
  if (isNaN(input.value) == false && input.value != "") {
    alert("No se permite búsqueda de números");
  }
  input.value = "";
});
document.addEventListener("keydown", (ev) => {
  if (input.value != "" && isNaN(input.value)) {
    if (ev.which === 13) {
      n++;
      find(input.value);
    }
  }
  if (ev.which === 13 && input.value == "") {
    alert("Debes introducir algo para buscar");
  }
  if (ev.which === 13 && isNaN(input.value) == false && input.value != "") {
    alert("No se permite búsqueda de números");
  }
  if (ev.which === 13) {
    input.value = "";
  }
});
