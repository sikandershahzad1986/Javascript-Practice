let promise1 = new Promise(function(resolve,reject){
let succes=true;
if(succes)
{
    resolve({username:"siki", password:"bac"});
}

else{
    reject("Data not received");
}

});

// promise1
// .then(function(data){ console.log(data);
// })
// .catch(function(error){console.log(error);
//  })

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