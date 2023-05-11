function showPassword(){
    var tipo = document.getElementById("password");
    var passb = document.getElementById("show-password")
    if(tipo.type == "password"){
        tipo.type = "text";
         passb.style.backgroundImage = 'url("password-eye-close.png")'
    }else{
        tipo.type = "password";
        passb.style.backgroundImage = 'url("password-eye.png")'
    }
}


const button = document.getElementById("btn-login");

button.addEventListener("click", function () {
    
    

    window.location.href = "exit.html";

});