// Es6 =>2015

//this=> current context => { username,price}
//context => value =>"shafi"

// const user={
//     username:"shafi",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcom to websites `);
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username="hello"
// user.welcomeMessage()

// console.log(this); //current context=> {}


//👇🏻
// console.log(this); //current context=> window


// function chai(){
//     let username="shafi"
//     console.log(this);//=>we con't use this in functions 
// }

// chai()


// const chai=function(){ //=>expiration 
//     let username="shafi"
//     console.log(this);//=>we con't use this in functions
// }


//arrow
// const chai=()=>{
//     let username="shafi"
//     console.log(this);//=>we con't use this in functions
// }

// const sum=(num1,num2)=>{
// return(num1+num2)  //explesit return
// }
// console.log(sum(3,4));




// const sum=(num1,num2)=>(num1+num2)//=> implesit return

// console.log(sum(3,4));


// const obj=()=>({username:"shafi"})
// console.log(obj());


