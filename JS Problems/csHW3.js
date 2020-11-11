//bubble sort
var unsortedArray=[24,10,14,37,14];
console.log("Before sorting "+unsortedArray);
swapped="false";

for(let i=0;i<unsortedArray.length-1;i++){
    //runs a loops from the unsorted array starting point to the last element
    if(swapped="false"){
    // if the variable swapped is false that means that the recheck has not been run so it goes in the for loop again
        for(let i=0;i<unsortedArray.length-1;i++){
            if(unsortedArray[i]>unsortedArray[i+1]){
                var temp=unsortedArray[i+1];
                unsortedArray[i+1]=unsortedArray[i];
                unsortedArray[i]=temp;
                //the last three lines swaps left element with right element
                var swapped='true';
                //because the swap has been made now the variable swapped is considere true no need to run another loops now the array is sorted
            }
            else swapped='false'
            //when left element is not greater than right swapped is set to false so that the array can be checked again from beginning to end
        }
    }

}


console.log("After sorting in Bubble Sort "+unsortedArray);

function swap(left,right){
    let temp=right;
    right=left;
}
//Selection Sort
unsortedArray=[24,10,14,37,14];

for(let i=0;i<unsortedArray.length-1;i++){
    //the loop run for upto the array last element -1
    let min=i;
    //min is set to the first iteration of the array before sorting
    for(let j=i+1;j<unsortedArray.length;j++){
    // next a loop is run starting from the next element of in to the last element to find another min
    if(unsortedArray[j]<unsortedArray[min]){
        //if the current element in the array in the iteration is smaller its index is set to min index
        min=j;
    }
    //else firstUnsortedAraryPosition++;
    }
    temp=unsortedArray[i];
    unsortedArray[i]=unsortedArray[min];
    unsortedArray[min]=temp;
    //the above three lines performs the operation of swapping the elements at min index and at current index after min is set
}
console.log("After selection sort "+unsortedArray);


