function funktiot(){
    taysienTarkistus()
    nimenTarkistus()
    salasananTarkistus()
    postinumeronTarkistus()
    sahkopostinTarkistus()
    skupuolenTarkistus()
    kielenTarkistus()
}

function taysienTarkistus(){
    const kentat = document.getElementsByName("pakollinenKentta")
    for (let i = 0; i < kentat.length; i++) {
        if(kentat[i].value === "" || kentat[i].value == null) {
            document.getElementById('taysiVirhe').textContent = "Varmista että jokainen kenttä on täytetty"
            return false;
        }
    }
    document.getElementById('taysiVirhe').textContent = ""
    return true;
}

function nimenTarkistus(){
    const nimi = document.getElementById('nimiKentta').value;
    if (nimi.length < 6){
        document.getElementById('idVirhe').textContent = "Käyttäjän ID tulee olla vähintään kuusi merkkiä pitkä"
        //console.log("Liian lyhyt id");
        return false;
    }
    else{
        document.getElementById('idVirhe').textContent = ""
        //console.log("Tarpeeksi pitkä id");
        return true;
    }
}

function salasananTarkistus(){
    let erikoisMerkit = /[!@£$€&%#]/;
    const salasana = document.getElementById('salasanaKentta').value;
    if (salasana.length > 5){
        if (erikoisMerkit.test(salasana)){
        document.getElementById('salasanaVirhe').textContent = ""
        //console.log("salasana toimii");
        return true
        }
        else {
            document.getElementById('salasanaVirhe').textContent = "Salasanassa tulee olla vähintään yksi erikoismerkki"
            //console.log("Lisää erikoismerkki")
            return false
        }
    }
    else{
        document.getElementById('salasanaVirhe').textContent = "Salasanan tulee olla vähintään kuusi merkkiä pitkä"
        //console.log("Liian lyhyt salasana");
        return false;
    }
}

function postinumeronTarkistus(){
    const postinumero = document.getElementById('postiNumeroKentta').value;
    if (!isNaN(postinumero) && !isNaN(parseFloat(postinumero))){
        console.log("On pelkkiä numeroita")
        if (postinumero.length > 4){
            document.getElementById('postinumeroVirhe').textContent = ""
            //console.log("Tarpeeksi pitkä postinumero");
            return true
        }
        else{
            document.getElementById('postinumeroVirhe').textContent = "Postinumeron tulee olla vähintään 5 merkkiä pitkä"
            //console.log("Liian lyhyt postinumero");
            return false
        }
    }
    else{
        document.getElementById('postinumeroVirhe').textContent = "Postinumeron täytyy koostua numeroista"
        //console.log("Ei ole pelkkiä numeroita")
        return false
    }
}

function sahkopostinTarkistus(){
    const sahkoPosti = document.getElementById('sahkoPostiKentta').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //console.log(regex.test(sahkoPosti))
    if (regex.test(sahkoPosti) == true){
        document.getElementById('sahkopostiVirhe').textContent = ""
        return true
    }
    else{
        document.getElementById('sahkopostiVirhe').textContent = "Sähköpostin täytyy olla sähköposti"
        return false
    }
}

function skupuolenTarkistus(){
    var checked_gender = document.querySelector('input[name = "question"]:checked');

    if(checked_gender != null){
        document.getElementById('sukupuoliVirhe').textContent = ""  
        return true 
    } else {
        document.getElementById('sukupuoliVirhe').textContent = "Valitse sukupuoli"  
        return false 
    }
}

function kielenTarkistus(){
    var kieli = document.querySelector('input[name = "kieli"]:checked');

    if(kieli != null){  
        document.getElementById('kieliVirhe').textContent = ""  
        return true 
    } else {
        document.getElementById('kieliVirhe').textContent = "Valitse kieli"  
        return false 
    }
}