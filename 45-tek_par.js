/*
    Parametre fonksiyona ana program tarafından gönderilen değerdir. Fonksiyon bu değeri alıp bir değişken gibi kullanabilir.
*/

// Sayfaya İsmi Yazdıran fonksiyon
function yazdir(isim){
    document.write(isim + "<br>");
}

yazdir("Mehmet");

// Sayfaya girilen ismi yazdıran fonksiyon

isim = prompt("İsminizi Giriniz: ");
function isim_yaz(name){
    document.write(name);
}

isim_yaz(isim);