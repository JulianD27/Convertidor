function ejecutar(){
    let arreglo = document.getElementById("letra").value;
    let resultado = '';
    for (let i = 0; i < arreglo.length; i++) {
      let charCode = arreglo.charCodeAt(i);
      let binario = '';
      for (let j = 7; j >= 0; j--) {  
        binario += (charCode & (1 << j)) ? '1' : '0';
      }
      resultado += binario + ' ';
    }
    document.getElementById("texto1").innerHTML = "El numero binario es " + resultado.trim();
    console.log(resultado.trim()); 
}
function ejecutar2(){

  let binario = document.getElementById("numero").value;
  let caracteres = '';

  for (let i = 0; i < binario.length; i += 8) {
    let byte = binario.substr(i, 8);
    let charCode = 0;

    for (let j = 0; j < byte.length; j++) {
      charCode = charCode * 2 + (byte[j] === '1' ? 1 : 0);
    }

    caracteres += String.fromCharCode(charCode);
  }

  document.getElementById("texto2").innerHTML = "El caracter es " + caracteres;
  console.log(caracteres);
}

function mostrarCaracter(){  
  let binario = document.getElementById("numero").value;
  let decimal = parseInt(binario, 2);
  let caracter = String.fromCharCode(decimal);
  document.getElementById("texto2").innerHTML = "El caracter es " + caracter;
}


