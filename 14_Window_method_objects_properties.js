// WINDOW METHODS/ OBJECTS / PROPERTIES

//window.console.log("console is also part of window object");
//console.log("console is also part of window object");

// Alert
//window.alert("Alert is also part of window object");
//alert("Alert is also part of window object");

// Prompt
// const input = prompt();
// alert(input);

//confirm
// if (confirm(`Are you sure`)) {
//   // It will return boolean value based on the option selected
//   console.log("Ok Clicked");
// } else {
//   console.log("Cancel Clicked");
// }

// Outer Height and Width
let val;
val = outerHeight;
val = outerWidth;
val = innerHeight;
val = innerWidth;
val = location;
val = location.hostname;
val = location.pathname;
val = location.href;
val = location.search; // get the value from address bar
//location.href = "http://google.com"; // it will go to that particular site
// To reload the page
//location.reload(); // Constantly reload

//history object
//history.go(-3); // go back to that page depends on the number
val = history.length;

//Navigator Object
val = navigator.appVersion; // Getting all the browser details
val = navigator.userAgent;
val = navigator.platform;

console.log(val);
