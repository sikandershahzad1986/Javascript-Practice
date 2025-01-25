// for (let a = 1; a<= 10; a++)
// {
//     console.log(`${a}`);
    
// }

const arr = [1,2,3,4,5];
const arr1 = ['Mon','Tue','Wed','Thu','Fri','Sat'];
// for (let i = 0; i < arr1.length; i++)
//     {
//     const element = arr1[i];
//     console.log(element);
//    }

// for of works with arrays, maps
// for (const element of arr1) {
//     console.log(element);
    
// }

// for in works with objects;

let car = {
    name:"Vitz",
    model:2013,
    color:"White",
}
for (const key in car) {
 console.log(`${key} with ${car[key]}`);
 
}
