//Row 1
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnPlus = document.querySelector("#plus");

//Row 2
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnMinus = document.querySelector("#minus");

//Row 3
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnTimes = document.querySelector("#times");

//Row 4
const btnZero = document.querySelector("#zero");
const btnDot = document.querySelector("#dot");
const btnEquals = document.querySelector("#equals");

//Row 5
const btnAC = document.querySelector("#AC");
const btnPlusMinus = document.querySelector("#plus-minus");
const btnPerecent = document.querySelector("#perecent");
const btnDivide = document.querySelector("#divide");
//Result
const result = document.querySelector("#result");
const currentSign = document.querySelector("#sign");

//Event handles for numbers
btnZero.addEventListener("click", () => handleButtonNumber(btnZero));
btnOne.addEventListener("click", () => handleButtonNumber(btnOne));
btnTwo.addEventListener("click", () => handleButtonNumber(btnTwo));
btnThree.addEventListener("click", () => handleButtonNumber(btnThree));
btnFour.addEventListener("click", () => handleButtonNumber(btnFour));
btnFive.addEventListener("click", () => handleButtonNumber(btnFive));
btnSix.addEventListener("click", () => handleButtonNumber(btnSix));
btnSeven.addEventListener("click", () => handleButtonNumber(btnSeven));
btnEight.addEventListener("click", () => handleButtonNumber(btnEight));
btnNine.addEventListener("click", () => handleButtonNumber(btnNine));
//Event for utility buttons
btnAC.addEventListener("click", () => clearScreen());
btnPlus.addEventListener("click", () => handleArithmetic(btnPlus));
btnEquals.addEventListener("click", () => handleArithmetic(btnEquals));
btnTimes.addEventListener("click", () => handleArithmetic(btnTimes));
btnDivide.addEventListener("click", () => handleArithmetic(btnDivide));
btnMinus.addEventListener("click", () => handleArithmetic(btnMinus));

//Operation handle
let SECOND_OPERAND = false;
let OPERATOR1 = ""; //Current string of numbers being displayed
let OPERATOR2 = ""; // Only used when it needs to do arithmetic
let PREVIOUS_BUTTON = "";

function handleButtonNumber(btn) {
	if (result.textContent.trim().length >= 8) {
		return;
	} // Fit check
	if (SECOND_OPERAND) {
		//console.log("INSIDE");
		OPERATOR2 = handleDisplay(btn, OPERATOR2);
		result.textContent = OPERATOR2;
		return;
	} //Second operand

	//console.log("OUTSIDE");
	OPERATOR1 = handleDisplay(btn, OPERATOR1);
	result.textContent = OPERATOR1;
	return; //First operand
}

function handleDisplay(btn, operator) {
	return operator + btn.textContent.trim();
}

function clearScreen() {
	//console.log(OPERATOR1);
	//console.log(OPERATOR2);
	OPERATOR1 = "";
	OPERATOR2 = "";
	currentSign.textContent = "";
	result.textContent = "";
	SECOND_OPERAND = false;
}

function handleArithmetic(btn) {
	if (btn.textContent.trim() !== "=") {
		PREVIOUS_BUTTON = btn.textContent.trim(); //Keeping track of the previous
		//button for equals operation
	}
	let OPERATION_MODE = btn.textContent.trim(); //Removes whitespace
	currentSign.textContent = OPERATION_MODE; //Changes the text so it displays the sign
	SECOND_OPERAND = true;
	console.log("right");
	let x = parseFloat(OPERATOR1);
	let y = parseFloat(OPERATOR2);
	if (OPERATOR1 !== "" && OPERATOR2 !== "") {
		switch (OPERATION_MODE) {
			case "+":
				OPERATOR1 = x + y; //Do the operation
				OPERATOR2 = ""; //Empty out
				result.textContent = OPERATOR1; //Display
				currentSign.textContent = ""; //Changes the text so it displays the sign
				break;
			case "-":
				OPERATOR1 = x - y; //Do the operation
				OPERATOR2 = ""; //Empty out
				result.textContent = OPERATOR1; //Display
				currentSign.textContent = ""; //Changes the text so it displays the sign
				break;
			case "x":
				OPERATOR1 = x * y; //Do the operation
				OPERATOR2 = ""; //Empty out
				result.textContent = OPERATOR1; //Display
				currentSign.textContent = ""; //Changes the text so it displays the sign
				break;
			case "/":
				if (y == 0) {
					result.textContent = "ERROR";
				}
				OPERATOR1 = x / y; //Do the operation
				OPERATOR2 = ""; //Empty out
				result.textContent = OPERATOR1; //Display
				currentSign.textContent = ""; //Changes the text so it displays the sign
				break;
			case "=":
				switch (PREVIOUS_BUTTON) {
					case "+":
						OPERATOR1 = x + y; //Do the operation
						OPERATOR2 = ""; //Empty out
						result.textContent = OPERATOR1; //Display
						currentSign.textContent = ""; //Changes the text so it displays the sign
						PREVIOUS_BUTTON = "";
						break;
					case "-":
						OPERATOR1 = x - y; //Do the operation
						OPERATOR2 = ""; //Empty out
						result.textContent = OPERATOR1; //Display
						currentSign.textContent = ""; //Changes the text so it displays the sign
						PREVIOUS_BUTTON = "";
						break;
					case "x":
						OPERATOR1 = x * y; //Do the operation
						OPERATOR2 = ""; //Empty out
						result.textContent = OPERATOR1; //Display
						currentSign.textContent = ""; //Changes the text so it displays the sign
						PREVIOUS_BUTTON = "";
						break;
					case "/":
						if (y == 0) {
							result.textContent = "ERROR";
						}
						OPERATOR1 = x / y; //Do the operation
						OPERATOR2 = ""; //Empty out
						result.textContent = OPERATOR1; //Display
						currentSign.textContent = ""; //Changes the text so it displays the sign
						PREVIOUS_BUTTON = "";
						break;
				}
		}
	}
}
