const containerScreen = document.querySelector(".screen-container");
const resetBtn = document.querySelector(".reset");
const changeColorBtn = document.querySelector(".change-color");
let A1,
	A2,
	A3 = 1;
function getRandomMulti() {
	let min = 5;
	let max = 9;
	return Math.floor(Math.random() * (max - min) - min + 1);
}

function createGrid(size) {
	let max = 16;
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			const div = document.createElement("div");
			div.classList.add("grid-element");
			div.textContent = "256";
			div.addEventListener("mouseover", () => handleMouseover(div));
			div.addEventListener("click", () => handleEraseGridElement(div));
			containerScreen.appendChild(div);
		}
	}
}
function handleMouseover(div) {
	div.style.backgroundColor = "black";
	return;
}
function handleEraseGridElement(div) {
	if (parseInt(div.textContent) == 0) {
		div.textContent = "256";
		return;
	}
}
function handleButtons() {
	resetBtn.addEventListener("click", () => handleReset());
	changeColorBtn.addEventListener("click", () => handleChangeColor());
}
function handleReset() {
	const divs = document.querySelectorAll(".grid-element");
	divs.forEach((div) => {
		div.textContent = "256";
		div.style.backgroundColor = "white";
	});
	return;
}
function handleChangeColor() {
	//let alpha = getRandomMulti();
	A1 = getRandomMulti();
	A2 = getRandomMulti();
	A3 = getRandomMulti();
}

window.onload = () => {
	createGrid(16);
	handleButtons();
};
