class User{
constructor(username,password)
{
    this.username = username;
    this.password = password;
}

static greet(userInstance)
{
    return `${userInstance.username} Welcome`;
    
}

}


class UserDetail extends User{
constructor(username,password,fn,ln,email)
{
    super(username,password);
    this.fn = fn;
    this.ln =ln;
    this.email = email;
}


}
let user1 = new UserDetail("siki","1234","sikander","shahzad","siki@bac.edu.pk");
console.log(user1);

console.log(User.greet(user1));








