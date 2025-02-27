let promise1 = new Promise(function(resolve,reject){
    let success = false;
    if (success) {
        resolve({user:"siki",pass:"bas"});
    }
    else
    {
        reject("Data not received");
    }
});
promise1
.then(function(msg){
    console.log(msg);
    
})
.catch(function(err){
    console.log(err);
    
})