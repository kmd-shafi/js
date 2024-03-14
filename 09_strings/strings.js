// "shafi"+"hello"=>concatenate 
// (` `)=> string interpolation 

const name="shafi"
const age=25


console.log(`hello ${name} sir please tell me your age ${age}`) //=>string interpolation

// (string declare) =>two types 
//1) const name="shafi" 2)👇🏻

const gamename=new String('shafi-call-me-sir')//=>52 methods of string new=>key word (protoType-methods or functions)

console.log(typeof gamename);//=> object 

//exampls of some methods
console.log(gamename.toUpperCase());

console.log(gamename[0]);

console.log(gamename.__proto__);//we can use like also console.log(gamename.(methos))

console.log(gamename.length);

console.log(gamename.charAt(2));

console.log(gamename.indexOf("i"));

const newString=gamename.substring(0,4)
console.log(newString);

const anotherString=gamename.slice(-9,4)
console.log(anotherString);

const newstringone="              shafi              hello     udwug     "//=> remove (staring space) and (ending space)
console.log(newstringone);
console.log(newstringone.trim());

const url="https://shafi.com/shafi%20mohammed"
console.log(url.replace("%20","-"));

console.log(url.includes("shafi"))

console.log(gamename.split('-'))




