// const descripter=Object.getOwnPropertyDescriptor()

// const pi = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi);
// console.log(Math.PI);

let obj = {
    name: "shafi",
    age: 18,
    Avilable: true,
    local: function () {
      console.log("hello");
    },
  };
  console.log(Object.getOwnPropertyDescriptor(obj, "name"));
  Object.defineProperty(obj, "name", { writable: false, enumerable: false });
  console.log(Object.getOwnPropertyDescriptor(obj, "name"));
  // console.log(obj);
  
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== "function") {
      console.log(`${key}:${value}`);
    }
  }