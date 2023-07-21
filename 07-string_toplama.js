/* 
    String ifadeleri toplamak/birleştirmek için + karakteri kullanılır.
*/

var ad = "Mehmet";
document.write("Adınız:"+ad);

var isim = "Aybala";
var soyisim = "Kılıç";
var tam_isim = isim + " " + soyisim;
document.write("<br>");
document.write(tam_isim);

document.write("<br>");
var veri = prompt("Adınız: ");
document.write("Merhaba "+veri+" nasılsın?");

document.write("<br>");
var adiniz = prompt("Adınız:");
var soyad = prompt("Soyadınız: ");
document.write(adiniz + " " + soyad);