const textDisplay = document.querySelector("#textDisplay");
const num = [...document.querySelectorAll(".btn")];
const result = document.querySelector("#igual");
const dl = document.querySelector("#Dl");
const back = document.querySelector("#back");
const invert = document.querySelector("#inverter");
const reset = document.querySelector("#restart");
const body = document.querySelector("body");
const container = document.querySelector("main");

console.log(body);

num.forEach((item) => {
  const botao = item.textContent;

  item.addEventListener("click", () => {
    textDisplay.value += botao;
  });
});

result.addEventListener("click", () => {
  if (textDisplay.value === "") {
    return;
  }
  textDisplay.value = eval(textDisplay.value);
});

invert.addEventListener("click", () => {
  if (textDisplay.value != "") {
    textDisplay.value = eval(textDisplay.value) * -1;
  }
});

back.addEventListener("click", () => {
  textDisplay.value = textDisplay.value.slice(0, -1);
});

dl.addEventListener("click", () => {
  body.classList.toggle("dark");
  container.classList.toggle("dark");
});

reset.addEventListener("click", () => {
  textDisplay.value = "";
});
