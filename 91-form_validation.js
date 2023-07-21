/*
    Örneğin metin kutusuna değer girilmiş mi boş mu? Ya da girilen değer sayısal mı sözel mi? Tarih mi saat mi ? Email veya web adresi uygun bir biçimde mi? Sayısal değer uygun aralıkta mı?

    HTML formlarındaki veriyi okumak için:
    document.getElementById("eleman").value 
    ile değerini alabiliriz.
*/

function yaz(){
    alert("İsminiz: " + document.getElementById("isim").value + "Soyadınız: " + document.getElementById("soyad").value)
}