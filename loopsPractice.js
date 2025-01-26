// let arr = [2,4,6,8,10];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//    // console.log(element);
    
// }

// for (const element of arr) {
//     //console.log(element);
//     }

// let myObj = [{
//     id:1,
//     name:"Sikander",
//     gender:"Male",
//     age:26,
// }];

// myObj.forEach(function (element,i,arr) {
//     console.log(element);
    
// });



const users = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", phone: "123-456-7890" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", phone: "987-654-3210" },
    { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", phone: "555-555-5555" },
    { id: 4, name: "Diana Prince", email: "diana.prince@example.com", phone: "111-222-3333" },
    { id: 5, name: "Ethan Hunt", email: "ethan.hunt@example.com", phone: "444-333-2222" }
  ];

  users.forEach((user)=> console.log(`${user.name} | ${user.email}`));
  