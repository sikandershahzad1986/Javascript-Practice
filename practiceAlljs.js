let arr = [1,2,3,4];
let arr1 = [5,6,7];

// let result = arr.map((n) => n*n)
// let arr1 = arr.push(5);
// let arr1 = arr.pop();
// let arr1 = arr.filter( n => n>3)
//let arr1 = arr.find(n => n==1);

//let arr2 = arr.concat(arr1); // combines two arrays
//let arr2 = [...arr,...arr1]; // combines two arrays using spread operator

let obj1 = {
    name:"sikander",
    age:26,
}

let obj2 = {
    nm:"Shahzad",
    agee:29,
}

//console.log(obj1.hasOwnProperty("age")); // hasOwnProperty, Object.key, Object.values
//let obj3 = {...obj1, ...obj2}; // merge two objects
//let obj3 = Object.assign({},obj1,obj2); // merge two objects

function adder(num1,num2,opr)
{
    switch (opr)
    {
        case '+':
            return num1+num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '*':
            return num1*num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return "Invalid";

    }
}

// console.log(adder(3,5,"p"));

let dt = new Date();
//console.log(dt.toLocaleDateString()); // date methods

let num1 = 33;
let num2 = 10000000;
let num3 = 12.3654789122547;
//console.log(num1.toString()); // number to string
//console.log(typeof String(num1)); // number to string and checking its type
//console.log(num2.toLocaleString()); // includes commas in huge values
//console.log(num3.toFixed(2)); // to fix two decimals values
//console.log(num3.toPrecision(3)); // to set 3 digits

//console.log(Math.floor(num3)); // floor the number
console.log(Math.ceil(num3)); // ceil the number



//console.log(Math.floor((Math.random()*10))); generate random number




