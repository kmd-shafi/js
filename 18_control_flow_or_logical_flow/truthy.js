// const userEmail=[]

// if(userEmail){ //=>truthy
//     console.log("got user email");
// }else{
//     console.log("not get email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undifind, NaN  

//truthy value
// "0", "false", " ", [], {}, function(){}


// if(userEmail.length === 0){
// console.log("array is empty");
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length === 0){
// console.log("object is empty");
// }


// false==0  =>true 
// false=="" =>true
// 0=='' =>true


//Nullish Coalescing Operator(??): null undefined 🚁

// let val1;
// val1=5 ?? 10
// console.log(val1);

// let val2;
// val2=null ?? 10
// console.log(val2);

// let val3;
// val3=undefined ?? 20
// console.log(val3);


// Terniary Operator 🚁

// condition ? true :false 

const iceTeaPrice=100

iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80"); 
