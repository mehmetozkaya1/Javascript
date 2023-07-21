/*
    JS Number class metotlarını inceleyelim.
*/

var sayi = 12.5982;

var string_number = sayi.toString(); // "12.5982"

var ussu = sayi.toExponential(3); // 3. kuvvetini alır.

var fixed = sayi.toFixed(0); // Sayıyı stringe çevirir ve verilen parametreye göre birkaç basamak alır ve onu yuvarlar. // 13

var fixed1 = sayi.toFixed(2); // 12.60 ondalık 2 basamak var.

var precision = sayi.toPrecision() // Sayıyı stringe çevirir ve istenilen basamak sayısı kadar yuvarlar. // 12.5982

var precision1 = sayi.toPrecision(3) // 12.6