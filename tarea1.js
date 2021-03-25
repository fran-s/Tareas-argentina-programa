
const $botonIngresar = document.querySelector(`#ingresar`);

$botonIngresar.onclick = function() {
    const nombreUsuario=document.querySelector(`#nombre`).value;
    const segundoNombreUsuario= document.querySelector(`#segundo-nombre`).value;
    const apellidoUsuario= document.querySelector(`#apellido`).value;

    const edadUsuario=Number(document.querySelector(`#edad`).value);

    document.querySelector(`h1`).innerText= "Bienvenido "+ nombreUsuario;
    
    document.querySelector(`#respuesta`).innerText="Tu nombre es "+ nombreUsuario+" "+segundoNombreUsuario+" "+apellidoUsuario+" y tu edad es "+edadUsuario+" años";
    
   
return false;
}

































