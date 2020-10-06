let threeNum=[20,34,10];
let max=0;
for(let i=0;i<threeNum.length;i++){
    
    if(threeNum[i]>max){
        max=threeNum[i];
    }
}
console.log("max of three numbers ",max);

let fourNum=[12,23,1,9]
max=0;
for(let i=0;i<fourNum.length;i++){
    
    if(threeNum[i]>max){
        max=fourNum[i];
    }
}
console.log("max of three numbers ",max);

function getType(e){
    //e.preventDefault();
    console.log("Type of Variable is ",typeof(e));
}
let a=1;
getType(threeNum);
getType(a);

function student(e){
    return e;

}
var bob=new student("Bob");

console.log("custom type student is ",bob);

function teacher(e){
    return e;
}
var sir=new teacher("sir");
console.log("custom type teacher is ",sir);
