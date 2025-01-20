let a = {

    name:"a",
    age:15
}

let b = {

    nm:"b",
    a:29
}

let c = {...a, ...b};
console.log(c);