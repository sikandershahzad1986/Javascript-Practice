class User{
    constructor(name,pass)
    {
        this.name = name;
        this. pass = pass;
    }
}

class UserDetail extends User {
    constructor(name, pass, age, detail)
    {
        super(name,pass);
        this.age = age;
        this.detail = detail;
    }
}

const user1 = new UserDetail("siki","123",26,"Pakistan")
console.log(user1);
for (const key in user1) {
 console.log(key);
 
}

