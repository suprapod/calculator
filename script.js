const displayValue = document.querySelector("#display");
const numbuttons = document.querySelectorAll(".number");
const operatorsbuttons = document.querySelectorAll(".operator")
const equalbutton = document.querySelector(".equal")
const resetbutton = document.querySelector(".AC")

let firstNum = ""
let nextNum = ""
let operator = ""


function operate(a, b, operator) {

    a = parseFloat(a);
    b = parseFloat(b);

    if (operator === "+") {
        return a + b
    } else if (operator === "-") {
        return a - b
    } else if (operator === "*") {
        return a * b
      } else  (operator === "/"); {
        if (b === 0) {
            return "XD"
        } else {
            return a / b
        }

    }

}

numbuttons.forEach(numbutton => {
    numbutton.addEventListener("click", () => {

        const value = numbutton.textContent;


        if (value === "." && ((operator === "" && firstNum.includes(".")) || (operator !== "" && nextNum.includes(".")))) {
            return
        }

        if (operator === "") {        

        firstNum += numbutton.textContent; 
        displayValue.textContent = firstNum; }

        else {

            nextNum += numbutton.textContent; 
            displayValue.textContent = firstNum + " " + operator + " " + nextNum

        }
    });
});

operatorsbuttons.forEach(operatorbutton => {

    operatorbutton.addEventListener("click", () => {

        if (firstNum === "") 
            return 

        if (nextNum === "") {
        operator = operatorbutton.textContent;
        displayValue.textContent = firstNum + " " + operator + " " + nextNum

    } else {

        let result = operate(firstNum, nextNum, operator);
        firstNum = result.toString();
        nextNum = "";
        operator = operatorbutton.textContent;
        displayValue.textContent = firstNum + " " + operator + " ";

       }
    })
});

equalbutton.addEventListener("click", () => {

    if (firstNum !== "" && nextNum !== "" && operator !== "") {

        let result = operate(firstNum, nextNum, operator);
        displayValue.textContent = result;
        firstNum = result.toString(); 
        nextNum = "";
        operator = "";

    }
});


resetbutton.addEventListener("click", () => {

    firstNum = "";
    nextNum = "";
    operator = "";
    displayValue.textContent = "0";

});
