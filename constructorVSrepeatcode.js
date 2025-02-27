const car1 = {
name: "vitz",
model:2013,
color:"white",

};

const car2 = {
    name: "Passo",
    model:2012,
    color:"red",
    
    };

//console.log(car1.name);
//console.log(car2.name)


// to avoid repeating code, 
// Makes the code organized and reusable
// Helps build real-world applications like user profiles, products, etc.

// so lets create constructor function that will help to
// create multiple objects with the same structure but different values.
// The new keyword is like telling JavaScript: "Make a new object from this blueprint."

function Car(name,model, color)
{
    this.name = name;
    this.model = model;
    this.color = color;
}

let car3 = new Car("vitz", 2012,1000);
let car4 = new Car("Pajero", 2015, 2000);
console.log(car3, car4);


