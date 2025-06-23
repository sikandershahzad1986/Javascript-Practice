// const promise1 = new Promise(function(resolve,reject){
// let success = true;
// if(success)
// {

//     const users = {username:"Sikander", password:"bacquetta"};
//     resolve(users);
// }
// else{
//     reject('Data not received');
// }
// });

// promise1.then(function(data){

// console.log(data);




// }).catch(function(error){
// console.log(error);
// })


const promise1 = new Promise(function(resolve,reject){
const suc = false;
if(suc)
{
    resolve("Fullfilled the promise");
}
else{
    reject("Rejected the promise");
}

})

.then(function(success){
console.log(success);

})
.catch(function(error)
{
    console.log(error);
})