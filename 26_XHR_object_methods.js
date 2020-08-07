document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();
  console.log(xhr.readyState);
  //OPEN
  xhr.open("GET", "26_data.txt", true); // (type of req , URL/File,ASynch( (bool) )
  //console.log(xhr.readyState);

  xhr.onload = function () {
    if (this.status === 200) {
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
      console.log(this.responseText);
    }
  };
  // Optional -used for spiiners/loaders
  //   xhr.onprogress = function () {
  //     console.log(xhr.readyState);
  //   };
  // Not recommended // Before onload we were checking with the ready state
  //   xhr.onreadystatechange = function () {
  //     console.log(xhr.readyState);
  //     if (this.status === 200 && this.readyState === 4) {
  //       console.log(this.responseText);
  //     }
  //   };
  xhr.onerror = function () {
    console.log("Request Error");
  };
  xhr.send();
  /* Ready State Values 
    0 : request not intitialized
    1 : server connection established
    2 : request received
    3 : Processing request
    4 : request finished and response is ready

/* HTTP Statuses
  200: "OK"
  403: "Forbidden"
  404: "Not Found"
  */
}
