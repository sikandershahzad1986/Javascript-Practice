let promise1 = new Promise(function(resolve, reject){
let success = true;
if(success)
{
    resolve({username:"Sikander", password:"BAc"});
}
else{
    reject("Data not recieved");
}

});

promise1
.then(function(data){
    console.log(data);
    return data.username;
    
})
.then(function(user){
    console.log(user);
    
})
.catch(function(error){
    console.log(error);
    
})