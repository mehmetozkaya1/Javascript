var n = Number(prompt("Kaç kere 'Merhaba' yazılsın."));
var i = 1;
var m = 1;
var s = 0;

// for'la

for(i;i<=n;i++){
    document.write(i + "-) " + "Merhaba <br>");
}

// while'la

while(m<=n){
    document.write(m + "-) " + "Merhaba <br>");
    m++;
}

// do-while'la

do{
    document.write(s+1 + "-) " + "Merhaba <br>");
    s++;
} while(s<n);