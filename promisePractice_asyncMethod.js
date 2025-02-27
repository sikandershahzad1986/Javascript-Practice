let promise1 = new Promise(function(resolve,reject){
    let success = true;
    if (success) {
        resolve({user:"siki",pass:"bac"});
    }
    else{
        reject("Data Not received");
    }
});

async function getData()
{

try {
    let response = await promise1;
console.log(response.user);
} catch (error) {
    console.log(error);
    
}


}

getData();