// setTimeout() executes program after a specified delay

setTimeout(()=>{
    console.log("This program will run after 2 seconds");
    },2000);


    // setInterval Repeates execution after 2 seconds
setInterval(() => {
   // console.log("Repeate after each 2 seconds");
   
}, 2000);

// promise with then and catch

const promise1 = new Promise(function(resolve,reject){
    const suc = true;
    if(suc)
    {
        resolve("Promise is fullfilled");
    }
    else{
        reject("Promise is rejected");
    }
});

promise1
.then(function(success){
    console.log(success);
    })
.catch(function(error){
    console.log(error);
  
});

// asyn await 

async function getData() {
    const dt = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const user = await dt.json();
    console.log(user.name);
    
}
getData();