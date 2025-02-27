const Car = {

    name:"Vitz",
    color:"White",
    model:2013,
    start: function(){
        console.log(`${this.name} is started`);
        
    }
}

//console.log(Car.name);
//Car.start();

const car1 = Car.start.bind(Car);
car1();