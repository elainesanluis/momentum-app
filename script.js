// Set Name
const nameInput = document.getElementById("nameInput");
const nameLabel = document.querySelector("label[for='nameInput']");
const setNameButton = document.getElementById("setNameButton");

//Will click add Button if Enter button is clicked
nameInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    setNameButton.click();
  }
});

setNameButton.addEventListener("click", function() {
  // Hide the label and input field after clicking the button
  nameLabel.style.display = "none";
  nameInput.style.display = "none";
  setNameButton.style.display = "none";
  editYourNameButton.style.display = 'none';
});

// Current Time and Greeting
const timeElement = document.getElementById("currentTime");
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  timeElement.textContent = timeString;

  const hour = now.getHours();
  const name = nameInput.value;

  const greeting = document.getElementById("greeting");

  if (hour >= 0 && hour < 12) {
    greeting.textContent = `Good morning, ${name || "User"}!`;
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = `Good afternoon, ${name || "User"}!`;
  } else {
    greeting.textContent = `Good evening, ${name || "User"}!`;
  }
}
updateTime();
setInterval(updateTime, 1000);

// Set Focus
const focusInput = document.getElementById("focusInput");
const focusLabel = document.querySelector("label[for='focusInput']");
const setFocusButton = document.getElementById("setFocusButton");
const focusContainer = document.getElementById("focusContainer");
const focusList = document.getElementById("focusList");

focusInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    setFocusButton.click();
    focusLabel.style.display = "none"; // Hide the label
    focusInput.style.display = "none"; // Hide the input
  }
});

setFocusButton.addEventListener("click", () => {
  const focusItemText = focusInput.value.trim();
  if (focusItemText !== "") {
    // Clear the existing focus list
    focusList.innerHTML = "";

    // Create a list item with a checkbox for the new focus item
    const focusItem = document.createElement("li");
    const focusCheckbox = document.createElement("input");
    focusCheckbox.type = "checkbox";
    focusItem.appendChild(focusCheckbox);
    focusItem.appendChild(document.createTextNode(focusItemText));

    focusCheckbox.addEventListener("change", () => {
      if (focusCheckbox.checked) {
        focusItem.style.textDecoration = "line-through";
      } else {
        focusItem.style.textDecoration = "none";
      }
    });

    // Add the new focus item to the focus list
    focusList.appendChild(focusItem);
    focusInput.value = ""; // Clear the input
  }
});

// Random Quote
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible. - Joel Brown",
  "The journey of a thousand miles begins with a single step. - Lao Tzu"

];
const randomQuote = document.getElementById("randomQuote");
randomQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Todo List
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");
// Add a click event listener to the "Add" button
addTodoButton.addEventListener("click", () => {
  // Get the text input value
  const todoInput = document.getElementById("todoInput").value;
  // Check if the input is not empty
  if (todoInput.trim() !== "") {
    // Create a new list item (<li>) element
    const todoItem = document.createElement("li");
    // Create a checkbox input element
    const todoCheckbox = document.createElement("input");
    todoCheckbox.type = "checkbox";
    // Append the checkbox and the text input value to the list item
    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(document.createTextNode(todoInput));
    // Add a change event listener to the checkbox
    todoCheckbox.addEventListener("change", () => {
      // If the checkbox is checked, add the "completed" class to the list item
      if (todoCheckbox.checked) {
        todoItem.classList.add("completed");
        // If the checkbox is unchecked, remove the "completed" class
      } else {
        todoItem.classList.remove("completed");
      }
    });
    // Append the new list item to the todo list
    todoList.appendChild(todoItem);
    // Clear the text input
    document.getElementById("todoInput").value = "";
  }
});

const todoButton = document.getElementById('todobutton');
const todoContainer = document.getElementById('todocontainer');
const addToDo = document.getElementById('addTodoButton')

todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo.click();
  }
});


// Add a click event listener to the "todobutton"
todoButton.addEventListener('click', () => {
  // Toggle the display style of the "todocontainer"
  if (todoContainer.style.display === 'none' || todoContainer.style.display === '') {
    todoContainer.style.display = 'block';
    todoContainer.classList.add('todoshow');
  } else {
    todoContainer.style.display = 'none';
  }
});

// New Quote
const addQuoteButton = document.getElementById("addQuoteButton");
const quoteList = document.getElementById("quoteList");
const quoteContent = document.getElementById("quoteContent");
const quoteContainer = document.getElementById("quotecontainer"); // Get a reference to the quotecontainer element

// Add an event listener to the input for the Enter key
document.getElementById("newQuoteInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default Enter key behavior (form submission)

    const newQuoteInput = document.getElementById("newQuoteInput").value;
    if (newQuoteInput.trim() !== "") {
      // Clear the existing list content
      quoteList.innerHTML = "";

      // Create a new list item for the entered quote
      const newQuoteItem = document.createElement("li");
      newQuoteItem.textContent = newQuoteInput;
      quoteList.appendChild(newQuoteItem);

      // Clear the input field
      document.getElementById("newQuoteInput").value = "";

      // Hide the quotecontainer
      quoteContent.style.display = "none";
      randomQuote.style.display = "none";
    }
  }
});

//add a click listener to the Quote Button
addQuoteButton.addEventListener('click', () => {
  // Toggle the display style of the "quoteContent" div element
  if (quoteContent.style.display === 'none' || quoteContent.style.display === '') {
    quoteContent.style.display = 'block';
    quoteContent.classList.add('quoteshow');
  } else {
    quoteContent.style.display = 'none';
  }
});

// Get references to the elements
const editNameButton = document.getElementById("editname");
const editYourNameButton = document.getElementById("edityourname");
const editNameContainer = document.getElementById("editnamediv");

// Variable to keep track of the modal state
let isModalVisible = false;

// When the "Edit Name" button is clicked
editNameButton.addEventListener("click", () => {
  if (!isModalVisible) {
    // If the modal is not visible, show it
    editNameContainer.style.display = "block";
    editYourNameButton.style.display = "block";
    editYourNameButton.classList.add("showeditbutton");
    isModalVisible = true;
  } else {
    // If the modal is visible, hide it
    editNameContainer.style.display = "none";
    editYourNameButton.style.display = "none";
    isModalVisible = false;
  }
});

// Prevent clicks inside the button from closing it
editYourNameButton.addEventListener("click", (event) => {
  event.stopPropagation();
});

editYourNameButton.addEventListener('click', function() {
  // Toggle the visibility of the nameInput label and input
  if (nameInput.style.display === 'none' || nameInput.style.display === '') {
    nameInput.style.display = 'inline-block';
    nameInputLabel.style.display = 'inline-block';
  } else {
    nameInput.style.display = 'none';
    nameInputLabel.style.display = 'none';
  }
});

const changefocusButton = document.getElementById('changefocus');
const editFocusButton = document.getElementById("editfocus");
const focusInputLabel = document.getElementById("focusInputLabel");

editFocusButton.addEventListener('click', function() {
  changefocusButton.style.display = 'inline-block'; // Show the "changefocus" button
  changefocusButton.classList.add("showeditbutton");
});

editFocusButton.addEventListener("click", (event) => {
  event.stopPropagation();
});

changefocusButton.addEventListener('click', function() {
  // Show the input label and input
  focusLabel.style.display = 'inline-block';
  focusInput.style.display = 'inline-block';

  // Hide the ul (focusList) and the changefocus button
  changefocusButton.style.display = 'none';
});

focusInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    // Hide the input label and input
    focusInputLabel.style.display = "none";
    focusInput.style.display = "none";
  }
});
