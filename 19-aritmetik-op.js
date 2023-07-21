/* 
    Toplama : +
    Çıkarma : -
    Çarpma : *
    Bölme : /
    Mod : %
    Üs Alma : **
*/

var sayi1 = Number(prompt("Sayı 1 giriniz: "));
var sayi2 = Number(prompt("Sayı 2 giriniz: "));

var toplam, fark, carpma, bolme, mod;

toplam = sayi1 + sayi2;
fark = sayi1 - sayi2;
carpma = sayi1 * sayi2;
bolme = sayi1 / sayi2;
mod = sayi1 % sayi2;

document.write(String(toplam) + " " + fark + " " + carpma + " " + bolme + " " + mod);

/*
    Arttırma Azaltma Operatörleri:

    ++x = Önce x'i 1 arttır sonra x'i kullan.
    x++ = Önce x'i kullan sonra x'i 1 arttır.
    --x = Önce x'i 1 azalt sonra x'i kullan.
    x-- = Önce x'i kullan sonra x'i 1 azalt.
*/

var a = 2;
document.write(a++); // x'i 2 olarak kullandı ve 3 yaptı.
document.write(a); // 3

var b = 5;
document.write(++b); // 6
document.write(b); // 6