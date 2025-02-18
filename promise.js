const promise1 = new Promise(function(resolve,reject){

setTimeout(function(){

    console.log("Task");
    resolve();
    
},1000)


});

promise1.then(function(){

    console.log('Task accomplished');
    
})


const promise2 = new Promise(function(resolve,reject){
let task = false;
if(task)
{
    resolve('Accomplished');
}
else
{
    reject('Not accomplished');
}


});

promise2.then(function(msg){
    console.log(msg);
})

.catch(function(err){
    console.log(err);
    
})