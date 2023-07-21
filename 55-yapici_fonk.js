/*
    Yapıcı Fonksiyon nesne içerisinde tanımlanan özel bir fonksiyondur. İsmi constructor olmak zorundadır.
    Sınıftan yeni bir nesne oluşturulduğu zaman otomatik olarak çalışan metottur.
    Nesnenin propertilerine başlangıç değeri atamak için kullanılır.
*/

/*
    Sınıf içerisinde tanımlanan fonksiyonlara metot denir.
*/

class Daire{
    constructor(yaricap){
        this.yaricap = yaricap;
    }

    alan(){
        return 3.14 * this.yaricap * this.yaricap;
    }

    cevre(){
        return 2 * 3.14 * this.yaricap;
    }
}

class Ucgen{
    constructor(genislik,yükseklik){
        this.genislik = genislik;
        this.yükseklik = yükseklik;
    }

    alan(){
        return (this.genislik * this.yükseklik) / 2;
    }
}