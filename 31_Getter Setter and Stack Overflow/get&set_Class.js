class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
    get email() {
      return this._email.toUpperCase();
    }
    set email(value) {
      this._email = value;
    }
  
    get password() {
      return `${this._password}helloshafi`;
    }
    set password(value) {
      this._password = value;
    }
  }
  const user = new User("shaikshafi@4578158@gmail.com", "123456778");
  console.log(user.email);
  console.log(user.password);
  