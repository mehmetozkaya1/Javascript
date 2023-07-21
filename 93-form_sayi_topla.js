function topla(){
    var sayi1 = Number(document.getElementById("sayi1").value);
    var sayi2 = Number(document.getElementById("sayi2").value);

    if(sayi1 == ""){
        alert("Lütfen bir sayı giriniz!");
    }
    else{
        document.getElementById("cevap").innerHTML = "Toplam: " + (sayi1 + sayi2);
    }
}

function odaklan(){
    document.getElementById("sayi1").style.backgroundColor = "yellow"; 
    document.getElementById("sayi2").style.backgroundColor = "yellow"; 
    document.getElementById("sayi1").focus();
    document.getElementById("sayi2").focus();
}