let orderPizza = new Promise(function(resolve,reject){
let pizzaReady = false;


setTimeout(function(){
if (pizzaReady) {
    resolve("Pizza is ready");
}
else {
    reject("Pizza is not ready");
}

},3000);
});

console.log("Order in process");

async function getDetail()
{
  
    try {
        let response = await orderPizza;
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

getDetail();
