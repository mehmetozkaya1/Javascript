document.writeln("Link sayısı: " + document.links.length);
document.writeln("Resim sayısı: " + document.images.length);
document.writeln("Form elemanı sayısı: " + document.forms["test"].length);

function yaz(){
    var test = document.forms["test"];
    for(var i = 0; i<test.length;i++){
        document.write(test.elements[i].value + "<br>");
    }
}