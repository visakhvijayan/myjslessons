const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[3].style.color = "red";
items[2].textContent = "third";

const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item"); // Select the classes under the ul only
console.log(listItems);

// document.getElementsByTagName

let lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "green";
lis[0].textContent = "First";

lis = Array.from(lis); //The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.

console.log(lis);
lis.reverse();
lis.forEach((li, index) => {
  console.log(li.className);
  li.textContent = `${index} item`;
});

for (item in lis) {
  console.log("for :" + item);
}

let liOdd = document.querySelectorAll("li:nth-child(odd)");
let liEven = document.querySelectorAll("li:nth-child(even)");

liEven.forEach((li, index) => {
  li.style.background = "#ccc";
});

liOdd = Array.from(liOdd);
for (li in liOdd) {
  liOdd[li].style.background = "green";
}
