let car ={
"full name": "Vitz",
color:"White",
model:2013,
drive: function()
{
 console.log("Lets go to drive");
},
"other models":[2002,2003,2004,2005,2006,2007],
}


console.log(`${car.drive()} its detail is as follows: ${car["full name"]} , ${car.model}, and color ${car.color}. The other models are ${car["other models"]}`);
