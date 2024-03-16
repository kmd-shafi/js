// const numbers=[1,2,3,4,5,6,7,8]
// console.log(numbers[0]);

const superHeros=new Array("shafi","shabana","basha","ayesha")
// array methods

// superHeros.push("hello")
// superHeros.push("hi")
// superHeros.pop()

// superHeros.unshift("sir")//=> add from staring
// superHeros.shift()//=>remove from staring 


// console.log(superHeros.includes("shafi"));

// const newArray=numbers.join()//=>it's convort to array to string 

// console.log(newArray);



//slice, splice 🚁

const array=new Array(1,2,3,4,5)

console.log("A",array);

const myn1=array.slice(1,3)//=>it changes the copy of value
console.log(myn1);

console.log("B",array);

const myn2=array.splice(1,3)//=>it changes the original value 
console.log(myn2);

console.log("c",array);



