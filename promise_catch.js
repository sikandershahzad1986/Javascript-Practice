const promise1 = new Promise(function(resolve,reject){
let success = true;
if(success)
{

    const users = {username:"Sikander", password:"bacquetta"};
    resolve(users);
}
else{
    reject('Data not received');
}
});

promise1.then(function(data){

console.log(data);




}).catch(function(error){
console.log(error);
})