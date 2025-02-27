// class Car {
// constructor(name,model,engine,color)
// {
// this.name= name;
// this.model = model;
// this.engine=engine;
// this.color=color;
// }

// changeCase()
// {
//     return `${this.name.toUpperCase()}`;
// }

// }

// let car1 = new Car("Vitz",2013,"1000cc","White");
// console.log(car1);

// console.log(car1.changeCase());

// Create a constructor function called Person
//  that takes two parameters: name and age. 
// Add a method called greet that prints "Hello, my name is [name] and I am [age] years old.".

// class Person{
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     greet()
//     {
//         return `Hello my name is ${this.name} and I am ${this.age} years old`;
//     }
// }

// let person1 = new Person("Sikander", 38);
// console.log(person1.greet());


// Create a Animal constructor with properties name and sound.
//  Then create a Dog constructor that inherits from Animal and adds a breed property.

// class Animal{
//     constructor(name,sound){
//         this.name = name;
//         this.sound = sound;
//     }
// }

// class Dog extends Animal {
//     constructor(name,sound,breed) {
//         super(name,sound);
//         this.breed = breed;
//     }
// }

// let animal1 = new Dog("Dog","Wow","Session");
// console.log(animal1);


function Animal(name,sound)
{
    this.name= name;
    this.sound = sound;
}
function Dog(name,sound,breed)
{
    Animal.call(this,name,sound);

    this.breed = breed;
}
let animal1 = new Dog("Dog","wowww","Alsession");
console.log(animal1);
