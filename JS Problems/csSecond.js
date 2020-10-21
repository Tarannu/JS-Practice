

let str='ababcd';
let countA=0;
let countB=0;
let countC=0;
let countD=0;
for(let i=0;i<=str.length;i++){
    
    if(str.charAt(i)=='a'){
        countA++;
    }
    if(str.charAt(i)=='c'){
        countC++;
    }
    if(str.charAt(i)=='b'){
        countB++;
    }
    if(str.charAt(i)=='d'){
        countD++;
    }
    
}
console.log("Frequency of a is ",countA," frequency of b is ",countB," frequency of C is ",countC," frequency of d is ",countD);
// problem 1 aternate solution
let count=[];
let length=26;
for(let i=0;i<length;i++){
    count[str.charAt(i)-'a']++; //if theres a repition the array ammount will increment to more than 1
}
for(let i=0;i<length;i++){
    if(count[str.charAt(i)-'a']!=1){

        let num = count[str.charAt(i)-'a']
        console.log("The frequency of", str.charAt(i)," is ",num);
    } 
}




//problem 2
var arr=[1,2,5,20,30,40,50,60,55,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98,99,100];
const check={};
for(let i=1;i<=100;i++){
    check[i]=0;
}

for(let i=0;i<arr.length;i++){
    check[arr[i]]=1;
}

for(let data in check){
    if(check[data]===0) console.log("Missing Number is ",data);
}

//problm 3 this logic is not working
let duplicateArr=[4,3,5,1,6,2,4,6,3,3]
let duplicateCounter={};
for(let i=1;i<=duplicateArr.length;i++){
    duplicateCounter[i]=0;
}

for(let i=0;i<duplicateArr.length;i++){
    duplicateCounter[duplicateArr[i]]+=1;
}
for(let data in duplicateCounter){
    if(duplicateCounter[data]>1) console.log("Duplicate number is ",data);
}

//problem 5
let rev='abcdab';
console.log("The string before reverse ",rev)
var revArr=Array.from(rev);
for(let i=0;i<revArr.length-1;i++){
    for(let j=revArr.length-1;j>0;j--){
        var temp=revArr[i];
        revArr[i]=revArr[j];
        revArr[j]=temp;
    }

}

console.log("The string after reverse ",revArr.join(""));

//problem 6

    var stack=[1,3];
    let sLength=10;
    var el=prompt("enter number to push ");
    //var el=prompt('Enter element to push to stack ');
    var top=-1;
    function push(el){
        if(top>=sLength-1){
            console.log("Stack is full");
        }
        else{
            top++;
            stack.push(el); //this is a way to add extra element in a array
            console.log(el+" was pushed into stack "+ stack);
            //stack.length++;
        }

    }
    push(el);
    function size(stack){
        console.log("The size of stack is "+stack.length );
    }
    size(stack);
    function pop(stack){
        console.log("The element popped is "+stack[stack.length-1]);
        top--;
        return stack[stack.length-1];
    }
    pop(stack);

    //Problem 7
    // function reverse(any){
    //     let strStack=[];
    //     console.log("string before reverse in stack "+any);
    //     let rev='';
    //     for(let i=0;i<=any.length;i++){
    //         strStack.push(any);
    //     }
    //      for(let i=any.length-1;i>0;i--){
            
    //         rev.push(strStack);
    //        // break;
    //     }

    //     console.log("String after reverse "+rev);
    // }
    // reverse(str);

    //problem 8

    let queue=[1,3];
    let qLength=10;
    let front=rear=-1;

    function enqueue(el)
    {
        if(rear>=qLength-1){
            console.log("overflow");
        }
        else if(front == rear==-1){
            front=rear=0;
            queue.push(el);
            console.log=("The queue after enqueue is "+queue);
        }
        else{
        rear++;
        queue.push(el);
        console.log("The queue after enqueue is "+queue);
        
        }
    }

    enqueue(20);
    function size(any){
        console.log("Size of the queue is ",any.length);
    }
    size(queue);
    function dequeue(){
        if(front == rear==-1){
            console.log("Queue is empty");
        } else if(front==rear){
            front=rear=-1;
        }
        else{  
        console.log("The element after dequeue "+queue[0] );    
        front++;
        for (let i = 0; i < queue.length; i++) { 
            queue[i] = queue[i + 1]; 
            //queue.length--;
        }
        queue.length--;
        console.log("The queue after dequeue is "+queue); 
        }
        
    }
    dequeue();

    queue=[];
    //Problem 9
    function decimalToBinary(any){
       // console.log("The binary of "+any+" is "+any.toString(2));
        for(let i=1;i<=any;i++){
            var bin=i.toString(2);
            queue.push(bin);

        }
        console.log("The binary from 1 to 10 : ")
        console.log(queue);
    }
    decimalToBinary(10);
//HASH TABLE
//problem 10  
str='ababcd';
var frequency={};
function hashFunc(c){
    return(c-'a');
}
function countStr(str){
    for(let i=0;i<str.length;i++){
        //let c=str.charAt(i);
        let index=hashFunc(str[i]);
        if(frequency[index]=='undefined'){
            frequency[index]=0;
        }
        frequency[index]++;
    }
    for(let i=0;i<26;i++){
        
        console.log(" frequency "+frequency[i]) // why cant I print the frequency index i?
    }

}
countStr(str);
//Linked list
//problem 11
function LinkedList(){
    var length=0;
    var head=null;
    var Node=function(element){
        this.element=element;
        this.next=null;
    };
    this.head=function(){
        return head;
    }
    this.size=function(){
        return length;
    }
    this.addAtHead=function(element){
        var prev=new Node();
        var newNode=new Node();
        prev=head;
        head=newNode;
        head.next=prev;
        size++;
    }
    this.deleteFromHead=function(){

        head=head.next;
        size--;       

    }
    // this.printList=function(){
    //     var curr=this.head;
    //     var str="";
    //     while(curr){
    //         str+=curr.element+"";
    //         curr=curr.next
    //     }
    //     console.log(str);

    // }

}
var ll=new LinkedList();
ll.addAtHead(10);
ll.addAtHead(20);
ll.deleteFromHead();
console.log(ll);


