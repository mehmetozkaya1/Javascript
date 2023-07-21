/*
    Şart sağlandığı sürece çalışan döngüdür.
*/

// Ekrana 5 kere Merhaba yazdıran while döngüsü

var i = 0;

while(i<=4){
    document.write("Merhaba <br>");
    i++;
}

// 1 den 5 e kadar olan sayıların toplamını veren while döngüsü

var c = 1;
var toplam = 0;

while(c<=5){
    toplam = toplam + c;
    c++;
}
document.write("Toplam: " + toplam);