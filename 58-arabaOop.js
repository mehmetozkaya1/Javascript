// Bir araba sınıfı oluşturacağız ve bundan bir araba nesnesi oluşturup kaç yıllık olduğuna bakacağız.

class Araba{
    constructor(model, yıl) {
        this.model = model;
        this.yıl = yıl;
    }

    age(x){
        return x - this.yıl;
    }
}

const date = new Date()
let year = date.getFullYear()
var araba = new Araba("Ford",2012);
document.write(araba.model + " arabanız " + araba.age(year) + " yaşında.");