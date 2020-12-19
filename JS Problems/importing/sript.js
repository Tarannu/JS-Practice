import Cart from "/cart";
import User from "/user";

const user=new User("Bob");
console.log(user);
const cart=new Cart(1000,"chocolate",10,1);
console.log(cart);