function cart(){
     
    this.item=[];
     function addItem(e){
        cart.item.push(e);
    };
    function removeItem(e){
        var valueToRemove=e;
        cart.item.filter(e=>e!=valueToRemove);
    };



}

var ourCart=new cart();
var car1 = {name:"Toyota",price:'20000'};
var  car2= {name:"BMW",price:'25000'};
ourCart.addItem(car1);
ourCart.addItem(car2);

ourCart.removeItem(car2);


