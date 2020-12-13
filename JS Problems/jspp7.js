var idInput=document.getElementById("id_input");
var buttonInput=document.getElementById('show_output');
var showOutput=document.getElementById('output_para')


//async await application
const getUser=async function(id){
    const res=await fetch(`https://reqres.in/api/users/${id}`);
    const data= await res.json();
    console.log(data);
    return data;
}
function display(){
var outputValue=getUser(idInput.value);
const newOutput=JSON.stringify(outputValue);
showOutput.innerHTML=newOutput;
idInput.value='';
}
//buttonInput.addEventListener('click',display);


//