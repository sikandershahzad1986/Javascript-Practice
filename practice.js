let car = {
name:"Vitz",
model:2013,
color:"white",

drive: function ()
{
return "Lets go";
},
};


//console.log(`My car is ${car.name} and ${car.drive()} on it`);

//console.log(Object.values(car));

let {name:nm} = car;
console.log(nm);
