fetch('https://api.thecatapi.com/v1/breeds')
.then(function(data) {
    console.log(data);
    
})
.then(function(res) {
    console.log(res);
    
})
.catch(function(err){
    console.log(err);
    
})