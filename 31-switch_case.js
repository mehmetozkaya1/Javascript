var degisken = Number(prompt("Lütfen Gün seçmek için 1-7 arasında bir sayı giriniz.")), gun;

switch(degisken){
    case 1:
        gun = "Pazartesi";
        break;
    case 2:
        gun = "Salı";
        break;
    case 3:
        gun = "Çarşamba";
        break;
    case 4:
        gun = "Perşembe";
        break;
    case 5:
        gun = "Cuma";
        break;  
    case 6:
        gun = "Cumartesi";
        break;
    case 7:
        gun = "Pazar";
        break;
}

document.write(gun);