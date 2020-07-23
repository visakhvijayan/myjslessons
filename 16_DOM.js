/* DOM : Document Object Model
--------------------------------
# Tress of nodes/elements created by the browser
# JS can be used to read/write/manipulate to the DOM */
let val;

val = document;
val = document.all;
val = document.all[0];
val = document.all[1];
val = document.all[2];
val = document.all.length; // Count all the elements
val = document.head; // Getting only head element
val = document.body; // Getting only body element
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.contentType;

val = document.links;
val = document.links[0].className;
val = document.scripts;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;
console.log(typeof scripts);
let scriptsArr = Array.from(scripts); // Converting to array

// Foreach only applicable to Array
scriptsArr.forEach((script) => {
  console.log(script);
});

scriptsArr.map((script) => {
  console.log(script);
});
console.log(val);
