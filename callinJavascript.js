function Car(name)
{
    this.name = name;
}

function CarDetail(name,model,color,engine)
{

    Car.call(this,name)
    this.model = model;
    this.color = color;
    this.engine = engine;
}


let car1 = new CarDetail("vitz",2013,"white", "1000cc");
console.log(car1);
