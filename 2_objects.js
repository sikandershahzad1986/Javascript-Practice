
// Creating Object
car = {
name:"vitz",
color:"white",
model:2013
}

// Accessing the object
console.log(car.name); // dot notation
console.log(car["color"]); // bracket notation

// Adding and Updating Properties

car.engine="1000cc"; // add
car.color ="Red";  // update

console.log(car);

// Deleting Properties

delete car.name; // deletes name property
console.log(car);


// Objects Method

const person = {
    id:1,
    name:"Sikander",
    fname:"Shahzad",
    age:38,

    greet: function(){
        console.log(`AoA! ${person.name}`); // this.name can also be used here
        
    }
}
person.greet();

// Nested object
const pr = {
nm:"Sikander",
ln:"Shahzad",
contact: {
    ph:"033378795006",
    home:"0812503314",
}

}
console.log(pr.contact.home);


// looping through object

for (const key in person) {
 
        const element = person[key];
        console.log(`Key (${key}):  ${element}`);  
       
}


// destructing objects.
const profile = {
    id:1,
    nm:"siki",
    age:38,
}

const {id, nm, age} = profile;
console.log(age);

// spread operators (Joining two objects)
const car_person = {...car, ...person};
console.log(car_person);


// object keys, object entries, object values

console.log(Object.keys(car)); // display object keys
console.log(Object.values(car)); // dispay  values
console.log(Object.entries(car)); // display entries

