class User{
constructor(username,password){
    this.username = username;
    this.password = password;
}
get username()
{
    return `${this._username}Khan`;
}
set username(value) {
    this._username = value;
}
}

let user1 = new User("siki","123");
console.log(user1);
console.log(user1.username);

