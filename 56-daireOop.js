// Daire class'ı oluşturup 2 farklı daire nesnesi oluşturalım.

class Daire{
    constructor(r){
        this.r = r;
    }

    alan(){
        return 3.14 * this.r * this.r;
    }

    cevre(){
        return 2 * 3.14 * this.r;
    }
}

var d1 = new Daire(5);
var d2 = new Daire(7);

document.write("D1 alan ve çevre : " + d1.alan() + " " + d1.cevre() + "<br>");
document.write("D2 alan ve çevre : " + d2.alan() + " " + d2.cevre());