
function name(){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("f");
    console.log("i");
}
// name()

function sum(a,b){//=>parameters 
    // console.log(a+b);
    return(a+b)
}
const result=sum(3,4)//=>a,b argument 
// console.log("Results: ",result);


function loginUser(userName="sir"){
    if(!userName){
console.log("please enter user name");
return
    }
    return(`${userName} just logged in `)
}
// const user=loginUser("shafi")
// console.log(user);

// console.log(loginUser());


function clculatCardPrice(...num1){ //=>...rest operator
return(num1)
}
// console.log(clculatCardPrice(2,4,5,6)); 


const user={
    userName:"shafi",
    price:199
}
function handleObject(anyObject){
console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
// handleObject(user)
//or
// handleObject({userName:"shafi",
// price:199})


const array=[
    200,440,789,456
]

function returnSecndValue(getarray){
return(getarray[2])
}
// console.log(returnSecndValue(array))
//or
console.log(returnSecndValue([200,440,789,456]))
