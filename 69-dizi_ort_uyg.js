/*
    Dizinin elemanlarını ekrandan alan ve dizinin ortalamasını bulan bir fonksiyon yazınız.
*/

var sayilar = new Array(5);
var toplam = 0;

function dizi_ort(){
    for(var i=0;i<sayilar.length;i++){
        sayilar[i] = Number(prompt("Sayıyı Giriniz: "));
    }
    for(var j=0;j<sayilar.length;j++){
        toplam = toplam + sayilar[j];
    }
    var ort = toplam / sayilar.length;

    return ort;
}

document.write(dizi_ort());