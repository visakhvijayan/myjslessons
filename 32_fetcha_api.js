document.getElementById("button1").addEventListener("click", getText);

document.getElementById("button2").addEventListener("click", getJSON);

document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
  //fetch return promises inorder to collect the return from prom9ise you have to use the then
  fetch("test.txt")
    .then((res) => res.text())
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log("Error :" + err));
}

function getJSON() {
  //fetch return promises inorder to collect the return from prom9ise you have to use the then
  fetch("posts.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}

function getExternal() {
  //fetch return promises inorder to collect the return from prom9ise you have to use the then

  fetch("https://api.github.com/users")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}
