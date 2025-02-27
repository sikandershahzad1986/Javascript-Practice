let promise1 = new Promise(function(resolve,reject) {
    let suc = false;
    if (suc) {
        resolve("Data recieved");
    }
    else {
        reject("Data not received");
    }
})

async function getData() {
    
try {
    let response = await promise1;
    console.log(response);
} catch (error) {
    console.log(error);
    
}


   
    
}

getData()
