let promise1 = new Promise(function(resolve,reject){
let suc = false;
if (suc) {
    resolve("data received");
    }
else {
    reject("Data not received");
}

});

// promise1
// .then(function(s){
//     console.log(s);
    
// })
// .catch(function(e){
//     console.log(e);
    
// })


async function  getData() {

try {
    
    let response = await promise1;
    console.log(response);
} catch (error) {
    console.log(error);
    
}

    
}

getData();