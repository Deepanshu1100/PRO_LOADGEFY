const income = document.querySelector(".income-input");
const results = document.querySelector(".results-input");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const form = document.querySelector("form");

//Reset page
reset.addEventListener("click", () => {
  setTimeout(() => {
    document.location.reload();
  });
});

//Calculate button
calculate.addEventListener("click", (e) => {
  e.preventDefault;

  if (income.value <= 24000) {
    results.value = income.value * 0.04;
  } else if (income.value > 25000 && income.value < 40000) {
    results.value = income.value * 0.06;
  } else if (income.value > 40000 && income.value < 60000) {
    results.value = income.value * 0.08;
  } else if (income.value > 60000 && income.value < 80000) {
    results.value = income.value * 0.10;
  } else if (income.value >= 80000) {
    results.value = income.value * 0.12;
  }
  numRounded();
});

//Round results

const numRounded = () => {
  (Math.round(results.value * 100) / 100).toFixed(2);
};
//Tax function
