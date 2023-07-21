var n;
var i;
var s = 1;
var toplam = 0;
n = Number(prompt("Kaça kadar yazılsın: "));

// for

for(i=1;i<=n;i++){
    document.write(i + "<br>");
}

// while

while(s<=n){
    document.write(s + "<br>");
    s++;
}

// toplamları

for(i=1;i<=n;i++){
    document.write(i + "<br>");
    toplam = toplam + i;
}
document.write(toplam);

