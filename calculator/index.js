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

//Operation handle
let OPERATION_MODE = false;
let OPERATOR1 = 0;
let OPERATOR2 = 0;

function handleButtonNumber(btn) {
	if (OPERATION_MODE) {
		return;
	}
	const num = btn.textContent;
	if (result.textContent === "0") {
		result.textContent = num;
		return;
	}
	//console.log(num.length);
	//console.log(result.textContent);
	result.textContent = result.textContent + num;
	let resultLength = result.textContent.replace(/^\s+|\s+$/gm, "");
	console.log(resultLength.length);
	//Length goes up by two for some reason
	switch (resultLength.length) {
		case 11:
			result.style.fontSize = "60pt";
			break;
		case 15:
			result.style.fontSize = "48pt";
			break;
		case 17:
			result.style.fontSize = "36pt";
			break;
	}
}
