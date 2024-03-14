let score=33
console.log(typeof score);
// or
console.log(typeof(score));

let marks="33"
console.log(typeof marks);


let valueInNumber=Number(marks) // change string to number
console.log(typeof valueInNumber);


//NaN=>not a number

//# number conversions 
// note
//"33"=>33
//"33abc"=>NaN
//"true"=>1,false=>0
//"NaN"=>0
//"undefined"=>NaN


//#boolean conversions 
let isLoggegIn=""
let booleanIsLoggedIn=Boolean(isLoggegIn)
console.log(booleanIsLoggedIn);


//1=>true,0=>false 

//""=>false,"shafi"=>true

//#string conversions 
let someNumber=33
let stringNumber=String(someNumber);
console.log(someNumber)//33
console.log(typeof stringNumber);//string
