/*
    document nesnesi tarayıcıdaki HTML sayfasını temsil eder.
*/

document.write("Mehmet"); // Sayfaya yaz.
document.writeln("Mehmet"); // Sayfaya yaz ve alt satıra in.
document.getElementById("baslik"); // Id kullanarak nesneyi seç.
document.getElementsByName("Isim"); // İsim kullanarak nesneyi seç.
document.getElementsByTagName("etiket"); // Herhangi bir etiketi kullanarak nesneyi seç.
document.URL; // Aktif sayfanın adresi
document.referrer // Aktif sayfaya hangi adresten gelindiğini verir.
document.title // Sayfa başlığı
document.documentElement.clientWidth // Sayfanın genişliği
document.documentElement.clientHeight // Sayfanın uzunluğu
document.characterSet // Sayfanın karakter setini döndürür.
document.domain // Alan adını döndürür.
document.forms() // Sayfadaki form elemanlarına ulaşmamızı sağlar.
document.images() // Sayfadaki resimlere ulaşmamızı sağlar.
document.links() // Sayfadaki linklere ulaşmamızı sağlar.
document.lastModified() // Sayfanın son güncellenme tarihini döndürür.