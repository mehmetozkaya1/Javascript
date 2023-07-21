var sayi1 = Number(prompt("Bir Sayı Giriniz: "));
var sayi2 = Number(prompt("İkinci sayıyı giriniz: "));

if(sayi1<sayi2){
    document.write("Büyük sayı: " + sayi2);
}
else if(sayi1 == sayi2){
    document.write("Sayılar Eşit.");
}
else{
    document.write("Büyük sayı: " + sayi1);
}