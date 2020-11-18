console.log("The output should have ben'The ball s of color green' but both ball and green appear as undefined ")
var myObj = {
    type: 'ball',
    color: 'green',
     
    introduce: () => {
        setTimeout(() => {
            console.log(`The ${myObj.type} is of color ${myObj.color}`);//here this cannot call the types of myObj hence myobj is used to call its objects
        }, 1000);
    },
};
 
myObj.introduce();

//Creating Hashmap

class HashMap{}
HashMap.prototype.get=function(map,key){
    return map[key];
   
}
var map=new HashMap();
map[1]=10;
map[2]=12;
map[3]=15;
console.log(map);
var keyValue=map.get(map,1);
console.log("Value at key 1 is "+keyValue);

HashMap.prototype.add=(map,key,value)=>{
    return map[key]=value;
}
map.add(map,1,30);
console.log("after adding new value at key 1 ")
console.log(map);

HashMap.prototype.remove=(map,value)=>{
   for(let i=1;i<map.length;i++){
    map.filter(()=>{
        return map[i]!=12;
    })
   }
}
console.log("after removal ")
map.remove(map,12);
console.log(map);





