var vize = Number(prompt("Vize notunuzu giriniz : "));
var final = Number(prompt("Final notunuzu giriniz : "));

var ort = (vize+final)/2;

if(ort < 50){
    document.getElementById("baslik").innerHTML = "Kaldın.";
}
else{
    document.getElementById("baslik").innerHTML = "Geçtin.";
}