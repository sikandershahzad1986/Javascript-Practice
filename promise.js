// let promise1 = new Promise(function(resolve,reject){
//     let success = false;
//     if (success) {
//         resolve({user:"bac",pass:123});
//     }
//     else{
//         console.log("Data not received");
        
//     }
// });

// promise1
// .then(function(suc){
//     console.log(suc);
    
// })
// .catch(function(err)
// {
//     console.log(err);
    
// })


let promise2 = new Promise(function(resolve,reject){
    let suc = false;
    if (suc) {
        console.log("fulfilled");
        
    }
    else{
        console.log("Rejected");
        
    }
});

async function getData()
{

try {
    let response = await promise2;
    console.log(response);
} catch (error) {
    console.log(error);
    
}


    
    
}