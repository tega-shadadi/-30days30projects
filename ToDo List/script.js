/*
-Add Event listener on +,
-onclick store in a variable
-then get the li HTML and wrap around the variable.
-then put it as innerHTML into <ul>.
*/

// Initialize the todoItems array
let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [
  "Respond to Emails ASAP!!!",
  "Attend the meeting with HR",
  "Call of duty Black Ops"
];

// Load and render items on page load
loadStorage();
console.log(todoItems)
renderItems();

//Adding Event listener to Add button
const addButton = document.querySelector(".input-plus-icon-js")

addButton.addEventListener('click',()=>addItems())

function renderItems(){
  loadStorage();
  todoItems.forEach((todoItem, index) => {
    document.querySelector(".list-items").innerHTML+=
      `
      <li class="list-item" data-index="${index}">
          <span>${todoItem}</span>
          <div>
            <img src="./images/pen-fill.svg" alt="Edit">
            <img src="./images/trash3.svg" class="trash-js" alt="Delete">
          </div>
        </li>
      `    
  });
}

function addItems(){
  //Saving input value to a Variable
  const todoItem = document.querySelector(".todo-input-field-js").value
  console.log(todoItems)
  if (todoItem !== ""){
    todoItems.push(todoItem)
    saveToStorage();
    
    document.querySelector(".list-items").innerHTML = "" //first clear the existing HTML and re-render afresh
    document.querySelector(".todo-input-field-js").value="";
    renderItems();
    
  
  }
}

function saveToStorage(){
  localStorage.setItem("todoItems",JSON.stringify(todoItems));
}
function loadStorage() {
  // Load items from localStorage and update the todoItems array
  const storedItems = JSON.parse(localStorage.getItem("todoItems"));
  if (storedItems) {
    todoItems = storedItems;
  }
}


// Add event listener to the input field for the "Enter" key

document.querySelector(".todo-input-field-js").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItems(); // Call the same function as the "+" button
  }
});

//The delete function

deleteButton = document.querySelector(".trash-js")
deleteButton.addEventListener('click',()=>deleteItem())

function deleteItem(){  
  const listItem = target.closest(".list-item"); // Find the closest <li> element
  if (listItem) {
    console.log(listItem.dataset.index); // Log the data-index value
  }
}

 
