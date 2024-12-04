let buttons = document.getElementsByClassName("btn");
let inputField = document.getElementById("input");
for (let button of buttons) {
  button.addEventListener("click", function () {
    if (button.textContent === "C") {
      inputField.value = "";
    } else if (["+", "-", "/", "*"].includes(button.textContent)) {
      handleOperator(button.textContent);
    } else {
      inputField.value += button.textContent;
    }
  });
}

let firstValue = null;
let operator = null;

function handleOperator(op) {
  if (inputField.value !== "") {
    firstValue = parseFloat(inputField.value);
    operator = op;
    inputField.value += `${operator}`;
  }
}

function calculateResult() {
  if (firstValue !== null && operator && inputField.value !== "") {
    const parts=inputField.value.split(`${operator}`)
    let secondValue= parseFloat(parts[1])
    let result;

    switch (operator) {
      case "+":
        result = firstValue + secondValue;
        break;
      case "-":
        result = firstValue - secondValue;
        break;
      case "*":
        result = firstValue * secondValue;
        break;
      case "/":
        result =
          secondValue !==0
            ? firstValue / secondValue
            : "Error: Division by zero";
        break;
      default:
        result = "Error";
    }

    inputField.value = result;
   
  }
}
document.getElementById("equal").addEventListener("click", calculateResult);
