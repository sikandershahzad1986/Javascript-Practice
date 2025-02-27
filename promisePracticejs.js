let promise1 = new Promise(function(resolve,reject){
let success = false;
if (success) {
    resolve({username:"siki",password:"bac"});
}
else
{
    reject("Data not received");
}
});

promise1
.then(function(suc){
    console.log(suc);
})
.catch(function(err){
    console.log(err);
})