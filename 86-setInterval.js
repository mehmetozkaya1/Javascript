var i = 0;

function say(){
    document.getElementById("kutu").innerHTML = i;
    i++;
}

// setInterval metodu say fonksiyonunu her 1 sn'de bir çalıştırıyor ve HTML içeriğini güncelliyor.
setInterval(say,1000);