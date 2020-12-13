// promise method

const getUserIdEmail=setTimeout(function(){
    fetch(`https://reqres.in/api/users/`).then(response=>response.json()
    ).then(data=>{
        const id=data.data.map((item)=>{
            return item.id;
        });
        console.log(id);
        const email=data.data.map((item)=>{
            return item.email;
        });
        console.log(email);
        var idAndEmail={
            ID:id,
            EMAIL:email,
        }
        console.log(idAndEmail);
        
    });
},3000);
console.log(getUserIdEmail);

//async await application
const getUser=async function(id){
     const res=await fetch(`https://reqres.in/api/users/${id}`);
     const data= await res.json();
     console.log(data);
}
getUser(2);
//how to wrap promise in setTimeout
// const promiseTimeOut=(ms)=>{
//     new Promise=((resolve)=>window.setTimeout(resolve,ms));
// }
// console.log("Waiting 1s");
// await promiseTimeOut(1000);
// console.log("it was a whole second !!!")
console.log("couldnt solve for promise wrapped around setTimeOut see code")


