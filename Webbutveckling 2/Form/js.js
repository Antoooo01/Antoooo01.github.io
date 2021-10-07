document.querySelector("form > button").onclick = function () {
    //gets the entered values
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value; 

    //checks the fetched values
    var validEmail = check_Email(email);
    var validPassword = check_Password(password1, password2);

    if (!validEmail) {//if email is invalid feedback is created and sent back
        var fel = document.createElement("p");
        var felmeddelande = document.createTextNode("Email-adress är ogiltig");
        fel.appendChild(felmeddelande);

        var felbox = document.getElementsByClassName("info")[0];
        felbox.appendChild(fel);
    }
    if (!validPassword) {//if password is invalid feedback is created and sent back
        var fel = document.createElement("p");
        var felmeddelande = document.createTextNode("Lösenordet är är ogiltigt");
        fel.appendChild(felmeddelande);

        var felbox = document.getElementsByClassName("info")[0];
        felbox.appendChild(fel);
    }

}

function check_Email(email) {
    //using regex to check criteria
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
}

function check_Password(p1, p2) {
    //basic criteria
    return (p1 == p2 && p1 > 5);
}



document.querySelector("body > form:nth-child(2)").onclick = function () {
    //html part
    var hPass1 = document.getElementById("Hpassword").value;
    var hPass2 = document.getElementById("Hpassword2").value;

    
    if (!check_Password(hPass1, hPass2)) {//if password is invalid feedback is created and sent back
        var fel = document.createElement("p");
        var felmeddelande = document.createTextNode("Lösenordet är är ogiltigt");
        fel.appendChild(felmeddelande);

        var felbox = document.getElementsByClassName("Hinfo")[0];
        felbox.appendChild(fel);
    }
}