const http = new EasyHTTP();

// Get Posts
// const posts = http.get("https://jsonplaceholder.typicode.com/posts/2");

// console.log(posts);
// Getting all posts
// http.get("https://jsonplaceholder.typicode.com/posts", (error, posts) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }
// });

// // Getting single posts
// http.get("https://jsonplaceholder.typicode.com/posts/2", (error, post) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Create Posts
// const data = {
//   title: "Custome post",
//   body: "This is a custom post",
// };
// http.post("https://jsonplaceholder.typicode.com/posts", data, (error, post) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Update posts
// const data = {
//   title: "Custome post",
//   body: "This is a custom post new",
// };
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   (error, post) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log(post);
//     }
//   }
// );
// Delete Rquest
http.delete("https://jsonplaceholder.typicode.com/posts/2", (error, post) => {
  if (error) {
    console.log(error);
  } else {
    console.log(post);
  }
});
