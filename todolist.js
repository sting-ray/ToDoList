"use strict";
class Item {
    constructor(text) {
        this.totalSeconds = 0;
        this.timerOn = false;
        this.text = text;
        const listItem = document.createElement("li");
        const timer = document.createElement("span");
        const timerText = document.createTextNode("00.00");
        timer.className = "timer";
        timer.appendChild(timerText);
        listItem.appendChild(timer);
        timer.addEventListener("click", this.timerSwitch.bind(this));
        this.timerElement = timer;
        const textNode = document.createTextNode(text);
        listItem.appendChild(textNode);
        const closeItem = document.createElement("span");
        const closeItemText = document.createTextNode("\u00D7");
        closeItem.className = "close";
        closeItem.appendChild(closeItemText);
        listItem.append(closeItem);
        closeItem.addEventListener("click", this.removeItem);
        const list = document.getElementById("myUL");
        list.appendChild(listItem);
    }
    timerSwitch() {
        this.timerOn = !this.timerOn;
        if (this.timerOn) {
            this.timerElement.className = "timerActive";
        }
        else {
            this.timerElement.className = "timer";
        }
    }
    //TODO: timer only increases if browser is active, may need to look at re-writing this to work from date/time instead
    increaseTimer() {
        this.totalSeconds++;
        const hours = Math.trunc(this.totalSeconds / 3600);
        const remainder = this.totalSeconds % 3600;
        const minutes = this.numberPadding(Math.trunc(remainder / 60));
        const seconds = this.numberPadding(remainder % 60);
        let finalText = '';
        if (hours == 0) {
            finalText = minutes + '.' + seconds;
        }
        else {
            finalText = hours + ':' + minutes;
        }
        this.timerElement.innerText = finalText;
    }
    numberPadding(number) {
        let string = number.toString();
        if (string.length == 1) {
            string = '0' + string;
        }
        else if (string == '0') {
            string = '00';
        }
        return string;
    }
    //TODO improve (still same task from the original tutorial)
    removeItem(event) {
        const parent = this.parentElement;
        parent.style.display = "none";
    }
}
const items = [];
function newItem(event) {
    const inputTextObject = document.getElementById("myInput");
    const inputText = inputTextObject.value;
    items.push(new Item(inputText));
    inputTextObject.value = "";
}
const addButton = document.getElementById("addBtn");
addButton.addEventListener("click", newItem);
//TODO put into class
const list = document.querySelector("ul");
list.addEventListener("click", itemClick);
function itemClick(event) {
    if (event.target) {
        const target = event.target;
        target.classList.toggle("checked");
    }
}
const timer = setInterval(everySecond, 1000);
function everySecond() {
    for (let i = 0; i < items.length; i++) {
        if (items[i].timerOn) {
            items[i].increaseTimer();
        }
    }
}
