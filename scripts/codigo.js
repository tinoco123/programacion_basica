var can = document.getElementById("dibujo");
var lienzo = can.getContext("2d");
var num_lineas = document.getElementById("id_lineas")
var boton_lineas = document.getElementById("id_enviar_lineas")



function dibujar_linea(color,x1, y1, x2, y2)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x1,y1);
    lienzo.lineTo(x2,y2);
    lienzo.stroke();
    lienzo.closePath;
}


boton_lineas.addEventListener("click", dibujo_click);

function dibujo_click(){
    var lineas = parseInt(num_lineas.value);
    
    var limit = lineas
    espacio = can.height / limit;
    var l = 0
    var aumento = 0
    while (l < limit)
    {
        dibujar_linea("black", 0, aumento, aumento, can.height - 1);
        dibujar_linea("blue", can.width - 1, aumento, aumento, 0);
        
        aumento += espacio;
        l += 1;
        
    }
    l = 0;
    aumento = 0
    var aumentoy = can.height;
    while (l < limit)
    {
        dibujar_linea("yellow", can.width - 1, aumento, aumentoy, can.height - 1);
        dibujar_linea("pink", 0, aumento, aumentoy, 0);
        
        aumento += espacio;
        aumentoy -= espacio;
        l += 1;
    }
}




