let currentOperator = null;
let currentNum = 0;
let pastNum = null;
let screen = document.querySelector("#screen");
screen.textContent = 0;
let numbers = Array.from(document.querySelectorAll(".number"));
let operators = Array.from(document.querySelectorAll(".operator"));

numbers.forEach((e, i) =>
  e.addEventListener("click", (e) => {
    currentNum = parseInt(currentNum + e.target.id);
    screen.textContent = currentNum;
  })
);

operators.forEach((e, i) =>
  e.addEventListener("click", (e) => {
    currentOperator = e.target.id;
  })
);
