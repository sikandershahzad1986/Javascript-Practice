let user1 = {
name:"Sikander",
age:38,
email:"sikander@gmail.com"

}

let user2 = {
    nm:"Shahzad",
    ag:38,
    eml:"shahzad@gmail.com"
    
    }

// console.log(user1);
// console.log(user1.name);

// update object

user2.nm = "Ayesha khalid";
user2.location = "Quetta";
console.log(user2);


// Destructing objects
let {name:nm} = user1;
console.log(nm);

// concat / join objects

let use1_user2 = {...user1, ...user2}
console.log(use1_user2);

// concat / join -- Other method

let user1_user2 = Object.assign({},user1, user2);
console.log(user1_user2);

// keys, entries and values
console.log(Object.keys(user1));
console.log(Object.values(user2));
console.log(Object.entries(user1));

console.log(Object.hasOwnProperty());




// for in loop

for (const key in user1) {
 console.log(user1[key]);
 
}


let car = {
name: "Vitz",
color:"White",
model: 2013,

start: function(){
    console.log(`Lets Drive ${this.name}`);
    
}

}

// call function 
car.start();

// Passing object to function
function carDetail(anyobje)
{
    return anyobje.name
}

console.log(
 carDetail(car));


