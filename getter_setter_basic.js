class User{
    constructor(username,password)
    {
        this.username = username;
        this.password = password;
    }

    get password() {
        return `abc${this._password}abc`;
    }
    set password(value)
    {
        this._password = value;
    }
}

let user1 = new User("siki","siki");
console.log(user1.password);
