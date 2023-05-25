
// -----------------------------Menu------------------------------//
function onav(){
    document.body.style.overflow="hidden";
    document.getElementById('fond').style.width="100%";
    document.getElementById('navResp').style.display = "flex";
    document.getElementById('navResp').style.width="100%";
}

function Cnav(){
    document.body.style.overflow="scroll";
    document.getElementById('navResp').style.width="0";
    document.getElementById('fond').style.width="0";
    fonction = setTimeout(maFonction,200);
}

function maFonction(){
    document.getElementById('navResp').style.display ="none";

}
//----------------------------content-----------------------------//
function verifmail(mail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function valider() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var mail = document.getElementById('mail').value;
    var message = document.getElementById('message').value;

    if (prenom == "") {
        alert("Veuillez renseigner votre prénom");
        document.getElementById("prenom").focus();
    } 
    else if (nom == "") {
        alert("Veuillez renseigner votre nom");
        document.getElementById("nom").focus();
    } 
    
    else if (mail == "") {
        alert("Veuillez renseigner votre mail");
        document.getElementById("mail").focus();
    } 
    else if (message == "") {
        alert("Veuillez entrer un message");
        document.getElementById("message").focus();
    } 
    else if (verifmail(mail) == false) {
        alert("Veuillez renseigner un mail valide");
        document.getElementById("mail").focus();
    } 
    else if (prenom.length < 3) {
        alert("Veuillez renseigner un prénom assez long");
        document.getElementById("prenom").focus();
    } 
    else if (/[a-zA-Z]{3,20}/.test(prenom) == false) {
        alert("Veuillez renseigner un prénom valide");
        document.getElementById("prenom").focus();
    } 
    else if (nom.length < 3) {
        alert("Veuillez renseigner un nom valide");
        document.getElementById("nom").focus();
    } 
    else if (/[a-zA-Z]{3,20}/.test(nom) == false) {
        alert("Veuillez renseigner un nom valide");
        document.getElementById("nom").focus();
    }
    else {
        window.location.href='mailto:' + "meteo.crypto@gmail.com" + '\?Subject=' + '&body=' + message + "\f\f"+ nom + ' ' + prenom + "\f" + mail;
        document.getElementById("formulaire").submit();
    }
}

function formation(){
    if (confirm("Appuiyer sur OK pour acheter cette formation")){
        alert("Merci d'avoir achété cette formation")
      }
}
