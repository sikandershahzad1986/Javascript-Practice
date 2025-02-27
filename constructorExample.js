class User{
constructor (un,fn,ln,pass)
{
    this.un = un;
    this.fn = fn;
    this.ln = ln;
    this.pass = pass;
}

changeCaseUser()
{
    return  `${this.un.toUpperCase()}`;
}

encryptUser(){
    return `${this.pass}AbCdE`
}

}

let user1 = new User("siki","sikander","shahzad","pass");
console.log(user1.changeCaseUser());
console.log(user1.encryptUser());
console.log(user1);
