class User{
    constructor(userid,username,password)
    {
        this.userid = userid;
        this.username = username;
        this.password = password;
    }
    static greet(){
        console.log(`Welcome Back ${this.username}`);
        
    }
}
class UserDetail extends User {
    constructor(userid,username,password,fn,ln,email,phone)
    {
        super(userid,username,password);
        this.fn =  fn;
        this.ln = ln;
        this.email = email;
        this.phone = phone;
    }
}

let user1 = new UserDetail(1,"siki","password","Sikander","Shahzad","sikander@gmail.com","03337895006");
console.log(user1);
const greeting = User.greet.bind(user1);
greeting();

