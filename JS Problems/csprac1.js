//problem 1

var stringInput='calculate';
function numberOfA(stringInput){
let count=0;
for(let i=0;i<stringInput.length-1;i++){
    let charString=stringInput.charAt(i);
    if(charString=='a'){
        count++;
    }
}
console.log("The number of a in the string ",stringInput," is ",count);
}
numberOfA(stringInput);

//problem 2
var swapNumber=[1,5,6,7,8,10];
function swapNumberFunction(){
console.log("the number array before swapping ",swapNumber);
let temp=swapNumber[0];
swapNumber[0]=swapNumber[1];
swapNumber[1]=temp;
console.log("the number array after swapping ",swapNumber);
}
swapNumberFunction(swapNumber);

//problem 4
var student={
    name:"Tarannum",
    age:'10',
    country:'Bangldesh'
};

//problem 5

function calculator(e,a){
    if(typeof(e)!="Number" && typeof(a)!="Number"){
        console.log("Not a valid number");
    }

    function add(e,a){
        var sum=e+a;
        console.log( "THe sum is ",sum);
    }
    add(e,a);
    function substract(e,a){
        var subtraction=e-a;
        console.log("the subtraction is ", subtraction);
    }
    substract(e,a);
    function multiply(e,a){
        var multiplication=e*a;
        console.log("THe multiplication is ", multiplication);
    }
    multiply(e,a);
    substract(e,a);
    function division(e,a){
        
        if(a==0){
            console.log("math error denominator cannot be 0");
           
        }
        else{
            var dividedResult=e/a;
            console.log("THe division result is ",dividedResult);
        }
    }
    division(e,a);
}
calculator(20,10);

