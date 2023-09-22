let loaders = document.getElementById("loader");
let body = document.getElementById("body");
// window.onload = (event) => {
//
//   alert("done");
// };
function loadx() {
  loaders.classList.add("done");
  body.classList.remove("fixed");
}
