/*
    Array class'ı özellikleri ve metotları.
*/

var sayilar = [1,5,2,6,3];
var sayilar2 = [10,11,12];

document.write("Dizi: " + sayilar + "<br>");
document.write("Eleman Sayısı: " + sayilar.length + "<br>");
document.write("Sıralanmış Dizi: " + sayilar.sort() + "<br>");
document.write("Ters Dizi: " + sayilar.reverse() + "<br>");

sayilar.push(9); // Dizinin sonuna verilen elemanı ekler.
sayilar.unshift(8); // Dizinin başına verilen elemanı ekler.
sayilar.concat(sayilar2); // sayilar2'yi sayilar'a ekler.
sayilar.join("+"); // Dizinin elemanlarını verilen karakteri arasına koyarak birleştirir.
sayilar.slice(0,2); // Dizinin verilen indekslerdeki elemanlardan keser ve arasını alır.
sayilar.shift(); // Dizinin ilk elemanını döndürür ve diziden siler.
sayilar.pop(); // Dizinin son elemanını döndürür ve diziden siler.
sayilar.indexOf(5); // Verilen dizi elemanının dizideki indeksini döndürür.
sayilar.toString(); // Dizinin elemanlarını string olarak döndürür.
sayilar.splice(2,0,65,31); // Dizinin 2. indeksine 0 tane eleman kaldırarak 65 ve 31 elemanlarını ekle.

// Fazlalık olarak bir dizinin en büyük değeri için:

var max = sayilar[0];

for(var i = 0; i<sayilar.length; i++){
    if(max < sayilar[i]){
        max = sayilar[i];
    }
}

// ya da

var largest = Math.max.apply(0, sayilar);

