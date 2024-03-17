// immediately invoked function expressions (IIFE)

// (function chai(){  //=> named iife
//     console.log(`DB CONNECTED`);
// })();

// ()()  =>first (),=>function defination and second (),=>funtion extinction call
// ; => end the code

((name)=>{  //=>un-named iife
    console.log( `${name},DB CONNECTED`);
})("shafi")