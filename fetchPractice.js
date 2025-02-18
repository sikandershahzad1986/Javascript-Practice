async function getData()
{

let response = await fetch('https://catfact.ninja/fact');
let data = await response.json();

console.log(data);
}

getData();