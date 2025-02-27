async function getData()
{
try {

    let response = await fetch('https://api.adviceslip.com/advice');
    let data = await response.json();
   // console.log(response);
    console.log(data.slip.advice);    
} catch (error) {
    console.log(error);
}
}
getData();