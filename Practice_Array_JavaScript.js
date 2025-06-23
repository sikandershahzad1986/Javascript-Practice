let arr = [1,2,3,4,5];
let fruits = ['apple','banana','cherry'];
console.log(`Original Array => ${arr} with length ${arr.length}`);

//Push
arr.push(6);
console.log(`Push => ${arr}`);
// Pop
arr.pop();
console.log(`Pop => ${arr}`);
// Slice
let arr1 =arr.slice(1,3);
console.log(`Slice => ${arr1}`);
// Unshift
arr.unshift(10);
console.log(`Unshift => ${arr}`);
// Shift
arr.shift();
console.log(`Shift => ${arr}`);
// Includes
let arr2 = arr.includes(6);
console.log(`Element include in the Array => ${arr2}`);

// Map
let arr3 = arr.map(function (n) {
    return n+1;
    
});
console.log(`Map by adding one in each element => ${arr3}`);

// ForEach
arr.forEach(function(n) { console.log(n);
});

// Reduce
let maxvalue = arr.reduce((max,cur) => {
    return cur > max ? cur: max;
    
},arr[0]);
console.log(`Maximum => ${maxvalue}`);

// Filter
let arr5 = arr.filter(function (n) {
    return n>2;
})
console.log(`Filter => ${arr5}`);

// Reverse
console.log(`Reverse => ${arr.reverse()}`);

 // Find
let findElement = arr.find(function(n,i) { return n==6; });
console.log(findElement);

// findIndex

let fnIndex = arr.findIndex(function(n){ return n==3; });
console.log(`fnIndex in reverse arra [5,4,3,2,1] => ${fnIndex}`);

// concat
let arr_arr1 = arr.concat(arr1);
console.log(arr_arr1);

// Join method
let joined = arr.join('-');
console.log(joined);

// spread operator
let arr_arr1_spread = [...arr, ...arr1];
console.log(arr_arr1_spread);

// destructing arrays
const [a,b,c] = fruits;
// console.log(a);
// console.log(b);
// console.log(c);

// Filter and Map chaining
let users = [
{name: "siki", age:35},
{name: "shahzad", age:39},
{name:"Raza", age:35}
];

let usernames = users.filter(function(item) {
    if(item.age === 35)
    {
        return item.name;
    }
})

let nms = usernames.map(function(nm) { 
    return nm.name;
})
//console.log(nms);


// for of 

for (const element of fruits) {
    console.log(element);
    
}

// for (let index = 0; index < fruits.length; index++) {
//     const el = fruits[index];
//     console.log(el);
    
    
// }


