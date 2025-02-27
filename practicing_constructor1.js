class User {
constructor(userid,username,pass)
{
    this.userid = userid;
    this.username = username;
    this.pass = pass;
}

encryptPass()
{
    return `${this.pass}123abc`;
}
}

class userDetail extends User {
    constructor(userid,username,pass, name,fname,email)
    {

        super(userid,username,pass)
        this.name = name;
        this.fname = fname;
        this.email = email;
    }
}


let user1 = new userDetail(1,"siki","Password","Sikander","Shahzad","sikander@constructor.com");
console.log(user1);
//console.log(user1.encryptPass());



