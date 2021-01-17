var cuadro_canvas = document.getElementById("area_dibujo");
var lienzo_papel = cuadro_canvas.getContext("2d");
var borrador = document.getElementById("boton_borrar");
borrar();
borrador.addEventListener("click", borrar);
cuadro_canvas.addEventListener("mousedown", puntoInicial);
cuadro_canvas.addEventListener("mouseup", puntoFinal);
cuadro_canvas.addEventListener("mousemove", dibujar);
let x1;
let y1;
let estaDibujando = false;
borrar();
function puntoInicial(evento)
{
    x1 = evento.offsetX;
    y1 = evento.offsetY;
    estaDibujando = true;
}
function puntoFinal(evento)
{
    dibujar_linea("blue", x1, y1, evento.offsetX, evento.offsetY, lienzo_papel);
    estaDibujando = false;
}
function dibujar(evento){
    if (estaDibujando)
    {
        dibujar_linea("blue", x1, y1, evento.offsetX, evento.offsetY, lienzo_papel);
        x1 = evento.offsetX;
        y1 = evento.offsetY;
    }

}
function borrar()
{
    cuadrado("white", lienzo_papel);
}

function cuadrado(color, lienzo){
    console.log("Borrando")
    lienzo.fillStyle = color;
    lienzo.rect(0, 0, 400, 400);
    lienzo.stroke();
    lienzo.fill()
    dibujar_linea("red", 0, 0, 400, 0, lienzo_papel);
    dibujar_linea("red", 400, 0, 400, 400, lienzo_papel);
    dibujar_linea("red", 0, 0, 0, 400, lienzo_papel);
    dibujar_linea("red", 0, 400, 400, 400, lienzo_papel);
}
function dibujar_linea(color,x1, y1, x2, y2, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(x1,y1);
    lienzo.lineTo(x2,y2);
    lienzo.stroke();
    lienzo.closePath;
}
