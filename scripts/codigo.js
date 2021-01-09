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

dibujar_linea("black", 100,100, 200, 200);
dibujar_linea("red", 125,125, 225, 225);