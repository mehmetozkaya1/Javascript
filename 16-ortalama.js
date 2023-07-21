var s1 = Number(prompt("Birinci Sayıyı Giriniz: "));
var s2 = Number(prompt("İkinci Sayıyı Giriniz: "));
var s3 = Number(prompt("Üçüncü Sayıyı Giriniz: "));

var ort = (s1 + s2 + s3) / 3;

document.getElementById("baslik").innerHTML = ort;