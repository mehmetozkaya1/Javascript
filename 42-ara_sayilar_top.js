var sayi1 = Number(prompt("Birinci Sayıyı Giriniz: "));
var sayi2 = Number(prompt("Lütfen İkinci Sayıyı Giriniz: "));
var toplam = 0;
for(sayi1;sayi1<=sayi2;sayi1++){
    toplam = toplam + sayi1;
}
document.write("Toplam : " + toplam);