// A callback function is a function passed as a parameter inside another function

// With out call back
// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" },
// ];

// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post Three", body: "This is post three" });
// getPosts();

// With Callback
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts); // Now getposts will pass through as ana arg and called where callback () is called, ie at the end
