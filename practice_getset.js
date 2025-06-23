class Car{
    constructor(name,model)
    {
        this.name = name;
        this.model = model;
    }

 static   start()
    {
        console.log("Lets go for a drive");
        
    }
}

class carDetail extends Car{
    constructor(name,model,color,engine)
    {
        super(name,model)
        this.color = color;
        this.engine = engine;
    }
}

let car1 = new carDetail("Vitz", 2013,"White","100cc");
console.log(car1);
//car1.start();
