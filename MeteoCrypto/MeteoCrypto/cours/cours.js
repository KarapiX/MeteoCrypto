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


function verifmail(mail) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function valider(){
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var mail = document.getElementById('mail').value;
    var message = document.getElementById('message').value;
    
    if (nom == ""){
        alert("Veuillez renseigner votre nom");
        document.getElementById("nom").focus();
    }

    else if (prenom == ""){
        alert("Veuillez renseigner votre prénom");
        document.getElementById("prenom").focus();
    }

    else if(mail == ""){
        alert("Veuillez renseigner votre mail");
        document.getElementById("mail").focus();
    }

    else if(message == ""){
        alert("Veuillez entrer un message");
        document.getElementById("message").focus();
    }

    else if(verifmail(mail) == false){
        alert("Veuillez renseigner un mail valide");
        document.getElementById("mail").focus();
    }

    else if(prenom.length < 3){
        alert("Veuillez renseigner un prénom assez long");
        document.getElementById("prenom").focus();
    }

    else if(/[a-zA-Z]{3,20}/.test(prenom) == false){
        alert("Veuillez renseigner un prénom valide");
        document.getElementById("prenom").focus();
    }

    else if(nom.length < 3){
        alert("Veuillez renseigner un nom valide");
        document.getElementById("nom").focus();
    }

    else if(/[a-zA-Z]{3,20}/.test(nom) == false){
        alert("Veuillez renseigner un nom valide");
        document.getElementById("nom").focus();
    }

    else {
        window.location.href='mailto:' + "meteo.crypto@gmail.com" + '\?Subject=' + '&body=' + message + "\f\f"+ nom + ' ' + prenom + "\f" + mail;
        document.getElementById("formulaire").submit();
        }
}

function ajouter(){
    quantite = document.getElementById('quantite').value;
    monnaie = document.getElementById('monnaie').value;

    if (monnaie == ""){
        alert("Veuillez renseigner une monnaie");
        document.getElementById("monnaie").focus();
    }

    if (quantite == ""){
        alert("Veuillez renseigner une quantite");
        document.getElementById("quantite").focus();
    }

    else if(quantite < 0){
        alert("Veuillez renseigner une quantite valide");
        document.getElementById("quantite").focus();
    }

    panier(monnaie, quantite);
}

function dessiner(){
    var c = document.getElementById('canva');
    var ctx = c.getContext('2d');

    ctx.beginPath();
    ctx.arc(25, 25, 25, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(25, 18);
    ctx.lineTo(40, 30);
    ctx.lineTo(37, 33);
    ctx.lineTo(25, 23);
    ctx.lineTo(13, 33);
    ctx.lineTo(10, 30);
    ctx.lineTo(25, 18);
    ctx.fillStyle = "white";
    ctx.fill();
}

function haut(){
    var ratio = 0.1;
    var haut = document.getElementById('haut');
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,
    }

    var essai = function(entries, observer){
        
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > ratio){
                haut.classList.add('decolle');
                observer.unobserve(entry.target);
            }
            else if(entry.intersectionRatio < 1)
                haut.classList.remove('decolle');
        })
    }
    var observer = new IntersectionObserver(essai, options);

    observer.observe(document.getElementById('pied'));
}

function apparait(){
    var ratio = 0.5;
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,
    }

    var test = function(entries, observer){
        
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > ratio){
                entry.target.classList.add('apparait');
                observer.unobserve(entry.target);
            }
        })
    }
    var observer = new IntersectionObserver(test, options);

    document.querySelectorAll('.invisible').forEach(function (r){
        observer.observe(r);
    })
}

function formatMontant(m) {
    var intlN=new Intl.NumberFormat();
    return intlN.format(m);
  }
  /* Recuperation des donnees de cours du Bitcoin */
  function getCours(monnaie) {
    /* Appel ajax vers cryptocompare.com */
    var ajax=new XMLHttpRequest();
    console.log("readyState apres new : "+ajax.readyState);
    /* Detection de l'avancement de l'appel */
    ajax.onreadystatechange=function() {
      console.log("readyState a change et vaut : "+ajax.readyState)  
    }  
    /* Detection de la fin de l'appel */
    ajax.onload = function(monnaie) {
      console.log("Appel ajax termine");
      console.log("  status : "+this.status);
      console.log("  response : "+this.response);	
      if (this.status == 200) { /* Le service a bien repondu */
        try {
          var json=JSON.parse(this.response); // Convertir le retour JSON
        } catch(err) {
          console.log("Retour JSON incorrect");  
          return false;  
        }
        /* Verifier que le JSON de retour contient bien la propriete EUR */
        if (json.EUR) {
          var eur=formatMontant(json.EUR);  
          var dt=new Date();
          document.getElementById('essai').innerHTML = eur + " € au " + dt.toLocaleString();
          console.log(monnaie)
        } else {
          console.log("Retour du cours incorrect");  
        }
      }
    }
    /* Detection du timeout */
    ajax.ontimeout=function(monnaie) {
      console.log("Le service n'a pas repondu e temps : nouvel essai dans 5 sec");	 
      /* Relancer l'appel 5 secondes plus tard */
      setTimeout("getCours(monnaie)", 5000); 
    }
      
    /* Preparation de la requete et envoi */
    var url="https://min-api.cryptocompare.com/data/price?fsym=" + monnaie + "&tsyms=EUR";
    ajax.open("GET", url, true);
    ajax.timeout=1000; /* Delai d'expiration de 1 seconde */
    ajax.send();
  }
  /* Demarrage de l'appel */
  function test(monnaie) {
    getCours(monnaie);
    setInterval(getCours(monnaie), 30000);
  }