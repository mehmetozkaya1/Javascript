/*
    break komutu döngüyü kırarı ve döngüden çıkartır.
    continue komutu ise şartı sağlayan adımın atlanmasını sağlar.
*/

// Belirli bir değerde toplamayı kesen break komutu

var toplam = 0;
var i;

for(i=0;i<=5;i++){
    if(i==3){
        break;
    }
    toplam = toplam + i;
}
document.write(toplam + "<br>");

// 3 dışındaki diğer elemanların toplamını yazan continue komutu

var toplam2 = 0;
var n;

for(n=0;n<=5;n++){
    if(n==3){
        continue;
    }
    toplam2 = toplam2 + n;
}
document.write(toplam2);