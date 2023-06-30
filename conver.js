let celciusInput = document.querySelector("#celcius > input");
let farenheitInput = document.querySelector("#farenheit > input");
let kelvinInput = document.querySelector("#kelvin > input");
let btn = document.querySelector("#but");

function roundNumber(number) {
  return Math.round(number * 100) / 100;
}

celciusInput.addEventListener("input", function () {
  let c = parseFloat(celciusInput.value);
  let f = c * (9 / 5) + 32;
  let k = c + 273.15;

  farenheitInput.value = roundNumber(f);
  kelvinInput.value = roundNumber(k);
});

farenheitInput.addEventListener("input", function () {
  let f = parseFloat(farenheitInput.value);
  let c = (f - 32) * (5 / 9);
  let k = (f - 32) * (5 / 9) + 273.15;

  celciusInput.value = roundNumber(c);
  kelvinInput.value = roundNumber(k);
});

kelvinInput.addEventListener("input", function () {
  let k = parseFloat(kelvinInput.value);
  let c = k - 273.15;
  let f = (k - 273.15) * (9 / 5) + 32;

  celciusInput.value = roundNumber(c);
  farenheitInput.value = roundNumber(f);
});

btn.addEventListener("click", () => {
  celciusInput.value = "";
  farenheitInput.value = "";
  kelvinInput.value = "";
});
