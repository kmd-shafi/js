const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
e.preventDefault()
const height=document.querySelector("#height").value
const weight=document.querySelector("#weight").value
const results=document.querySelector("#results")
const Weight_text=document.querySelector("#Weight_text")

if(height===""|| height<0 || isNaN(height)){
    results.innerText=`please give a valid hight ${height}`
}else if(height===""|| height<0 || isNaN(height)){
    results.innerText=`please give a valid hight ${height}`
} else{
    const bmi=(weight / ((height*height)/10000)).toFixed(2)
    results.innerText=bmi
    if (bmi<18.6) {
        Weight_text.innerText=`Under Weight`
    } else if ( bmi<18.6 && bmi>24.9) {
        Weight_text.innerText=`Normal Range`
    } else{
        Weight_text.innerText=`Overweight`       
    } 
}
})



