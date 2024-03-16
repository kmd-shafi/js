//singleton
//Object.create()=>constructor.method 🚁  object deceleration 


//object literals 👇🏻


const mySym=Symbol("key1")

const jsuser={
    name:"shafi",
    "full name":"mohammed shafi",
    [mySym]:"123456",
    age:18,
    email:"shaikshafi5259@gmail.com",
    location:"ananthapuramu",
    isloggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsuser.name);
// // or
// console.log(jsuser["name"]);

// console.log(jsuser["full name"]);

// console.log((jsuser[mySym]));

// jsuser.location="Bangalore"
// Object.freeze(jsuser)//=>freeze

// jsuser.location="hgdvt"//=>no changed 
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello");
}

jsuser.greeting2=function(){
    console.log(`hello js ${this.name}`);
}

// jsuser.greeting="hello"

console.log(jsuser.greeting());
console.log(jsuser.greeting2());