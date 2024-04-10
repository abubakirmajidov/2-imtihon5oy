const url = "https://api.adviceslip.com/advice";

const ul = document.querySelector("div");
const template = document.querySelector("template");
const image = document.querySelector("img");
const wrapper = document.querySelector(".wrapper");

function getData() {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((advice) => {
      updateUl(advice);
    })
    .catch();
}

image.addEventListener("click", () => {
  getData();
  const music = new Audio("../audio/mouse-click-153941 (2).mp3");
  music.play();
});

getData();

function updateUl(data) {
  ul.innerHTML = "";
  console.log(data);
  const clone = template.content.cloneNode(true);
  const cards__id = clone.querySelector(".cards__id");
  const cards__text = clone.querySelector(".cards__text");

  cards__id.textContent = `Advice #${data.slip.id}`;
  cards__text.textContent = `"${data.slip.advice}"`;

  ul.appendChild(clone);
  ul.appendChild(wrapper);
  ul.appendChild(image);
}
