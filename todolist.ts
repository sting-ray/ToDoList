class Item {
    text: string;
    timer = 0;
    timerOn = false;

    constructor(text: string) {
        this.text = text;

    }
}

const list = document.querySelector("ul") as HTMLElement;
list.addEventListener("click", itemClick);

const addButton = document.getElementById("addBtn") as HTMLElement;
addButton.addEventListener("click", newElement);

function itemClick(this: HTMLElement, event: Event) {
    if (event.target) {
        const target = event.target as HTMLElement
        target.classList.toggle("checked");
    }
}

function removeTask(this: HTMLElement, event: Event) {
    const parent = this.parentElement as HTMLElement;
    parent.style.display = "none";
}

function startTimer(this: HTMLElement, event: Event) {
        const timerOn = setInterval(increaseTimer, 1000, this);
}

function increaseTimer(timer: HTMLElement) {
    let number = parseInt(timer.innerText);
    number++;
    timer.innerText = number.toString();
}


// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li") as HTMLElement;
    const myUL = document.getElementById("myUL") as HTMLElement;
    const myInput = document.getElementById("myInput") as HTMLInputElement;
    const inputValue = myInput.value;
    const t = document.createTextNode(inputValue);

    const timer = document.createElement("span");
    const timerText = document.createTextNode("0");
    timer.appendChild(timerText);
    li.appendChild(timer);
    timer.addEventListener("click", startTimer);

    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
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