// let a = 20;
// a = 30;
// let a = 30; not allowed
//console.log(a); 

// will print 30, as the value can be changed while using let. 
// we cannot re declare variable in let.
// work only in block {}. not available outside the block



// const b = 650;
// // b= 500; not allowed because once const is declarec, cannot be changed.
// // no re declaration, work only in block {}, not available outside {}
// //console.log(b);

// if(b<500){
// //console.log(`${b} is less than 500`);
// }
// else {
// //console.log(`${b} is greater than 500`);

// }


// let n = 200;
// switch(n){
//     case 500:
//         console.log(`n is ${n}`);
//         break;
//     case 400:
//         console.log(`n is ${n}`);
//         break;
//     case 300:
//         console.log(`n is ${n}`);
//         break;
//         default:
//             console.log(`n is some thing else`);        

//}


//let arr = [2,4,6,8,10];

// Regular For Loop
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }

// While loop
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// For of loop
// for (const element of arr) {
//     console.log(element);
    
// }

// let obj = {
//     name:"vitz",
//     model: 2013,
//     color:"White",
// }

// for in loop
// for (const key in obj) {
//    console.log(obj[key]);
   
// }


// Functions declaration

// function adder(n1,n2)
// {
//     return n1+n2;
// }
// //console.log(adder(2,4));


// Function expression
// const add = function (n1,n2)
// {
//     return n1+n2;
// }
//console.log(add(5,5));



// function cal(n1,n2,op)
// {

// switch (op) {
//     case '+':
//       return n1 + n2;
//         break;
//     case '-':
//         return n1 - n2;
//         break;
//     case '*':
//         return n1 * n2;
//         break;
//     case '/':
//         return n1 / n2;
//         break;

//     default:
//         return 'Invalid Operator';
// }

// }

// console.log(cal(15,5,'5'));


// Arrow Functions

// let add = (n1,n2) => n1+n2;
// console.log(add(5,5));


// IIFE function
// (function() {
//     console.log("Hello");
    
// })();

// let car = {
//     name:"Vitz",
//     model:2013,
//     color:"White",
// }
//console.log(car.name);

//destructuring objects
// let {name, model, color} = car;
//console.log(color);

// let bike = {
//     nm:"Honda",
//     clr:"red",
// }

// combine objects using rest 
//let carbike = {...car, ...bike};
//console.log(carbike);

//let carbike = Object.assign({},car,bike);
//console.log(carbike);
 
// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));
//console.log(Object.keys(bike));


// function with objects
// function carDetail(anyobject)
// {
//     return `${anyobject.name} and ${anyobject.model}`
// }

// console.log(carDetail(car));

// Asynchronous Javascript

//setTimeout(function(){ console.log("Hello World");
// }, 2000); // runs after 2 seconds

// keep running after 2 seconds
// setInterval(() => {
//     console.log("sikander");
    
// }, 2000);

// let promise1 = new Promise(function(resolve,reject){
// let suc = false;
// if (suc) {
//     resolve("Promise fullfilled");
// }
// else {
//     reject("Promise rejected");
// }
// });

// promise1
// .then(function(data){
//     console.log(data);
    
// })
// .catch(function(err){
//     console.log(err);
    
// })
// .finally(function(finalmsg){
//     console.log("promise fullfilled or rejected");
    
// })


// async and await method for promise
// async function getData(){

// try {
//     let response = await promise1;
//     console.log(response);
// } catch (error) {
//     console.log(error);
    
// }

// }
// getData();

// nullish coalescing

//let a=20;
//console.log(a??=10); // if the value of a is not defined then 10 will be assigned to a


// default parameters in functions

// function adder(a=10, b=20)
// {
//     return a+b;
// }

// console.log(adder());


// let num = 10.256897;
// console.log(num.toFixed(2)); // fixed to two digits after point.
// console.log(num.toPrecision(3)); // keep 3 values including point


// let dt = new Date();
// console.log(dt.toDateString()); 



let arr = [2,4,6,8];

// push, pop, shift, unshift

// arr.push(12);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(100);
// console.log(arr);

// map function
// let newarr = arr.map(function(n){
//     return n+10;
// });
// console.log(newarr);

// filter in array

// let filterdata = arr.filter(function(n){
//     return n>6;
// })
// console.log(filterdata);

// destructing array
// let fruits = ["apple","banana","orange"];
// let [a,b,o] = fruits;
// console.log(o);


// constructor with inheritence 

class User{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
      
    }
   static greet()
    {
        console.log("Good Morning");
        
    }
}

class userDetail extends User{
    constructor(name,age, email,address)
    {
        super(name,age);
        this.email = email;
        this.address = address;
    }
}
let use1 = new userDetail("siki",38,"sik@gmail.com","Quetta")
//console.log(use1);

const grt = userDetail.greet.bind(User);
console.log(grt());

