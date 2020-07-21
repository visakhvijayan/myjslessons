const name = "Visakh";
const age = 29;
const job = "Full stack developer";
const city = "Bengaluru";
let html;
function welcome() {
  return "Hello visakh";
}
// wothout template string(es5)
html =
  "<ul>" +
  "<li>Name : " +
  name +
  "</li>" +
  " <li>Age : " +
  age +
  "</li>" +
  "<li>Job : " +
  job +
  "</li><li>City : " +
  city +
  "</li></ul>";

// with template string or literals
html = `<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2 + 2 / 2}</li>
<li>${welcome()}</li>
</ul>`;

document.body.innerHTML = html;
