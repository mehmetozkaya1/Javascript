/*
    JS String class'ının özelliklerini inceleyelim.
*/

var metin1 = "Mehmet Javascript çalışıyor. Çok eğleniyor.";
var metin2 = "Deneme 123";

var buyukHarf = metin1.toUpperCase();

var kucukHarf = metin1.toLowerCase();

var len = metin1.length();

var bosluksuz = metin1.trim(); // Baş ve sondaki boşlukları siler.

var bold = bold(metin1);

var italic = metin1.italic();

var character = metin1.charAt(9); // 9. indexteki karakteri döndür.

var concatted = metin1.concat(metin1, metin2); // metin1 ve metin2'yi birleştirir.

var replaced = metin1.replace("M","m"); // M yerine m koyacak.

var searched_index = metin1.search("M"); // M'nin indexini döndürür.

var substring = metin1.substring(1,8); // 1 ile 8. indexler arasındaki karakterleri döndürür.

var dogruMu = metin1.startsWith("M"); // M ile başlıuyor mu. True

var yanlisMi = metin1.endsWith("c");  // c ile bitiyor mu. False