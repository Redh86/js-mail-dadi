
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
        if ( utnMail = email[0],
             utnMail = email[1],
             utnMail = email[2],
             utnMail = email[3],
             utnMail = email[4]){
             document.getElementById("answer").innerHTML = "Email valida, puoi accedere!";   
        }

        document.getElementById("answer").innerHTML = "Email invalida, accesso vietato!";
    }
)


// DADO

document.getElementById("btn_dado").addEventListener("click",
    function(){
        var player =document.getElementById("num_ply").innerHTML = Math.floor(Math.random()*10);
        var cpu = document.getElementById("num_cpu").innerHTML = Math.floor(Math.random()*10);
        if (player > cpu) {
            document.getElementById("winner").innerHTML = "Hai vinto!";
        } else if (player < cpu) {
            document.getElementById("winner").innerHTML = "Hai perso!";
        } else
        document.getElementById("winner").innerHTML = "Hai pareggiato!";        
    }
)