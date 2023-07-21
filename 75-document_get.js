/*
    document.getElementById("baslik");

    document.getElementsByName("Isim");

    document.getElementsByTagName("etiket");

*/

document.getElementsByTagName("p"); // Tüm p etiketlerini seç.

var x = document.getElementsById("main");
var y = x.getElementsByTagName("p"); // Önce main id'li HTML elemanını seç ve altındaki tüm p etiketlerini seç.

document.getElementsByClassName("intro"); // Class ismi intro olan tüm etiketleri seç.

document.querySelectorAll("p.intro"); // Css seçici ile komut seçmek için kullanılır. Class özelliği intro olan p etiketlerini seç.

// HTML komutlarının içeriğinin veya özelliğinin değiştirilmesi için:

// HTML in içi:
document.getElementById("baslik").innerHTML = "icerik";

// HTML özelliği:
document.getElementById("baslik").src = "flama.jpg";

// HTML Attribute:
document.getElementById("baslik").setAttribute(ozellik,deger);

// CSS:
document.getElementById("baslik").style.color ="red";