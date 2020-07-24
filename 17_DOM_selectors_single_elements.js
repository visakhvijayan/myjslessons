//document.getElementById()

const taskTitle = document.getElementById("task-title");
console.log(taskTitle);

// Get things from the element

console.log(taskTitle.id);

// Change Styling
taskTitle.style.background = "#333";
taskTitle.style.color = "white";
taskTitle.style.padding = "5px";
// to make the things dissappear
// taskTitle.style.display = "None";

//Change content
taskTitle.textContent = "Task List";
taskTitle.innerText = "My Task";
document.getElementById(
  "task-title"
).innerHTML = `<span style="color:red">Task List</span>`;

//document.querySelector() , get the first one
console.log(document.querySelector("#task-title")); // # for ids, Just like css
console.log(document.querySelector(".card-title")); // . for class, Just like css
console.log(document.querySelector("h5"));

document.querySelector("li").style.color = "red"; // ONly affect the first item
document.querySelector("ul li").style.color = "blue"; // ONly affect the first item
document.querySelector("li:last-child").style.color = "green"; // Using css Pseudo class
document.querySelector("li:nth-child(3)").style.color = "brown"; // Pseudo class nth child
document.querySelector("li:nth-child(4)").textContent = "black";
document.querySelector("li:nth-child(odd)").style.background = "grey"; // this will only work for the first odd element, similar for even
