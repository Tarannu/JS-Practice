

//variables

let firstArray=['h',true,12,'test'];
let duplicateArray=[12,1,12,345];
let sumArray=[12,1234343,34545,4545];
let missingNumber=[1,2,3,6,8,9,10];

//finding out the first number value from an array
for(let i=0; i<firstArray.length;i++){
    if(typeof(firstArray[i])=='number'){
        console.log("The number from first array is ",firstArray[i]);
    }
}
//finding out duplicate of number
let left=0;
let right=duplicateArray.length;

for(right;right>0;right--){
   if(duplicateArray[left]==duplicateArray[right]){
    console.log("Duplicate is ",duplicateArray[left]);
}
   else left++;
}

//sum of integers
let sum=0;
for(let i=0;i<sumArray.length;i++){
    sum+=sumArray[i];
}
console.log("The sum of the array is ",sum);

//find missing number
for(let i=0;i<missingNumber.length-1;i++){
    let increment=missingNumber[i]+1;
    if(missingNumber[i+1]!=increment){
        console.log("Missing number is ",increment);
    }    
}