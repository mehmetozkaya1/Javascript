/*
    Do-while döngüsünde önce işlem yapılır ardından şart kontrol edilir. While döngüsünden tek farkı budur.
*/

// Sayfaya 5 kere art arda Merhaba yazdıran do-while döngüsü.

/*
var i = 0;

do{
    document.write("Merhaba <br>");
    i++;
} while(i<5);

document.write("2. bölüm.......")

var c = 0;

do{
    document.write("Merhaba");
    i++;
} while(c<-1);

// 1-5 e kadar toplam
var n = 1;
var toplam1 = 0;

do{
    toplam1 = toplam1 + n;
    n++;
} while(n<=5);

document.write(toplam1)

// Pozitif sayı girilinceye kadar yeni değer isteyen do-while döngüsü
*/

var deger;

do{
    deger = Number(prompt("Lütfen Pozitif bir Sayı giriniz: "));
} while(deger<=0);

document.write(deger);