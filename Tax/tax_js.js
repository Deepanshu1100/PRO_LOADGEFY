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

  
});

//Round results

const numRounded = () => {
  (Math.round(results.value * 100) / 100).toFixed(2);
};
//Tax function
