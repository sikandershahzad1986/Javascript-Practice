function check()

{
    let username = document.getElementById('username').value;
    let username_error = document.getElementById("un_err");
    

    if(username.length < 8)
    {
        alert("text is less than 8")
        username_error.style.color="red";
        username_error.className = "visible";

    }
    else
    {
        alert("Text is okay");
        username_error.className = "hidden";
    }
    
}



console.log(username);