// querySelector selects first element
// const myElement = document.querySelector('p');

// myElement.textContent= "i am being changed using js";


// querySelectorAll

let myAllElement = document.querySelectorAll('p');
myAllElement.forEach((p)=> 
    {
        p.textContent="Sikander Shahzad";
    });