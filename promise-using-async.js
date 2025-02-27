let promise1 = new Promise(function(resolve,reject){
    let success = false;
    if (success) {
        resolve({user:"siki",pass:"bac"});
    }
    else
    {
        reject("Data not recieved");
    }
});

async function getData()
{

try {
    let response = await promise1
    console.log(response);
    
} catch (error) {
    console.log(error);
    
}
    
}
getData();