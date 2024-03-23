// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// setInterval(() => {
//   console.log("hello");
// }, 2000);

// let clear;
// document.querySelector("#start").addEventListener("click", () => {
//   clear = setTimeout(() => {
//     document.querySelector("h1").innerText = "hello shafi";
//   }, 2000);
// });

// document.querySelector("#stop").addEventListener("click", () => {
//   clearTimeout(clear);
// });

let clear;
document.querySelector("#start").addEventListener("click", () => {
  if (clear==null) {
    clear = setInterval(() => {
      let date = new Date();
      document.querySelector("h1").innerText =
        "hello shafi " + date.toLocaleTimeString();
    }, 2000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(clear);
  clear=null;
});
