const API = "https://api.adviceslip.com/advice";

const adviceId = document.querySelector("#adviceId");
const advice = document.querySelector("#advice");
const button = document.querySelector("#button");
let loading = false;

const updateAdvice = (id, message) => {
  advice.innerHTML = `${message}`;
  adviceId.textContent = `${id}`;
  loading = false;
};

const getAdvice = () => {
  loading = true;
  fetch(API)
    .then((rawResponse) => rawResponse.json())
    .then((response) => updateAdvice(response.slip.id, response.slip.advice));
};

window.addEventListener("load", () => {
  const previousAdvice = JSON.parse(localStorage.getItem("advice"));

  localStorage.getItem("advice") === null
    ? getAdvice()
    : updateAdvice(previousAdvice.id, previousAdvice.advice);
});

button.addEventListener("click", () => getAdvice());
