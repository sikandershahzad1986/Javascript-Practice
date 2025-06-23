
async function getData()
{

const response = await fetch('https://api.thecatapi.com/v1/breeds');
const data = await response.json();

const desc = data.map((dt) =>{
   return dt.description;

})


console.log(desc);

}

getData();