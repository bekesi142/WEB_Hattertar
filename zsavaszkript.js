function kiszamol() {
    
    mennyiseg = parseInt(document.getElementById("mennyiseg").value);
    sebesseg = parseInt(document.getElementById("sebesseg").value);
    mertekegyseg = document.getElementById("mertekegyseg").value;
    mertekegyseg_sebesseg = document.getElementById("mertekegyseg_sebesseg").value;
    if(mertekegyseg == "megabyte") {
        mennyiseg = mennyiseg*1000;
    }
    else if(mertekegyseg == "gigabyte") {
        mennyiseg = mennyiseg*1000*1000;
    }
    else if(mertekegyseg == "terrabyte") {
        mennyiseg = mennyiseg*1000*1000*1000;
    }

    if(mertekegyseg_sebesseg == "megabyte") {
        sebesseg = sebesseg*1000;
    }
    else if(mertekegyseg_sebesseg == "gigabyte") {
        sebesseg = sebesseg*1000*1000;
    }
     /*
    ora = Math.round(mennyiseg/sebesseg/3600);
    perc = Math.round(ora-mennyiseg/sebesseg/60)
    masodperc = Math.round(ora-perc-mennyiseg/sebesseg) */

    document.getElementById("vegeredmeny").innerHTML =  Math.round(mennyiseg/sebesseg) + "masodperc";


}

function csuszka() {
    sebesseg = parseInt(document.getElementById("sebesseg").value);
    document.getElementById("csuszka_erteke").innerHTML = sebesseg;

    
}