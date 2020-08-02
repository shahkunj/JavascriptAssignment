var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul")
var item = document.getElementsByTagName("li")

function inputLength(){
    return input.value.length;
}

function listLength(){
    return item.length;
}

window.localStorage.setItem('saveInput',input)

function createListElement() {
   let li = document.createElement("li"); // This is creating the element li(html)
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


function crossOut(){
    li.classList.toggle("done");
}
li.addEventListener("click",crossOut);


// Delete Button
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem)

function deleteListItem(){
    li.classList.add("delete")
}
}

function addListAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
}
function addListAfterKeypress(event){
    if (inputLength() > 0 && event.which === 13){
        createListElement();
    } 
}

enterButton.addEventListener("click",addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)