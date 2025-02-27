
// constructor is a function that helps to avoid repeating code.
// 
class User{
constructor(username,fn, ln, isloggedin)
{
this.username = username;
this.fn= fn;
this.ln = ln;
this.isloggedin = isloggedin;
}
}

const user1 = new User('siki','sikander','shahzad',true);
const user2 = new User('bac','bac','college',false);
// console.log(user1);
// console.log(user2);

function Car(name,model,color)
{
    this.name = name;
    this.model = model;
    this.color = color;
}

let car1 = new Car("Vitz",2013, 'white');
let car2 = new Car("Passo",2015,'black');
console.log(car1);
console.log(car2);

