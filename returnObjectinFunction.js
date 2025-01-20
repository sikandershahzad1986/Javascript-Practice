
let car = {

    name:"Vitz",
    model:2013
}

function carDetail(anyobject)
{

    return `the name of car is ${anyobject.name} and its model is ${anyobject.model}`;
}

console.log(carDetail(car));