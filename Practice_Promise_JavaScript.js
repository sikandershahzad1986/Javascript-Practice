let orderPizza = new Promise(function(resolve,reject){
let pizzaReady = false;


setTimeout(function(){
if(pizzaReady)
{
    resolve("Pizz is ready");
}
else{
    reject('Pizza is not ready');
}

},5000);

});

console.log("Order in process");




orderPizza
.then(function(suc){
    console.log(suc);
    
})
.catch(function(err){
    console.log(err);
    
})
    
