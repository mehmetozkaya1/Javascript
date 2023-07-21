/*
    Number ve String class'ı işlemlerinde kullanılan metotlar.
*/

var sayi = "1462.1548";

var float = parseFloat(sayi); // 1462.1548 Kesirli bir Number döndürdü.

var int = parseInt(sayi); // 1462 Bir tam sayı Number döndürdü.

var sayi1 = Number(sayi); // Number yani sayılsa değere çevirir.

var metin = String(Number(sayi)); // Metin haline getirdi.