// function User(username,fname,lname,isloggedin)
// {
//     this.username = username;
//     this.fname = fname;
//     this.lname = lname;
//     this.isloggedin = isloggedin;
// }

// let user1 = new User('siki','sikandder','shahzad',true);
// let user2 = new User('bac','bac','college',false);
// console.log(user1);
// console.log(user2);


class User {
constructor (username,fname,lname,isloggedin)
{
    this.username = username;
    this.fname = fname;
    this.lname = lname;
    this.isloggedin = isloggedin;
}
}

let user1 = new User('siki','sikander','shahzad',true);
console.log(user1);
