var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    li.classList.add("listItem");
	li.appendChild(document.createTextNode(input.value));
    li.appendChild(createDeleteButtonElement());
	ul.appendChild(li);
	input.value = "";
}

function createDeleteButtonElement(){
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("X"));
    deleteButton.classList.add("custBtn");
    deleteButton.addEventListener("click", deleteAfterClick );
    return deleteButton;
}

function deleteAfterClick(event){
    var target = event.target;
    console.log("delte button click " +target.nodeName);
    target.parentNode.parentNode.removeChild(target.parentNode);
    
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);