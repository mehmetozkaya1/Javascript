/*
    String ifadeler aslında birer karakter dizileridir.
    Kelimeyi ya da cümleyi oluşturan her bir karakter aslında bir dizi elemanıdır.
*/

var st = "Mehmet";

for(var i = 0; i<st.length;i++){
    document.write(st[i] + "<br>");
    document.write(typeof(st) + "<br>");
}