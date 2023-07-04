function clickevent() {
    let email = document.getElementById("e-mail").value;
    console.log(email);
    let regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9])+.([a-z]{2,3})([a-z]{2,3})?$/;
    if(regex.test(email)){
        window.location.assign("success.html");
        return true;
    }
    else{
        let emailError= document.getElementById('error-message');
        emailError.style.display = "block";
        let mail= document.getElementById("e-mail");
        mail.style.color = "hsl(4, 100%, 67%)";
        mail.style.backgroundColor = "hsla(4, 100%, 67%, 0.15)";
        mail.style.bordercolor = "hsl(4, 100%, 67%)";
        return true;
    }
}
let emailChange=document.getElementById('emailChange');
emailChange.textContent = email;