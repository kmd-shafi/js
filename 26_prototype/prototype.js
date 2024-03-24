let myname = "shafi     ";
// console.log(myname.length);

// console.log(myname.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    // console.log(`spiderman power is ${this.spiderman}`);
  },
};

Object.prototype.shafi = function () {
  //   console.log(`shafi is present in all objects`);
};

Array.prototype.heyshafi = function () {
  //   console.log("shafi says hello");
};

heroPower.shafi();
myHeros.shafi();

myHeros.heyshafi();

//inheritance 🚁
const user = {
  name: "shafi",
  email: "shaikshafi@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, //inheritance 🚁
};
Teacher.__proto__ = user; //inheritance 🚁

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); //inheritance 🚁

// console.log(TeachingSupport.makeVideo);
// console.log(TASupport.isAvailable);
// console.log(Teacher.name);

let anoutherUsername = "shafi     ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`true lenth is:${this.trim().length}`);
};
// anoutherUsername.trueLength();
"javascript".trueLength();
"tea".trueLength();