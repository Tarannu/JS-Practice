//Prctice  1 question 1
//The answer is Helloworld , Undefined, and one error



//Practiece 1 question 2
// console.log(num1+Number(nume2))

//Practice 1 Question 3
let name1="Samya";
let name2="Ahmed";
let name3="Islam";
//using ternary operation
let max=name1>name2&&name1>name3?name1:name2>name1&&name2>name3?name2:name3>name1&&name3>name2?name3:null;
console.log("The max name is ",max);

//practice 1 question 4
let mark=prompt('Enter number','Mark');
let rounMark=0;
let grade="";
if(mark>79){
    rounMark=Math.round(mark);
    grade="A+"
}
else{
    rounMark=Math.round(mark);
    grade="doesnt matter what your grade is"
}
console.log("The mark is ",rounMark,"and grade is",grade);

//practice 1 question 5
let employee={
    name: 'Ahmed',
    Age: 20,
    Skills:{
        softSkills:['c++','java', 'javaScript','HTML'],
        technicalSkills:['Telecomm','full stack'],
    },
    location: 'florida'

};
let qualified=employee.age>=30&&employee.Skills.technicalSkills.length>employee.Skills.softSkills.length&&employee.location=='florida'?'yes':'no';

console.log("The employee is qualified? ",qualified);