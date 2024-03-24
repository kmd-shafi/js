class Useer {
    constructor(username) {
      this.username = username;
    }
    logMe() {
      console.log(`username is ${this.username}`);
    }
  }
  
  class Teacher extends Useer {
    constructor(username, email, password) {
      super(username);
      this.email = email;
      this.password = password;
    }
    addcourse() {
      console.log(`A new course was added by${this.username}`);
    }
  }
  
  const user = new Teacher("shafi", "shaikshafi@123@gmail.com", "123");
  user.addcourse();
  // user.logMe();
  console.log(user instanceof Teacher);
  console.log(user instanceof Useer);
  
  const masalachai = new Useer("shabana");
  masalachai.logMe();