/*
    JS'te hataları yönetmek ve hata durumunda ne yapılacağını anlatmak için aşağıdaki komutlar kullanılır:

    * try: Hata olabilecek kodlar bu bloğun içine yazılır.
    * catch: Hatayı yakalar ve hata mesajını ekrana yazmamızı sağlar.
    * throw: Özel hata mesajları göstermemizi sağlar.
    * finally: Hata olsa da olmasa da çalışması istenen kodlar bu bloğa yazılır.
*/

try{
    aaalert("Merhaba Dünya");
}
catch(err){
    document.getElementById("hata").innerHTML = err.message;
}