var yaricap = Number(prompt("Yarıçapı giriniz: ")), alan, cevre;
const PI = 3.14;

if(yaricap < 0){
    document.write("Lütfen pozitif bir yarıçap giriniz.");
}
else{
    alan = yaricap * yaricap * PI;
    cevre = 2 * yaricap * PI;

    document.write("Alan : " + alan + " " + "Çevre : " + cevre)
}