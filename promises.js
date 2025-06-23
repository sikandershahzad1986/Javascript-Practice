class User{
    constructor(un,pass)
    {
        this.un = un;
        this.pass = pass;
    }

    static greet(){
        return `Welcome ${this.un}`;
    }
}

const user1 = new User("siki",12345);
console.log(user1);
const us = User.greet.bind(user1);
console.log(us());

