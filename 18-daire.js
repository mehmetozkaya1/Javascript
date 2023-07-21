var yaricap, alan, cevre;
const PI = 3.14;

yaricap = Number(prompt("Yarıçapı giriniz: "));

alan = PI * yaricap * yaricap;
cevre = 2 * PI * yaricap;

document.getElementById("baslik").innerHTML = "Alan: " + alan + "<br>" + "Çevre: " + cevre;