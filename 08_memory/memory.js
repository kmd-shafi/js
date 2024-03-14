// Two types os memory

//1- stack-(primitive data tpye)  & 2-Heap-(non-primitive data tpye)


//stack
let myYouTubeName="shafi@123455" // it changes the copy
let anotherYoutubeNmae=myYouTubeName;

anotherYoutubeNmae="123456"

console.log(myYouTubeName);
console.log(anotherYoutubeNmae);

//heap
let userOne={  // it changes original value
    name:"shafi",
    age:25
}

let userTwo=userOne;

userTwo.age=24

console.log(userOne);
console.log(userTwo);

