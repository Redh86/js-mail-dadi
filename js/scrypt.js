
// MAIL

var email = [
    "luca@hotmail.com",
    "dario@hotmail.com",
    "franco@hotmail.com",
    "nico@hotmail.com",
    "salvatore@hotmail.com" 
]



document.getElementById("btn_send").addEventListener("click",
    function(){
        var utnMail = document.getElementById("pst").value;
        console.log(utnMail)
        for ( i = 0; i < email.length; i++) {
            if (utnMail == email[i]) {
                document.getElementById("answer").innerHTML = "Email valida, accesso consentito!";
                i = email.length;
            } else {
                document.getElementById("answer").innerHTML = "Email invalida, accesso vietato!";
            }
        }
       

    }
)


// DADO

document.getElementById("btn_dado").addEventListener("click",
    function(){
        var player =document.getElementById("num_ply").innerHTML = Math.floor(Math.random()*(1, 6 + 1));
        var cpu = document.getElementById("num_cpu").innerHTML = Math.floor(Math.random()*(1, 6 + 1));
        if (player > cpu) {
            document.getElementById("winner").innerHTML = "Hai vinto!";
        } else if (player < cpu) {
            document.getElementById("winner").innerHTML = "Hai perso!";
        } else
        document.getElementById("winner").innerHTML = "Hai pareggiato!";        
    }
)