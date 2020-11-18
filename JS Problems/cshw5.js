

console.log("entered console")
class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    
}
var tree=new BinarySearchTree();
tree.root=new Node(15);
tree.root.left=new Node(10);
tree.root.right=new Node(25);
tree.root.left.left=new Node(8);
tree.root.left.right=new Node(13);

console.log(tree);

// finding depth of the tree
function maxdepth(node){
    if(node==null) return 0;
    else{
        var lDepth=maxdepth(node.left);
        var rDepth=maxdepth(node.right);
    }
    if(lDepth>rDepth) return lDepth+1;
    else return rDepth+1;
}

var depth=maxdepth(tree.root);
console.log("The size of the tree is ",depth);

//count number of nodes in a tree
function getNumberOfNodes(node){
    if(node==null) return 0;
    let count =1;
    if(node.left!=null){
        count+=getNumberOfNodes(node.left);
    }
    if(node.right!=null){
        count+=getNumberOfNodes(node.right);
    }
    return count;
   // else return getNumberOfNodes(node.left)+getNumberOfNodes(node.right)+1;

}
var nodeNumber=getNumberOfNodes(tree.root);
console.log("Number of Nodes "+nodeNumber);

//in order tree traversal
function inorder(node){
    if(node !=null){
        this.inorder(node.left);
        console.log("In Order "+node.data);
        this.inorder(node.right);
    }
}
var orderOfNode=inorder(tree.root);
function preorder(node){
    if(node !=null){
        console.log("Preorder "+node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}

orderOfNode=preorder(tree.root);
function postorder(node){
    if(node !=null){
        this.postorder(node.left);
        this.postorder(node.right);
        console.log("PostOrder "+node.data);
    }
}
orderOfNode=postorder(tree.root);

//Merge Sort
var unsortedArray=[25,5,17,2,20];
const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
      /*The shift method removes the element at the zeroeth index 
      and shifts the values at consecutive indexes down, 
      then returns the removed value*/
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
    /* concat joins two arrays */
  };
  
  
const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),//
        left = mergeSort(arr.slice(0, mid)),
        right = mergeSort(arr.slice(mid));
        /* The slice() method returns a shallow copy of a portion of an arr
        array object selected from start to end (end not included)  */
    return merge(left, right);
  };
  
  console.log(mergeSort(unsortedArray));

  //Reversing linkedList

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
var node1=new ListNode(1);
var node2=new ListNode(2);
var node3=new ListNode(3);
var node4=new ListNode(4);
node1.next=node2;
node2.next=node3;
node3.next=node4;
var list=new LinkedList(node1);

var reverseLinkedList=function(node){
    var current=node.head;
    var prev=null;
    while(current!=null){
    var next=current.next;
    current.next=prev;
    prev=current;
    current=next;
    }
    return node.head=prev;
}
console.log("reversed list starts from 4")
console.log(reverseLinkedList(list));

//recursive solution

var newreverseLinkedList=function(node){
   
    if(node.head==null||node.head.next==null) return node.head;
    var newHead=reverseLinkedList(node.head.next);
    node.head.next.next=node.head;
    node.head.next=null;
    return newHead;
    
}


console.log(newreverseLinkedList(list));
console.log("the recursive output shows null becuase it reverses the reveresed list")

//sum of numbers

var sumOfDigits=num=>{
    
}

//palindrome string
var pallString='anna'
var validpallindrome=function(s){
    if(s.length<2) return 'true';
    if(s[0]==s[s.length-1]){
        return validpallindrome(s.slice(1,s.length-1));
    }
    return 'false';
}

var pallindrome=validpallindrome(pallString);
console.log("Is it palindrome? ",pallindrome);

//binarry search tree sort
console.log("Before sort tree is ");
console.log(tree);
var sortedArray=[]
var sortTree=root=>{
    
    if(root !=null){
        this.sortTree(root.left);
        sortedArray.push(root.data);
        this.sortTree(root.right);
    }

    

}
sortTree(tree.root);
console.log("Tree after sorting in an array ",sortedArray);

//finding subseuquence

var subsequence=(str1,str2,m,n)=>{
    if(m==0) return true;
    if(n==0) return false;
    if(str1[m]==str2[n]){
    subsequence(str1,str2,m-1,n-1);
    }
    else subsequence(str1,str2,m,n-1);

}
str1='hac';
str2='cathac';
var validity='';
if(subsequence(str1,str2,str1.length,str2.length)) {
    console.log('True');
}
else console.log('false');

