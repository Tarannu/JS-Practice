//selectors
var weightInput1=document.getElementsByClassName('.weightinput1').value;
var heightInput1=document.getElementsByClassName('.heightinput1').value;
var weightInput2=document.getElementsByClassName('.weightinput2').value;
var heightInput2=document.getElementsByClassName('.heightinput2').value;
const mybutton=document.getElementById("myBtn");


//event selector
mybutton.addEventListener('click',printOutput);

//function
function printOutput(e){

    let divider1=Math.pow(heightInput1,2)
    let bmi1=(weightInput1/divider1);
    console.log("The Bmi is ",Math.round(bmi1));
}

//console.log("the output type is ",typeof(bmi1));