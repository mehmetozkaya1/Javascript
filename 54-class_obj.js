/*
    Sınıf oluşturmak için class komutu kullanılır.
    class isimleri genelde ilk harfi büyük olarak yazılır.
*/

class SınıfAdı{ // Sınıfımız
    constructor(){ // Yapıcı metot

    }
}

class Uye{ // Uye sınıfı oluşturuldu.
    constructor(uyeNo){ // Sınıfın bir parametresi veriliyor.
        this.uyeNo = uyeNo; // Parametre sınıfa atanıyor.
    } // this komutu sınıfı ve her bir nesneyi özel olarak temsil eder. Sınıf parametresine değer atar.
}

// Class'tan obje oluşturma:

var uye1 = new Uye(1); // 1. üye oluşturuldu. 1 üye numarası
var uye2 = new Uye(2); // 2. üye oluşturuldu. 2 üye numarası

// Nesnelerin propertilerine ulaşmak.

document.write("Uye no: " + uye1.uyeNo); // Üye 1'in üye No'sunu alabiliriz.