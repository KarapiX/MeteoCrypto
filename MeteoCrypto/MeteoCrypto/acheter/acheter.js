var prix_BTC = 27928.27;
var prix_ETH = 1896.85;
var prix_D = 0.081;
var prix_USDT = 0.93;
var prix_BNB = 311.44;
var prix_HEX = 0.07133;
var prix_USDC = 0.9318;
var prix_ADA = 0.5661;
var total = 0;
var quantite = 0;
var disparaitre = null;
var nb_monnaies = 0;

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

function nombresAvecEspaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

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

function panier(monnaie, quantite) {
    disparait();
    document.getElementById('panier').style.display = "block";
    haut();
    if (monnaie == 'BTC') {
        document.getElementById('bitcoin').innerHTML =  parseFloat(quantite).toFixed(5) + " Bitcoin, soit " + nombresAvecEspaces((quantite * prix_BTC).toFixed(2)) + "Є";
        total += quantite * prix_BTC;
    } 
    else if (monnaie == 'ETH') {
        document.getElementById('ethereum').innerHTML =  parseFloat(quantite).toFixed(5) + " Ethereum, soit " + nombresAvecEspaces((quantite * prix_ETH).toFixed(2)) + "Є";
        total += quantite * prix_ETH;
    } 
    else if (monnaie == 'D') {
        document.getElementById('doge').innerHTML =  parseFloat(quantite).toFixed(5) + " Dogecoin, soit " + nombresAvecEspaces((quantite * prix_D).toFixed(2)) + "Є";
        total += quantite * prix_D;
    } 
    else if (monnaie == 'USDT') {
        document.getElementById('tether').innerHTML =  parseFloat(quantite).toFixed(5) + " Tether, soit " + nombresAvecEspaces((quantite * prix_USDT).toFixed(2)) + "Є";
        total += quantite * prix_USDT;
    } 
    else if (monnaie == 'BNB') {
        document.getElementById('bnb').innerHTML =  parseFloat(quantite).toFixed(5) + " Binance coin, soit " + nombresAvecEspaces((quantite * prix_BNB).toFixed(2)) + "Є";
        total += quantite * prix_BNB;
    } 
    else if (monnaie == 'HEX') {
        document.getElementById('hex').innerHTML =  parseFloat(quantite).toFixed(5) + " HEX, soit " + nombresAvecEspaces((quantite * prix_HEX).toFixed(2)) + "Є";
        total += quantite * prix_HEX;
    } 
    else if (monnaie == 'USDC') {
        document.getElementById('usdc').innerHTML =  parseFloat(quantite).toFixed(5) + " USD coin, soit " + nombresAvecEspaces((quantite * prix_USDC).toFixed(2)) + "Є";
        total += quantite * prix_USDC;
    } 
    else if (monnaie == 'ADA') {
        document.getElementById('ada').innerHTML =  parseFloat(quantite).toFixed(5) + " Cardano, soit " + nombresAvecEspaces((quantite * prix_ADA).toFixed(2)) + "Є";
        total += quantite * prix_ADA;
    }

    nb_monnaies++;

    if (nb_monnaies != 0){
        document.getElementById('pied').style.position = 'relative';
    }

    document.getElementById('total').innerHTML = " Total : " + nombresAvecEspaces(total.toFixed(2)) + "Є";

    return false;
}

function disparait() {
    document.getElementById('merci').style.display = 'none';
}

function reinitialiser() {
    var prix = document.getElementById('prix');
    var quantite = document.getElementById('quantite');

    document.getElementById('monnaie').value = "";
    document.getElementById('monnaie_convertir').value = "";
    document.getElementById('image_crypto').style.display = "none";
    document.getElementById('pied').style.position = "absolute";
    nb_monnaies = 0;
    prix.value = "";
    quantite.value = "";
}

function acheter() {
    var txt;
    if (confirm("Confirmer l'achat")) {
        txt = "Merci pour votre achat !";
    } 
    else {
        txt = "Achat annulé";
    }
    document.getElementById('merci').style.display = 'block'
    document.getElementById('panier').style.display = "none";
    document.getElementById('conversion').style.display = "none";
    document.getElementById('merci').innerHTML = txt;
    total = 0;

    disparaitre = setTimeout(disparait, 10000);
    reinitialiser();
}

function remplir_achat(monnaie_convertir, conversion) {
    var quantite = document.getElementById('quantite');

    if (monnaie_convertir == 'BTC') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'BTC';
    } 
    else if (monnaie_convertir == 'BNB') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'BNB';
    } 
    else if (monnaie_convertir == 'HEX') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'HEX';
    } 
    else if (monnaie_convertir == 'ETH') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'ETH';
    } 
    else if (monnaie_convertir == 'D') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'D';
    } 
    else if (monnaie_convertir == 'USDT') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'USDT';
    } 
    else if (monnaie_convertir == 'USDC') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'USDC';
    } 
    else if (monnaie_convertir == 'ADA') {
        quantite.value = conversion;
        document.getElementById('monnaie').value = 'ADA';
    }
    return false;
}

function ajouter() {
    quantite = document.getElementById('quantite').value;
    var monnaie = document.getElementById('monnaie').value;

    if (monnaie == "") {
        alert("Veuillez renseigner une monnaie");
        document.getElementById("monnaie").focus();
        return;
    }

    if (quantite == "") {
        alert("Veuillez renseigner une quantite");
        document.getElementById("quantite").focus();
        document.getElementById("quantite").value = "";
        return;
    }

    if (quantite <= 0) {
        alert("Veuillez renseigner une quantite valide");
        document.getElementById("quantite").focus();
        document.getElementById("quantite").value = "";
        return;
    }

    panier(monnaie, quantite);
}

function convertir(monnaie_convertir, prix) {
    var conversion;

    document.getElementById('conversion').style.display = "block";
    haut();
    if (monnaie_convertir == 'BTC') {
        conversion = prix / prix_BTC;
        document.getElementById('bitcoin_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " Bitcoin";
    } 
    else if (monnaie_convertir == 'ETH') {
        conversion = prix / prix_ETH;
        document.getElementById('ether_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " Ethereum";
    } 
    else if (monnaie_convertir == 'D') {
        conversion = prix / prix_D;
        document.getElementById('doge_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " Dogecoin";
    } 
    else if (monnaie_convertir == 'BNB') {
        conversion = prix / prix_BNB;
        document.getElementById('bnb_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " Binancecoin";
    } 
    else if (monnaie_convertir == 'USDT') {
        conversion = prix / prix_USDT;
        document.getElementById('tether_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " Tether";
    } 
    else if (monnaie_convertir == 'HEX') {
        conversion = prix / prix_HEX;
        document.getElementById('hex_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " HEX";
    } 
    else if (monnaie_convertir == 'USDC') {
        conversion = prix / prix_USDC;
        document.getElementById('usdc_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " USD coin";
    } 
    else if (monnaie_convertir == 'ADA') {
        conversion = prix / prix_ADA;
        document.getElementById('ada_conversion').innerHTML = prix + "Є représentent " + conversion.toFixed(5) + " Cardano";
    }
    remplir_achat(monnaie_convertir, conversion);
}

function verif_convertir() {
    disparait();
    var monnaie_convertir = document.getElementById('monnaie_convertir').value;
    var prix = document.getElementById('prix').value;

    if (monnaie_convertir == "") {
        alert("Veuillez renseigner une monnaie");
        document.getElementById("monnaie_convertir").focus();
        return;
    }

    if (prix == "") {
        alert("Veuillez renseigner un prix");
        document.getElementById("prix").focus();
        return;
    }

    if (prix <= 0) {
        alert("Veuillez renseigner un prix valable");
        document.getElementById("prix").focus();
        document.getElementById("prix").value = "";
        return;
    }

    convertir(monnaie_convertir, prix);
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

function apparait(monnaie) {
    var image = document.getElementById('image_crypto');

    if (monnaie != '')
        image.style.display = "block";

    if (monnaie == 'BTC')
        image.src = '../images/Bitcoin.svg';

    else if (monnaie == 'ETH')
        image.src = '../images/Ethereum.svg';


    else if (monnaie == 'D')
        image.src = '../images/dogecoin.svg';


    else if (monnaie == 'USDT')
        image.src = '../images/Tether.svg';


    else if (monnaie == 'BNB')
        image.src = '../images/Binance.svg';


    else if (monnaie == 'HEX')
        image.src = '../images/HEX.svg';

        
    else if (monnaie == 'USDC')
        image.src = '../images/USD_Coin.svg';


    else if (monnaie == 'ADA')
        image.src = '../images/cardano.svg';

    else if (monnaie == '')
        document.getElementById('image_crypto').src = "";
        document.getElementById('image_crypto').alt = "";

    document.querySelector(".box").className = "box";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector(".box").className = "box changing";
      });
    });
}