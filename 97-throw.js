function kontrol(){
    var dersnotu, hatailetisi;

    hatailetisi = document.getElementById("hatailetisi");
    hatailetisi.innerHTML = "";

    dersnotu = document.getElementById("dersnotu").value;

    try{
        if(dersnotu == "") throw "Ders notu girilmemiş!";
        if(isNaN(dersnotu)) throw "Sayısal bir değer girilmemiş!";
        
        dersnotu = Number(dersnotu);

        if(dersnotu<0 || dersnotu>10) throw "Ders notu 0-10 arasında olmalı";
    }
    catch(err){
        hatailetisi.innerHTML = "Hata Mesajı: " + err;
    }
    finally{ // hata olsa da olmasa da girilen değer yazdırılsın.
        document.getElementById("girilendeger").innerHTML = "Girilen değer: " + dersnotu;
    }
}