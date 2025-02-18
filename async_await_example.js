

const promise1 = new Promise(function(resolve, reject){
const success = true;
if(success)
{
    resolve({username:"sikander",password:"bac"});
    
}
reject("Data not recieved");
});

// promise1
// .then(function(msg){ console.log(msg);
// })
// .catch(function (error){ console.log(error);
// });

async function promiseTrue()
{
  try {
    const response = await promise1
    console.log(response);
    
  } catch (error) {
    console.log(error);
    
  }
}
promiseTrue();