document.getElementById("baslik").innerHTML = "Değiştirildi!.";

document.getElementById("baslik").style.color = "red";
document.getElementById("baslik").style.fontFamily = "Arial";

var resim = document.getElementById("resim");

function albayrak(){
    resim.src = "https://via.placeholder.com/500x700"
}

function matem_bayrak(){
    resim.src = "https://via.placeholder.com/600x700"
}

// HTML etiketinin onmouseover özelliği ile mouse üstündeyken ya da onmouseout özelliği ile mouse dışarıdayken gerçekleşecek olan fonksiyonun verebiliriz.