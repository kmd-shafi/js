const promiseOne = new Promise(function (reslove, reject) {
    setTimeout(function () {
      console.log("aysic task is compelete");
      reslove();
    }, 1000);
  });
  promiseOne.then(() => {
    console.log("promise consumed");
  });
  
  //or
  
  new Promise(function (reslove, reject) {
    setTimeout(() => {
      console.log("ayic task two");
      reslove();
    }, 1000);
  }).then(function () {
    console.log("ayic task two reslove");
  });
  
  //
  
  const promiseThree = new Promise(function (reslove, reject) {
    setTimeout(() => {
      reslove({ username: "shafi", email: "shaikshafi@123gmail.com" });
    }, 1000);
  });
  
  promiseThree.then((user) => {
    console.log(user);
  });
  
  //
  
  const promiseFour = new Promise(function (reslove, reject) {
    setTimeout(() => {
      let error = true;
      if (!error) {
        reslove({ username: "shafi", password: "123" });
      } else {
        reject("error: sumting went worng");
      }
    }, 1000);
  });
  promiseFour
    .then((user) => {
      console.log(user);
      return user.username;
    })
    .then((username) => {
      //=>call back hell or chinning 🚁
      console.log(username);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("the promise is reslove or rejected");
    });
  
  //
  
  const promiseFive = new Promise(function (reslove, reject) {
    setTimeout(() => {
      let error = true;
      if (!error) {
        reslove({ username: "javascript", password: "123" });
      } else {
        reject("error: js went worng");
      }
    }, 1000);
  });
  
  async function cunsumepromiseFive() {
    try {
      const responce = await promiseFive;
      console.log(responce);
    } catch (error) {
      console.log(error);
    }
  }
  cunsumepromiseFive();
  
  //
  
  // async function getallusers() {
  //   const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const data = await responce.json();
  //   console.log(data);
  // }
  // getallusers();
  
  //or
  
  // async function getallusers() {
  //   try {
  //     const responce = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await responce.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }
  // getallusers();
  
  //or
  
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((responce) => {
  //     return responce.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });