class User {
    constructor(username) {
      this.username = username;
    }
    logMe() {
      console.log(`username:${this.username}`);
    }
    static createId() {
      return `123`;
    }
  }
  const hitesh = new User("shafi");
  // console.log(hitesh.createId());
  
  class teacher extends User {
    constructor(username, email) {
      super(username);
      this.email = email;
    }
  }
  const iphone = new teacher("shafi", "shaikshafi123");
  iphone.logMe();
  