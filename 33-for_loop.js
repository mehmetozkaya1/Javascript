/*
    for(sayaç ; sayaç şartı ; sayaç artışı){
        ...
    }
*/

// Ekrana 5 kere merhaba yazdıran for döngüsü.

for(var i=0 ; i<5 ; i++){
    document.write("Merhaba <br>");
}

// Birden beşe kadar olan sayıları yazdıran for döngüsü.

for(var c=1 ; c<=5 ; c++){
    document.write(c + "<br>");
}

// Sıfırdan n'e kadar olan çift sayıları yazdıran for döngüsü.

var sayi = Number(prompt("Lütfen bir sayı giriniz: "));
var n;

for(n=0 ; n<=sayi ; n++){
    if(n%2==0){
        document.write(n + "<br>");
    }
}

// ya da

for(n=0 ; n<=sayi ; n+=2){
    document.write(n + "<br>");
}

// 0-n arası sayıların toplamını veren for döngüsü.

var toplam = 0;

for(n=0 ; n<=sayi ; n++){
    toplam = toplam + n;
}

document.write("Toplam : " + toplam);