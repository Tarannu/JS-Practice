//adjacency matrix
const adjacencyMatrix=[
    [0,1,1,0,1],
    [1,0,0,0,0],
    [1,0,0,1,1],
    [0,0,1,0,1],
    [1,0,1,1,0],
];
console.log("The ajacency matrix is ",adjacencyMatrix);
//adjacency list using array and linkedList

class ListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class LinkedList{
    constructor(head){
        this.head=head;
    }
}
var node1=new ListNode('A');
var node2=new ListNode('B');
var node3=new ListNode('C');
var node4=new ListNode('D');
var node5=new ListNode('E');


var list1=new LinkedList(node1);


const adjacencyList=[
    node1.next={node2,node3,node5},
    node2.next={node1},
    node3.next={node1,node4,node5},
    node4.next={node3,node4},
    node5.next={node1,node3,node4}
];
console.log("The Adjacency list in array and linkedList");
console.log(adjacencyList);
//Factorial

function factorial(num){
    if(num<1) return 1
    else{
        return num=num*factorial(num-1);
    }

}
var fact=factorial(5);
console.log("Factorial of 5 is ",fact);