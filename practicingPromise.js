let promise1 = new Promise(function(resolve,reject){
    let success = true;
    if (success) {
        resolve({user:"siki",pass:"bav"});
        }
        else
        {
            reject("Data is not received");
        }
});
promise1
.then(function (suc) {
    console.log(suc);
    return suc.user; 
})
.then(function(data){
console.log(data);

})
.catch(function (err) {
    console.log(err);
    
})