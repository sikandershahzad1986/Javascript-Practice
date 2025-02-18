const promise1 = new Promise(function(resolve,reject){
let success = false;
if(success)
{
    resolve("Data is received");
}
else{
    reject("Data not received");
}
});

promise1.then(function(data){ console.log(data);
 }).catch(function(error){ console.log(error);
 });