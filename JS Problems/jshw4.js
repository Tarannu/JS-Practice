//Question 2
//Ecommerse Website

var product={
    productName:"Shampoo",
    productPrice: '5.00',
    getName: function(){
        console.log("Product name is "+this.productName+"Product Price is "+this.productPrice);

    },
    coupon: function(){
        let reducedPrice=this.productPrice*0.1;
        console.log("The price after applying coupon is ",reducedPrice);
    }
};
product.getName();
product.coupon();

//question 3
//appending array
var a=[1,2];
var b=[3,4,5];
a.push.apply(a,b);
console.log("array after extension ",a);