class User{
    constructor(userid,username,pass)
    {
        this.userid = userid;
        this.username= username;
        this.pass = pass;
    }

greet()
    {
        console.log(`Welcome ${this.username}`);
        
    }
    welcome()
    {
        console.log("Welcome");
        
    }
}

class Userdetail extends User {
constructor(userid,username,pass,email)
{
    super(userid,username,pass)
    this.email = email;
}

}

try {
    let user1 = new Userdetail(1,"Siki","password","siki@bac.com");
//console.log(user1);
//user1.greet();
//User.greet();
user1.greet();
user1.welcome();
} catch (error) {
    console.log(error);
    
}

