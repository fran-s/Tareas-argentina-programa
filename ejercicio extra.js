// ingresar al bar, ejercicio extra.
const $botonIngresar = document.querySelector(`#ingreso`);

$botonIngresar.onclick = function() {

    const edadUsuario= Number(document.querySelector(`#edad-usuario`).value)
    const NombreUsuario =document.querySelector(`#nombre-usuario`).value;
    const MayoriaDeEdad=18;
    let  resultado=0;
    if(edadUsuario>= MayoriaDeEdad ) {
        resultado= (" Bienvenido  "+ NombreUsuario);
    }else {
      resultado = ("No sos bienvenido " + NombreUsuario);
    }
    console.log(resultado);

    document.querySelector("#entrada").value = resultado;
    console.log(resultado);
  return false;
}
