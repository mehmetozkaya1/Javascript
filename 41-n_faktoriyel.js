var n;
var carpim = 1;
var i = 1;

n = Number(prompt("Kaç faktöriyel : "));
for(i;i<=n;i++){
    carpim = carpim * i;
}

document.write(n + "! = " + carpim);