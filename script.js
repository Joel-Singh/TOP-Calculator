let currentOperator = null;
let readyForNextNum = false;
let currentNum = 0;
let pastNum = null;
let screen = document.querySelector("#screen");
screen.textContent = 0;
let numbers = Array.from(document.querySelectorAll(".number"));
let operators = Array.from(document.querySelectorAll(".operator"));

numbers.forEach((e, i) =>
  e.addEventListener("click", (e) => {
    if (readyForNextNum) {
      pastNum = currentNum;
      currentNum = 0;
      readyForNextNum = false;
    }
    currentNum = parseInt(currentNum + e.target.id);
    screen.textContent = currentNum;
  })
);

operators.forEach((e, i) =>
  e.addEventListener("click", (e) => {
    currentOperator = e.target.id;
    screen.textContent = e.target.textContent;
    readyForNextNum = true;
  })
);
