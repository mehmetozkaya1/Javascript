var vize = Number(prompt("Vize notunuzu giriniz : "));
var final = Number(prompt("Final notunuzu giriniz : "));

var ort = (vize + final) / 2;

if(ort < 50){
    document.write("Ortalama : " + ort + " " + "Kaldı!");
}
else{
    document.write("Ortalama : " + ort + " " + "Geçti!");
}