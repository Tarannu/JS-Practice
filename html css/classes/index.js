//selectors
var weightInput1=document.getElementsByClassName('.weightinput1');
var heightInput1=document.getElementsByClassName('.heightinput1');
var weightInput2=document.getElementsByClassName('.weightinput2');
var heightInput2=document.getElementsByClassName('.heightinput2');
const mybutton=document.getElementById("myBtn");

//event selector
mybutton.addEventListener('click',printOutput);

//function
function printOutput(e){
    
    let divider1=Math.pow(heightInput1.value,2);
    let result1=(weightInput1.value/divider1);
    let bmi1=result1.toString();

    console.log("The Bmi of person 1 is ",bmi1);
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


