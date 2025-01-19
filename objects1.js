const library ={
name:"Pakistan Library",
location:"Quetta",

books: [
{title:"Computer Science", isAvailable: true, price:5000},
{title:"Javascript", isAvailable: false, price:3000},
{title:"NodeJS", isAvailable: true, price:4000},
],

availablility: function()
{
   //return this.books.filter(book => book.isAvailable);
return this.books.filter(avb => avb.isAvailable);

},


nonAvailability: function()
{
    return this.books.filter(nonavb => nonavb.isAvailable == false);
}

}

console.log(`Library Name: ${library.name}`);
console.log(`Location: ${library.location}`);
console.log("Available Books:",library.availablility());
console.log("Not Available",library.nonAvailability());

