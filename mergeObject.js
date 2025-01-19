let car ={
name:"Vitz",
color:"White",
model:2013,
}

let bike = {
nm: "Honda",
clr:"red",
md: 2015,
}

//let c =Object.assign({},car, bike);

let c = {...car, ...bike}
console.log(c);