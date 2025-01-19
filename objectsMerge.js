let car={

    name:"Vitz",
    model:2013,
    color:"White",
}

let bike={

    nm:"Honda",
    clr:"Red",
    md:2024
}

let obj = Object.assign({},car,bike);
console.log(obj);