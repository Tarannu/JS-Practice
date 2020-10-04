//selectors
var weightInput1=document.querySelector('.weightinput1');
var heightInput1=document.querySelector('.heightinput1');
var weightInput2=document.querySelector('.weightinput2');
var heightInput2=document.querySelector('.heightinput2');
const mybutton=document.getElementById("myBtn");

//event selector
mybutton.addEventListener('click',printOutput);

//function
function printOutput(e){
    e.preventDefault();
    //person 1 BMI
    let divider1=Math.pow(heightInput1.value,2);
    let result1=(weightInput1.value/divider1);
    let bmi1=result1.toString();
    //person 2 BMI
    let divider2=Math.pow(heightInput2.value,2);
    let result2=(weightInput2.value/divider2);
    let bmi2=result2.toString();
    console.log("THE BMI APP STARTS HERE .... ")
    console.log("The Bmi of person 1 is ",bmi1);
    console.log("The BMI of person 2 is ",bmi2);
    if(bmi1>bmi2){
        console.log("Person 1 BMI is greater than person 2")
    } else{
        console.log("Person 2 BMI is greater than person 1 ")
    }
}

//hw question 2 code
var personInformation={
    name: 'Bebo',
    age:20,
    educattion:['Bachelors',' IIT',' 2020' ],
    address:{
        presentAddress: {
            street:'8960 nw 8th st',
            city: 'Miami',
        },
        permanentAddress:{
            street:'10317 NW 7th st',
            city:'Orlando',
        },

    },
    skills: {
        technical:['c++','Java','JavaScript','HTML','CSS'],
        soft:['MS VISO','Visual Code','R Studio'],
    },
    experience:{
        companyName:'Microsoft',
        role:'Software Engineer',
        activeYear:2015-2018,
        currentlyWorking:false,
    },
};
console.log("The HW 1 question 2 answer is as follows click on the button for question 1 will be showed from 3rd output");
console.log("Hi, my name is",personInformation.name, "I am", personInformation.age," years old. My present address is", personInformation.address.presentAddress.street,personInformation.address.presentAddress.city,
" I took my",personInformation.educattion[0]," from", personInformation.educattion[1],". I am currently working in ",
 personInformation.experience.companyName," as a",personInformation.experience.role,".");


