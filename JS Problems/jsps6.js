//adding numbers
const addAll=numbers=>numbers.reduce((accumulator,current)=>{
    return accumulator+current;
},0)

console.log("The sum is ",addAll([1,-1,2,3]));
console.log("Same function with different inputs has sum ",addAll([10,10,30,40]))
//multiplying
const addMultiply=numbers=>numbers.reduce((accumulator,current)=>{
    return accumulator*current;
},1)

console.log("The multiplication is ",addMultiply([1,1,2,3]));
console.log("The multiplication after new argument is ",addMultiply([2,2,3,3]));

console.log("In question 3 all three ooutput will be undefined becuase variables are declared after calling function");

// Three methods to create exact copy of the array
var arrayToCopy=['hello','world','copy','me']
console.log("array to copy"+arrayToCopy);
var array1=[...arrayToCopy];
console.log("first copy using spread operation "+ array1);
array1.push.apply(arrayToCopy);
console.log("second copy "+array1);
array1.concat(arrayToCopy);
console.log("third copy "+array1);

//filtering array object

let students=[
    {name:'A',age:20,grades:[50,60,70],attendance:[1,0,1]},
    {name:'B',age:25,grades:[35,35,50],attendance:[1,1,1]},
    {name:'C',age:21,grades:[90,60,70],attendance:[1,1,0]},
    {name:'D',age:22,grades:[50,60,70],attendance:[1,0,1]},
];


students.forEach((element) => {
    console.log(element.name);
});
const filteredGrade=students.filter((item)=>{
    return item.attendance.forEach(element => {
        element==0;
    });
})
console.log(filteredGrade);// doesnt work I dont know why


