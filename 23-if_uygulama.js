var yas = Number(prompt("Lütfen Yaşınızı Giriniz: "));

if(yas < 18){
    document.getElementById("baslik").innerHTML = "Yaşınız uygun değil. Sitemize kayıt olamazsınız."
}
else{
    document.getElementById("baslik").innerHTML = "Yaşınız uygun. Sitemize kayıt olabilirsiniz."
}