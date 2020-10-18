

// Problem 1
var num = prompt("Enter number to get stars");
console.log("Printing star pattern of number ",num);    

    var str = "";
    for (var j = 1; j <= num; j++) {
    str += "*";
    console.log(str);
  }

//problem 2

//console.log("Mid is",sortedArray[mid]);
function binarySearch(sortedArray,element){
    this.sortedArray=sortedArray;
    this.element=element;
    let start=0;
    let end=sortedArray.length-1;
    let result='false';
    while(start<=end){
    let mid=start+(end-1)/2;
    if(sortedArray[mid]===element){
        result='true';
        return result;        
    }else if(sortedArray[mid]>element){
        //move left
        end=mid-1;
    } else{
        //move right
        start=mid+1;
    } 

    }
    console.log("result is found ",result);
    
    
}
let sArray=[1,2,5,8,9,15,24,30,41,53,60];
let element=41;

binarySearch(sArray,element);

//problem 3
let student=["alice", "jamie"];
let marks=[85,77];
function grade(student,marks){
for(let i;i<=marks.length;i++){
if(marks[i]>=80){
    console.log("the grade of ",student[i]," is A+");
}
else if(mark[i]>=70){
    console.log("the grade of ",student[i]," is A");
}
else if(mark[i]>=60){
    console.log("the grade of ",student[i]," is A-");

}
else{
    console.log("the grade of ",student[i]," is fail");
}
}
}
grade(student,marks);

//problem 4
