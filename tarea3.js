const lista=document.querySelectorAll("li");


//Tarea 1-lista de numeros, obtener promedio:
   
function obtenerPromedio(){

    let sumarNumeros= 0;
    for(let i=0; i<lista.length; i++){
   
        sumarNumeros+=Number(lista[i].innerText);
        console.log(sumarNumeros)
    }
    let promedio= sumarNumeros / lista.length;
    
    document.querySelector(".promedio").innerText="El promedio es "+ promedio;
    
}




//Tarea 2- obtener el numero mas pequeño:
function obtenerNumeroMenor(){
    let numeroMenor= lista[0].innerText; 
    for(let i=1; i<lista.length; i++) { 
    
        if(lista[i].innerText < numeroMenor) {
        numeroMenor= lista[i].innerText;
        }  
    }document.querySelector(".numero-menor").innerText= "El numero menor es "+ numeroMenor;
}




//Tarea 3- obtener el numero mas grande:
function obtenerNumeroMayor(){
    let numeroMayor= lista[0].innerText; //maximo de nuestro array por el momento -> 0
    for(let i=1; i<lista.length; i++) { //empezamos desde la 2da posicion.
        if(lista[i].innerText > numeroMayor) {
        numeroMayor= lista[i].innerText;
        }  
    }
    document.querySelector(".numero-mayor").innerText= "El numero mayor es "+ numeroMayor;
}




// Tarea 4- obtener el numero mas frecuente: 
function obtenerNumerosFrecuentes() {

    for(i =0; i<lista.length; i++) {
        for(let j=i+1; j<lista.length; j++){

            if(lista[j].innerText === lista[i].innerText)
                console.log(lista[i].innerText);
                numeroFrecuente= lista[i].innerText;
    
        }document.querySelector(".numero-frecuente").innerText="El numero mas frecuente es: "+ numeroFrecuente;
    }
     
}


    obtenerPromedio(lista);
    obtenerNumerosFrecuentes(lista);
    obtenerNumeroMenor(lista);
    obtenerNumeroMayor(lista);    
    








