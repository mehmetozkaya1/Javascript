var yas = Number(prompt("Yaşınızı Giriniz: "));

if(yas>50){
    document.getElementById("baslik").innerHTML = "Yaşlısınız.";
}
else if(yas>30){
    document.getElementById("baslik").innerHTML = "Orta Yaşlısınız.";
}
else if(yas>18){
    document.getElementById("baslik").innerHTML = "Yetişkinsiniz.";
}
else{
    document.getElementById("baslik").innerHTML = "Çocuksunuz.";
}