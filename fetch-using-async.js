async function getData() {
    let response = await fetch('https://v2.jokeapi.dev/joke/Any');
    let data = await response.json();
    console.log(data.setup);
    
}
getData();