const a=100;//=>global scope 
if(true){
    let a=10;
    const b=20;//=>local scope
    var c=30;
}
// console.log(a);
// console.log(b);
// console.log(c);


// closer

function one(){
    const userName="shafi";
    function two(){
   const webSite="youtube"
   console.log(userName);
    }
    // console.log(webSite);//=>error
    two()
}
// one()


if(true){
    const userName=" shafi"
    if(userName===" shafi"){
        const webSite="youTube";
        // console.log(webSite+userName);
    }
    // console.log(webSite);//=>error
}
// console.log(userName);//=>error


//👇🏻

addone(5)
function addone(value){
    return value + 1
}
// addone(5)


// two(6)=>error
const two=function(value2){ //=>two =>expirations 
    return value2 +2
}
two(6)



