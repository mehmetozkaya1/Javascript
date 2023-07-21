function tarih(){
    var an = new Date();
    var yil = an.getFullYear();
    var ay = an.getMonth() + 1;
    var gun = an.getDay();
    var tarih = "Tarih: " + gun + "/" + ay + "/" + yil;
    document.getElementById("demo").innerHTML = tarih;
}