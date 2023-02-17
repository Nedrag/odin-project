const container = document.querySelector(".container");

const p = document.createElement("p");
const h = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p2 = document.createElement("p");

p.style.color = "red";
p.textContent = "Hey Im red!";
h.style.cssText = "color: blue; font-size: 16px;";
h.textContent = "Hey im blue h3!";
div.style.cssText =
	"background-color: pink; border-color: black; border-width: 10px;";

h1.textContent = "im in a div";
p2.textContent = "ME TOO!";
div.appendChild(h1);
div.appendChild(p2);

container.appendChild(p);
container.appendChild(h);
container.appendChild(div);
