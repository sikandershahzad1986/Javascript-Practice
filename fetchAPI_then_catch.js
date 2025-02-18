fetch('https://api.publicapis.org/entries')
.then(function(response) { return response; })
.then(function(data){ console.log(data);
    return data.url;
 })
 .then(function(url){
    console.log("URL is",url);
    
 })

.catch(function(error){console.log(error);
 })