// function multipleBy5(num) {
//   return num * 5;
// }
// multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// proto inharitance => chiled=>parant=>parant.....🚁
//new gives a instance=>{}

function createUser(username, score) {
    this.username = username;
    this.score = score;
  }
  createUser.prototype.increment = function () { //=>createing new method
    console.log(this.score++);
  };
  createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
  };
  const chai = new createUser("shafi", 25);
  const tea = createUser("shabana", 250);
  chai.printMe();
  chai.increment();