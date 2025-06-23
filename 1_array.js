const fruits=["Apple","Banana","Cherry","Orange"];

// Accessing Array

console.log(`First Element: ${fruits[0]}`); // first element selected
console.log(`Third Element: ${fruits[2]}`); // Third element selected
console.log(`Total Elements in an array: ${fruits.length}`); // total number of elements in an array
console.log(`Original Array:  ${fruits}`); 

// Modification in an Array

fruits[0] = "Mango"; // modify the first element in an array
console.log(`Modified Array:  ${fruits}`); 

// Looping Through Arrays

// Foreach
console.log("Foreach Loop:");
fruits.forEach(function(fruit){
    console.log(fruit);
    })

// For loop
console.log("Foreach Loop:");
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
  }

  // for of loop 
console.log("For of loop (works for elements)");
  for (const element of fruits) {
    console.log(element);
     }


// Adding / Removing items in an array


fruits.push("strawberry");  // push at the end
console.log(fruits);

fruits.pop(); // Pop Method (Remving last element from an array)
console.log(fruits);

fruits.shift(); // shift (Removes first element from an array)
console.log(fruits);


fruits.unshift("Sikander"); // unshift (adds element at the beginning of an array)
console.log(fruits);

// Finding items

console.log(fruits.indexOf("Cherry")); // display the index of specific element.)
console.log(fruits.includes("Sikander")); // check if element exists


// map function  (changes items)
const marks = [10,20,30,40,50];
function double(m)
{
return m*m
}
const newmarks = marks.map(double);
console.log(newmarks);

// map with arrow function
const db = marks.map(m => { return m*m})
console.log(db);

// filter (get some items)

const someItems= marks.filter(m => {return m > 40});
console.log(someItems);


// joining arrays 
const mergedarray = [...fruits, ... marks];
console.log(mergedarray);

const mergedarray1 = fruits.concat(marks);
console.log(mergedarray1);


// destructuring arrays

const [a, b, c ]= ["Apple","Banana","Cherry"];
console.log(a)
console.log(b);
console.log(c);

