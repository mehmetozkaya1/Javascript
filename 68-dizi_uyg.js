/*
    Dizi elemanlarının okunması için genellikle for döngüsü kullanılır.
*/
// For ile isim atama:

var isimler = new Array(3);

for(var j = 0; j<isimler.length;j++){
    isimler[j] = prompt("İsminizi Girin: ");
}

// For ile isim okuma

for(var i = 0; i<isimler.length; i++){
    document.write("İsim: " + isimler[i] +"<br>");
}