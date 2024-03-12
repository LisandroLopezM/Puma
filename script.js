
function cambiarContenido() {
   
    var nuevosContenidos = ["Envío Gratis en compras superiores a $79.999", "3 Cuotas sin Interés en compras superiores a $69.000 con VISA Y MASTERCARD"];
  
    var h3Element = document.getElementById("miH3");
   
    h3Element.textContent = nuevosContenidos[Math.floor(Math.random() * nuevosContenidos.length)];
  }
  
  setInterval(cambiarContenido, 5000);
  