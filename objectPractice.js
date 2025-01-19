let car = {
name: "Vitz",
model:2013,
color:"White",
drive: function()
{
    console.log("Lets go");
},

previousModel: [2002,2003,2004,2005],
};

// console.log(` ${car.drive()} ${car.name} `);

console.log(car.drive());
console.log(`All models ${car.previousModel}`);
