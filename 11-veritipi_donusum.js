/*
    Veritipi dönüşümleri için;

    Number()
    String()
    Boolean()
    Date()

    komutları kullanılır ve içerisine parametre olarak verilen değişkenleri verilen türe dönüştürür.
*/

// Ekrandan alınan 2 sayının toplamının bulunması ve ekrana yazdırılması

var ilksayi = prompt("İlk Sayı: ");
var ikincisayi = prompt("İkinci Sayı: ");

var toplam = ilksayi + ikincisayi;
document.write("İlk sayı: " + ilksayi + "\n" + "İkinci sayı: "+ ikincisayi + "\n" + "Toplam: " + toplam);

// Bu işlemde string olarak veri aldığımız için sonuç string döndü.

document.write("<br>");
var sayi1 = Number(ilksayi);
var sayi2 = Number(ikincisayi);

var toplam2 = sayi1 + sayi2;
document.write("İlk sayı: " + sayi1 + "\n" + "İkinci sayı: "+ sayi2 + "\n" + "Toplam: " + toplam2);