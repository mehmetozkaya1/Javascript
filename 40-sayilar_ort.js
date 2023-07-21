// 3 tane sayı
/*
var sayi;
var ort;
var toplam = 0;
var i = 1;

do{
    sayi = Number(prompt("Lütfen bir sayı giriniz: "));
    toplam = toplam + sayi;
    i++;
}while(i<=3);

ort = toplam/3;
document.write(ort);
*/

// istenilen kadar sayı

var n;
var sayi1;
var ort1;
var toplam1 = 0;
var s;

n = Number(prompt("Kaç tane sayı gireceksiniz: "))

for(s=1;s<=n;s++){
    sayi1 = Number(prompt("Lütfen bir sayı giriniz: "));
    toplam1 = toplam1 + sayi1;
}
ort = toplam1 / n;
document.write("Ort: " + ort);