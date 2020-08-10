//ES5 prototype library (Later we will change this to ES6 Fetch Api)

// Constructor
function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP Get Request

EasyHTTP.prototype.get = function (url, callback) {
  // Similar to the xhr object we created previously
  this.http.open("GET", url, true);
  // this.http.onload = () => {
  //   // If we use the normal function instead arrow function we will get a error showing, "easyhttp.js:15 Uncaught TypeError: Cannot read property 'status' of undefined".Why because the this will act as function itself inside the function
  //   if (this.http.status === 200) {
  //     console.log(this.http.responseText);
  //   }
  // };

  // ES5 Solution "Cannot read propert status error", this object issue
  let self = this;
  this.http.onload = function () {
    // ES5 : If we use the normal function her we will get a error showing, "easyhttp.js:15 Uncaught TypeError: Cannot read property 'status' of undefined".Why because the this will act as function itself inside the function
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error " + self.http.status, null);
    }
  };
  this.http.send();
};
// Make an HTTP POST Request
EasyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);
  // Set the content type
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.response);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP PUT Request
EasyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);
  // Set the content type
  this.http.setRequestHeader("Content-type", "application/json");
  let self = this;
  this.http.onload = function () {
    callback(null, self.http.response);
  };
  this.http.send(JSON.stringify(data));
};

// Make an HTTP DELETE Request
EasyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error " + self.http.status, null);
    }
  };
  this.http.send();
};
