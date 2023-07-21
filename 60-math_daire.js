// Math classı kullanarak bir dairenin özelliklerini veren bir class oluşturun.

class Daire{
    constructor(yaricap){
        this.r = yaricap;
    }

    alan(){
        return Math.PI * Math.pow(this.r,2); 
    }

    cevre(){
        return 2 * Math.PI * this.r;
    }
}

var daire1 = new Daire(8);

document.write(daire1.alan() + " " + daire1.cevre());