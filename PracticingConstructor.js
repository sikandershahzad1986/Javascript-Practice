class Car{
constructor(name, color)
{
    this.name = name;
    this.color = color;
}


}

class carDetail extends Car {
    constructor(name,color, model, engine)
    {
        super(name,color);
        this.model = model;
        this.engine = engine;
    }
}
const car1 = new carDetail("Vitz", "Black","2013","100cc");
console.log(car1);
