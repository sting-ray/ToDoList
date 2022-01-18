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


// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li") as HTMLElement;
    const myUL = document.getElementById("myUL") as HTMLElement;
    const myInput = document.getElementById("myInput") as HTMLInputElement;
    const inputValue = myInput.value;
    const t = document.createTextNode(inputValue);
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