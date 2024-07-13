let numberString = "0";
const numbers = (input) => {
  if (numberString == "0") {
    numberString = "";
  }
  document.getElementById(
    "clear"
  ).innerHTML = `  <svg style="fill: var(--white)" >
              <use xlink:href="./sprite.svg#clear" />
            </svg>`;
  document.getElementById("clear").setAttribute("onclick", 'numbers("clear")');
  
  switch (input) {
    case "decimal":
      numberString += ".";
      break;
    case "0":
      numberString += "0";
      break;
    case "00":
      numberString += "00";
      break;
    case "1":
      numberString += "1";
      break;
    case "2":
      numberString += "2";
      break;
    case "3":
      numberString += "3";
      break;
    case "4":
      numberString += "4";
      break;
    case "5":
      numberString += "5";
      break;
    case "6":
      numberString += "6";
      break;
    case "7":
      numberString += "7";
      break;
    case "8":
      numberString += "8";
      break;
    case "9":
      numberString += "9";
      break;
    case "change-sign":
      numberString *= -1;
      break;
    case "clear":
      numberString = "0";
      document.getElementById("clear").innerText = "AC";
      document
        .getElementById("clear")
        .setAttribute("onclick", 'operations("ac")');
      break;
    default:
      break;
  }

  document.getElementById("result").innerText = numberString;
};

let calculationArray = [];
let total = 0;
const operations = (operator) => {
  switch (operator) {
    case "plus":
      calculationArray.push(+numberString);
      calculationArray.push("+");
      numberString = "";
      break;
    case "minus":
      calculationArray.push(+numberString);
      calculationArray.push("-");
      numberString = "";
      break;
    case "cross":
      calculationArray.push(+numberString);
      calculationArray.push("x");
      numberString = "";
      break;
    case "division":
      calculationArray.push(+numberString);
      calculationArray.push("÷");
      numberString = "";
      break;
    case "ac":
      calculationArray = [];
      break;
    case "percentage":
      // calculationArray.push(+numberString/100);
      // calculationArray.push("%");
      // numberString = ""
      console.log("work here");
      break;

    case "calc":
      calculationArray.push(+numberString);
      calculate();

      break;
    default:
      break;
  }


  document.getElementById("operations").innerText =   calculationArray.map(e=>e).join(" ")

};

const calculate = () => {
  if (typeof calculationArray[0] === "number") {
    total = calculationArray[0];
  }
  calculationArray.forEach((c, index) => {
    if (c === "+") {
      total = +total + +calculationArray[index + 1];
    }
    if (c === "-") {
      total -= calculationArray[index + 1];
    }
    if (c === "÷") {
      total /= calculationArray[index + 1];
    }
    if (c === "x") {
      total *= calculationArray[index + 1];
    }
  });
  document.getElementById("result").innerText = total;
};
