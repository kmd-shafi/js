// lexical scope

//  function inif() {
//     let name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     displayName();
//   }
//   inif();

//closer 🚁

//   function inif() {
//     let name = "shafi";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
//   const myname = inif();
//   myname();

//
// closer example
// document.querySelector("#black").addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });
// document.getElementById("blue").onclick = function () {
//   document.body.style.backgroundColor = "blue";
// };

function colorChanger(colors) {
    //   document.body.style.backgroundColor = colors;
    return function () {
      document.body.style.backgroundColor = colors;
    };
  }
  
  document.getElementById("blue").onclick = colorChanger("blue");
  document.getElementById("black").onclick = colorChanger("black");