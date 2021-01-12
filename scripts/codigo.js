var can = document.getElementById("dibujo");
var lienzo = can.getContext("2d");

function dibujar_linea(color,x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1,y1);
    lienzo.lineTo(x2,y2);
    lienzo.stroke();
    lienzo.closePath;
}
var limit = 30
var l = 0
var aumento = 0


while (l < limit)
{
    dibujar_linea("black", 0, aumento, aumento, 300);
    dibujar_linea("blue", 300, aumento, aumento, 0);
    
    aumento += 10;
    l += 1;
    console.log(l, aumento);
}
l = 0;
aumento = 0
var aumentoy = 300;
while (l < limit)
{
    dibujar_linea("yellow", 300, aumento, aumentoy, 300);
    dibujar_linea("pink", 0, aumento, aumentoy, 0);
    
    aumento += 10;
    aumentoy -= 10;
    l += 1;
}




