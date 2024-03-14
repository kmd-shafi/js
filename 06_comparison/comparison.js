// console.log(2>1);//true
// console.log(2>=1);
// console.log(2<1);
// console.log(2<=1);
// console.log(2!=1);



console.log("2">0);
console.log("02">0);//true"2"=> change to number

console.log(null>0);//null is convert=>0
console.log(null>=0);
console.log(null==0);//(false) it's not convert the null to number

// inconsistency 🚀
//a==b => equality it's not convert the value



//#note
// the reason is that an (equality check == )and (comparisons >, < ,>= ,<= )work differently
//comparisons convert (null) to a number, treating it as 0.
//that's whay null>=0 is true and null>0 is false


console.log(undefined<=0);//false undefined is not convrted to number



//strictly check 
console.log("2"===2)