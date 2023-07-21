// Merhaba yazdıran değer döndürmeyen fonksiyon

// Sayfaya yaz
function sayfaya_yaz(){
    document.write("Merhaba");
}

// HTML etiketine yaz.
function etikete_yaz(){
    document.getElementById("baslik").innerHTML = "Merhaba";
}

// Fonksiyonları çağırıyoruz.
sayfaya_yaz();
etikete_yaz();