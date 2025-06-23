function adder(...num) {
    let result = 0;
    for (let index = 0; index < num.length; index++) {
       // const element = num[index];
    result = result + num[index];
        
    }
    return result; 

}

//console.log(adder(13,6,11));


// Calculator 

function calculator(n1,n2,op)
{
switch (op) {
    case '+':
        return n1+n2;
        break;
    case '-':
        return n1-n2;
        break;
    case '*':
        return n1*n2;
        break;
    case '/':
        return n1/n2;
        break;
    default:
        return 'Invalid Operator';
    
}
}

//console.log(calculator(5,6,'-'));


let promise1 = new Promise(function(resolve, reject){
    let suc = true;
    if (suc) {
        resolve("Data is received");
    }
    else {
        reject("Data is not received");
    }
});
// promise1
// .then(function(succ){
//     console.log(succ);
    
// })
// .catch(function(err){
//     console.log(err);
    
// })
// .finally(function(final){
//     console.log("Either promise is fulfilled or rejected");
// })


async function getData()
{

    try {
        let response = await promise1;
      console.log(response);
    } catch (error) {
       return error;
        
    }
 
    
}
//getData();



class User
{
    constructor(username,pass)
    {
        this.username = username;
        this.pass = pass;
    }

    greet()
    {
        return `Welcome ${this.username}`;
    }
}

class userDetail extends User{
    constructor(username,pass,fn,ln,email)
    {
        super(username, pass);
        this.fn = fn;
        this.ln = ln;
        this.email = email;
    }
}


let user1 = new userDetail("siki",123456,"sikander","Shahzad", "sikander@gmail.com");
console.log(user1);
//console.log(user1.username);
console.log(user1.greet())

// let gr = User.greet.bind(user1);
// console.log(gr());




