var yas = Number(prompt("Yaşınızı Giriniz: "));

if(yas < 18)
    document.getElementById("baslik").innerHTML = "Yaşınız 18'den küçük.";

else
    document.getElementById("baslik").innerHTML = "Yaşınız 18'den büyük.";


var isim = prompt("İsminizi Giriniz: ");

if(isim == "Mehmet"){
    document.getElementById("baslik").innerHTML = "Girebilirsiniz";
}
else{
    document.getElementById("baslik").innerHTML = "Giremezsiniz.";
}