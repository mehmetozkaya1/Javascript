// Bir Ucgen class'ı oluşturup 2 tane üçgen nesnesi oluşturacağız.

class Ucgen{
    constructor(genislik, yükseklik){
        this.genislik = genislik;
        this.yükseklik = yükseklik;
    }

    alan(){
        return (this.genislik * this.yükseklik) / 2;
    }
}

var u1 = new Ucgen(7,9);
var u2 = new Ucgen(10,15);

document.write("U1 alan: " + u1.alan() + "<br");
document.write("U2 alan: " + u2.alan());