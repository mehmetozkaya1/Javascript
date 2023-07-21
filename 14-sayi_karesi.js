var sayi = prompt("Karesi alınacak sayıyı giriniz: ");

sayi = Number(sayi);

var kare = sayi * sayi;

document.getElementById("baslik").innerHTML = kare;