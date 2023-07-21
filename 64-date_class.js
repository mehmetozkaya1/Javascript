/*
    JS Date class'ı ve metotlarını inceleyelim.
    Date class'ı tarih ve saat işlemleri için kullanılır.

    Daha kolay tarih işlemleri için aşağıdaki kütüphaneleri de kullanabiliriz:

    moment.js
    Date.js
    XDate.js

    *** Date(year,month,day,hours,minutes,seconds,ms)
*/

var tarih = new Date("July 7, 1972 08:31:00");

var milisecond = tarih.getTime(); // 1 Ocak 1970'ten itibaren bu tarihe kadarki zamanı milisaniye olarak döndürür.

var gun = tarih.getDate(); // Ayın gününü döndürür. (1-31)

var ay = tarih.getMonth(); // Yılın ayını döndürür. (0-11)

var gun_index = tarih.getDay(); // Haftanın gününü döndürür. (0-6) İlk gün pazar kabul edilir.

var saat = tarih.getHours(); // Günün saatini döndürür. (0-23)

var dakika = tarih.getMinutes(); // Saatin dakikasını döndürür. (0-59)

var saniye = tarih.getSeconds(); // Dakikanın saniyesini döndürür. (0-59)

var zaman_farki = tarih.getTimezoneOffset(); // Yerel saatin GMT ye göre dakika cinsinden farkını döndürür.

var yerel_saat = tarih.toLocaleString(); // Tarihi yerel formatta gösterir.

tarih.setDate(7); // Ayın gününü ayarlar. 0-31

tarih.setMonth(6); // Tarihin ayını ayarlar. 0-11

tarih.setFullYear(1972); // Tarihin yılını ayarlar.

tarih.setHours(8); // Tarihin saatini ayarlar. 0-23