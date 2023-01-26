// Get all the elements

const output = document.querySelector(".output");

const keypad = document.querySelector(".keypad");

// Create a variable to store the current value

let currentValue = "0";

// Create a variable to store the previous value

let previousValue = "";

// Create a variable to store the current operator

let currentOperator = "";

// Create a variable to store the result

let result = "";

// Create a variable to check if the calculator is waiting for a second value

let waitingForSecondValue = false;

// Add event listener to the keypad

keypad.addEventListener("click", (event) => {
  // Get the value of the button

  const value = event.target.value;

  // Check if the button is a number

  if (!isNaN(value)) {
    // Check if the calculator is waiting for a second value

    if (waitingForSecondValue) {
      // Clear the output

      currentValue = "0";

      waitingForSecondValue = false;
    }

    // Check if the current value is '0'

    if (currentValue === "0") {
      // Replace the current value with the button value

      currentValue = value;
    } else {
      // Append the button value to the current value

      currentValue += value;
    }

    // Update the output

    output.textContent = currentValue;
  }

  // Check if the button is an operator

  if (
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/" ||
    value === "%"
  ) {
    // Check if the calculator already has an operator

    if (currentOperator !== "") {
      // Calculate the result

      calculate();
    }

    // Update the previous value

    previousValue = currentValue;

    // Update the current operator

    currentOperator = value;

    // Set the calculator to waiting for a second value

    waitingForSecondValue = true;
  }

  // Check if the button is the equal sign

  if (value === "=") {
    // Calculate the result

    calculate();
  }

  // Check if the button is the clear button

  if (value === "C") {
    // Clear the output

    currentValue = "0";

    previousValue = "";

    currentOperator = "";

    result = "";

    output.textContent = currentValue;
  }

  // Check if the button is the plus/minus button

  if (value === "+/-") {
    // Change the sign of the current value

    currentValue *= -1;

    // Update the output

    output.textContent = currentValue;
  }
});

// Create a function to calculate the result

function calculate() {
  // Convert the current and previous value to numbers

  let current = parseFloat(currentValue);

  let prev = parseFloat(previousValue);

  // Check the current operator

  switch (currentOperator) {
    case "+":
      result = prev + current;

      break;

    case "-":
      result = prev - current;

      break;

    case "*":
      result = prev * current;

      break;

    case "/":
      result = prev / current;

      break;

    case "%":
      result = prev % current;

      break;

    default:
      result = current;
  }

  // Update the current value with the result

  currentValue = result; // Update the output

  output.textContent = currentValue;

  // Reset the previous value and operator

  previousValue = "";

  currentOperator = "";
}
