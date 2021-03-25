//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.


const $botonCalcular=document.querySelector(".calcular");

$botonCalcular.onclick = function() {

    const horas=document.querySelectorAll(".horas");
    const minutos=document.querySelectorAll(".minutos");
    const segundos=document.querySelectorAll(".segundos");
    
    let horasTotal= 0;    // <-- acumulador
    for(let i=0; i<horas.length; i++) {
        horasTotal+= Number(horas[i].value);
       
    }
    let minutosTotal=0;
    for(let i=0; i<minutos.length; i++) {
        minutosTotal+= Number(minutos[i].value);
        
    }
    let segundosTotal=0;
    for(let i=0; i<segundos.length; i++) {
       segundosTotal+=Number(segundos[i].value);
    }
    
    let segundosTotales= (horasTotal*3600 )+ (minutosTotal*60) +segundosTotal;

    //console.log(segundosTotales)
    
    let respuestaHoras=Math.floor (segundosTotales / 3600)
    let respuestaMinutos=Math.floor((segundosTotales%3600) /60);
    let respuestaSegundos=Math.floor (segundosTotales%60)
    
    console.log(respuestaHoras)
    console.log(respuestaMinutos)
    console.log(respuestaSegundos)
    
    document.querySelector(".respuesta").innerText="Tiempo total "+ respuestaHoras+" : "+respuestaMinutos+" : "+respuestaSegundos; 

     return false;
}

