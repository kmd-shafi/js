//object literal =>normal object🚁
//this=>current context

// const user = {
//   username: "shafi",
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function () {
//     console.log("got user details from database", this.username);
//   },
// };

// console.log(user.getUserDetails());
// or
// console.log(user["username"]);

// -constructor function🚁
// const promiseOne=new Promise() new=>constructor function =>new gives a instance=>{}
function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
      console.log(`welcome ${this.username}`);
    };
    return this;
  }
  const userone = new User("shafi", 12, true);
  const user2 = new User("shabana", 14, true);
  // console.log(userone);
  // console.log(user2);