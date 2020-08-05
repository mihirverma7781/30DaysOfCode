<<<<<<< HEAD
let heading = document.getElementById("heading");
heading.className = "changebg";
heading.className = +"changefont";
heading.className += "changefont";
heading.classList.add("changecl");
heading.classList.remove("changecl");

heading.innerHTML = "this is new heading";
console.log(heading);
console.log(typeof heading);

let heading2 = document.getElementById("heading2");
console.log(heading2);

const list = document.getElementById("list");
// list.textContent = 'hi there' --> changes the content
console.log(list.textContent);
list.innerHTML = "<h1>hi there</h1>";
console.log(list.innerHTML);

// query selector

const list = document.querySelector("#list");
console.log(list);

const list = document.querySelector("li");
const list = document.querySelectorAll("li");
console.log(list);

const li = document.querySelectorAll(".listitem");
console.log(li);

const head = document.getElementById("heading");
head.style.color = "yellow";
head.style.backgroundColor = "black";

const li = document.querySelectorAll("li");
// li[1].style.backgroundColor="yellow";
for (let i = 0; i < li.length; i++) {
  li[i].style.color = "white";
  li[i].style.backgroundColor = "blue";
}
li[0].style.cssText = "background-color:black;font-size:20px; color:white;";

const heading = document.querySelector(".heading");

const button = document.querySelector(".btn");
button.onclick = () => {
  // alert('continue')
  console.log("clicked");
  heading.style.cssText = "background-color:coral;color:yellow";
};

button.onmouseover = () => {
  // console.log('mouseover')
  heading.style.cssText = "background-color:coral;color:white";
};

const clickButton = () => {
  console.log("clicked btn");
};
const heading = document.querySelector(".heading");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  heading.style.cssText = "background-color:coral;color:white";
});
const heading = document.querySelector(".heading");
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  heading.style.cssText="background-color:coral;color:white";
  console.log(e.target);
});
const paragraph = document.querySelector(".paragraph");
console.log(paragraph.getAttribute("id"));
console.log(paragraph.getAttribute("class"));
paragraph.setAttribute("style", "background-color:coral;");
paragraph.removeAttribute("style");
console.log(paragraph.hasAttribute("class"));

const list = document.getElementById("listitem");
console.log(list.parentNode);
console.log(list.parentNode.parentNode);

const listitems = document.querySelector(".list");
console.log(listitems.childNodes);
console.log(listitems.firstChild);
console.log(listitems.firstElementChild);

console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

const newel = document.createElement("li");
console.log(newel);
const text = document.createTextNode("blog");
console.log(text);

newel.appendChild(text);
console.log(newel);
listitems.appendChild(newel);
listitems.insertBefore(newel, listitems.children[0]);

listitems.removeChild(newel);
console.log(listitems);
=======
let heading = document.getElementById("heading");
heading.className = "changebg";
heading.className = +"changefont";
heading.className += "changefont";
heading.classList.add("changecl");
heading.classList.remove("changecl");

heading.innerHTML = "this is new heading";
console.log(heading);
console.log(typeof heading);

let heading2 = document.getElementById("heading2");
console.log(heading2);

const list = document.getElementById("list");
// list.textContent = 'hi there' --> changes the content
console.log(list.textContent);
list.innerHTML = "<h1>hi there</h1>";
console.log(list.innerHTML);

// query selector

const list = document.querySelector("#list");
console.log(list);

const list = document.querySelector("li");
const list = document.querySelectorAll("li");
console.log(list);

const li = document.querySelectorAll(".listitem");
console.log(li);

const head = document.getElementById("heading");
head.style.color = "yellow";
head.style.backgroundColor = "black";

const li = document.querySelectorAll("li");
// li[1].style.backgroundColor="yellow";
for (let i = 0; i < li.length; i++) {
  li[i].style.color = "white";
  li[i].style.backgroundColor = "blue";
}
li[0].style.cssText = "background-color:black;font-size:20px; color:white;";

const heading = document.querySelector(".heading");

const button = document.querySelector(".btn");
button.onclick = () => {
  // alert('continue')
  console.log("clicked");
  heading.style.cssText = "background-color:coral;color:yellow";
};

button.onmouseover = () => {
  // console.log('mouseover')
  heading.style.cssText = "background-color:coral;color:white";
};

const clickButton = () => {
  console.log("clicked btn");
};
const heading = document.querySelector(".heading");
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  heading.style.cssText = "background-color:coral;color:white";
});
const heading = document.querySelector(".heading");
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  heading.style.cssText="background-color:coral;color:white";
  console.log(e.target);
});
const paragraph = document.querySelector(".paragraph");
console.log(paragraph.getAttribute("id"));
console.log(paragraph.getAttribute("class"));
paragraph.setAttribute("style", "background-color:coral;");
paragraph.removeAttribute("style");
console.log(paragraph.hasAttribute("class"));

const list = document.getElementById("listitem");
console.log(list.parentNode);
console.log(list.parentNode.parentNode);

const listitems = document.querySelector(".list");
console.log(listitems.childNodes);
console.log(listitems.firstChild);
console.log(listitems.firstElementChild);

console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

const newel = document.createElement("li");
console.log(newel);
const text = document.createTextNode("blog");
console.log(text);

newel.appendChild(text);
console.log(newel);
listitems.appendChild(newel);
listitems.insertBefore(newel, listitems.children[0]);

listitems.removeChild(newel);
console.log(listitems);
>>>>>>> 57f04bb713f30b500ab18f7dd8758861934e3de0
