let stringInput='calculate';
let count=0;
for(let i=0;i<stringInput.length-1;i++){
    let charString=stringInput.charAt(i);
    if(charString=='a'){
        count++;
    }
}
console.log("The number of a in the string ",stringInput," is ",count);

let swapNumber=[1,5,6,7,8,10];
console.log("the number array before swapping ",swapNumber);
let temp=swapNumber[0];
swapNumber[0]=swapNumber[1];
swapNumber[1]=temp;
console.log("the number array after swapping ",swapNumber);

