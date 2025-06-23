let arr = [2,4,6,8,10];
let arr1 = [3,5,7,9,11];
//console.log(arr.length);
let newarr = arr.map(function(n){
return n+10;
});
//console.log(newarr);

arr.forEach(function(n){
//    console.log(n);
})

for (const element of arr) {
  //  console.log(element);
}

//arr.push(20);
//console.log(arr);

//.pop();
//console.log(arr);

//arr.unshift(1);
//console.log(arr);

//arr.shift();
//console.log(arr);

// console.log(arr);
// arr[2] = 60;
// console.log(arr);

//console.log(arr);
// console.log(arr.indexOf(6));
//console.log(arr.includes(8));


let max = arr.filter(function(n){
return n>6;
});

//console.log(max);

// arr.sort();
// console.log(arr);

// arr.reverse();
// console.log(arr);

// let arrAndarr1 = arr.concat(arr1);
// console.log(arrAndarr1);

// let newArray = arr.join("-",arr1);
// console.log(newArray);

let fruits = ["apple","banana","cherry","orange"];
let [a,b,c,o] = fruits;
//console.log(o);

// console.log(arr);
// console.log(arr1);

let spread_array = [...arr, ...arr1];
//console.log(spread_array);

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element);
    
    
// }

fruits.forEach(function(f){
    console.log(f);
    
})