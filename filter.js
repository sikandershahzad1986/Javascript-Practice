// lets create an array of marks
const marks =[30,40,52,63,55];

// filter
// const result = marks.filter(function(m){
// return m<50;
// });
// console.log(result);

const result = marks.filter((mark) => mark < 50)
console.log(result);