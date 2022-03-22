const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".amount-one");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

const calculate = () => {
  const API_URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`;
  fetch(`${API_URL}`)
    .then((r) => r.json())
    .then((data) => {
      const currency1 = currencyOne.value;
      const currency2 = currencyTwo.value;
      const rate = data.result;
      rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)}${currency2}`;
      const secondRate = amountOne.value * rate;
      amountTwo.value = secondRate.toFixed(2);
    });
};

const swap = () => {
  let change1 = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = change1;
  calculate();
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);

calculate();
