let car = {
    name:"Vitz",
    model:2013,
    color:"White",
    drive: function()
    {
        return "Lets go for a drive!";
    }
}

let bike = {
nm:"Honda",
md:2024
};

// let {name:nm} = car; // de-structuring object

function carDetail(obj)
{
    return `${obj.name} , ${obj.color} ${obj.drive()}`;  // passing object to function
}


//console.log(carDetail(car));

// let objResult = {...car, ...bike}; // combining objects using  spread operator

let objResult = Object.assign({}, car, bike);
console.log(objResult);

