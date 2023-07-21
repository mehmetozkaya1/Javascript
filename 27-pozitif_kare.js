var sayi = Number(prompt("Lütfen pozitif bir sayı giriniz: "));

if(sayi < 0){
    document.write("Lütfen pozitif bir sayı giriniz.");
}
else if(sayi == 0){
    document.write("Sıfırdan farklı pozitif bir sayı giriniz.");
}
else{
    kare = sayi * sayi;
    document.write("Girdiğiniz sayının karesi: " + kare);
}