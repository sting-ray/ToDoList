"use strict";
const list = document.querySelector("ul");
list.addEventListener("click", itemClick);
const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", newElement);
function itemClick(event) {
    if (event.target) {
        const target = event.target;
        target.classList.toggle("checked");
    }
}
function removeTask(event) {
    const parent = this.parentElement;
    parent.style.display = "none";
}
// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const myUL = document.getElementById("myUL");
    const myInput = document.getElementById("myInput");
    const inputValue = myInput.value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        myUL.appendChild(li);
    }
    myInput.value = "";
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.addEventListener("click", removeTask);
}
