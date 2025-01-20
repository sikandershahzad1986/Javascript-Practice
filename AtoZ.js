let arr = [2,4,6,8,10];

// length, push, pop, shift, unshift
// console.log(arr.length);
// arr.push(5);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// arr.shift();
// console.log(arr);
// arr.unshift(25);
// console.log(arr);


// map, filter, foreach
// let result = arr.map(function(n){
// return n*2;
// });

// let result = arr.filter((n) => n<8);

let days = ['Mon','Tue','Wed','Wed','Fri','Sat'];

days.forEach(function (d,i){
console.log(`${i+1}.${d}`);
});

let a1 = [1,2,3,4];
let a2 = [5,6,7];
let a3 = a1.concat(a2);
//console.log(a3);


let a4 = [...a1,...a2];
//console.log(a4);


let result = a1.includes(5);
console.log(result);
