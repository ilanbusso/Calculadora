
function realizar(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let op = document.getElementById("Op").value
    const resultado = document.getElementById('result')

    if(op == "+") resultado.innerHTML = numero1 + numero2
    else if(op == "-") resultado.innerHTML = numero1 - numero2
    else if(op == "/" && numero2 != 0) resultado.innerHTML = numero1 / numero2
    else if(op == "/" && numero2 == 0) resultado.innerHTML = "NO SE PUEDE DIVIDIR POR CERO."
    else resultado.innerHTML = numero1 * numero2
}

let contenidoPantalla = "";
let resultadoMemoria = "";
let operadorAnterior = "";
let numeroAnterior = "";

function realizar2(valor) {
  const pantalla = document.getElementById("num");

  if (valor === 'DEL') {
    contenidoPantalla = contenidoPantalla.substring(0, contenidoPantalla.length - 1);
  }

  else if (valor === 'M+') {
    resultadoMemoria = contenidoPantalla;
  }

  else if (valor === 'M-') {
    contenidoPantalla = contenidoPantalla + resultadoMemoria;
  }

  else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
    if (contenidoPantalla !== "") {
      if (numeroAnterior !== "" && operadorAnterior !== "") {
        let a = parseFloat(numeroAnterior);
        let b = parseFloat(contenidoPantalla);
        let resultado = "";

        if (operadorAnterior === '+') {
          resultado = a + b;
        }
        else if (operadorAnterior === '-') {
          resultado = a - b;
        }
        else if (operadorAnterior === '*') {
          resultado = a * b;
        }
        else if (operadorAnterior === '/') {
          if (b === 0) {
            resultado = "Error";
          }
          else {
            resultado = a / b;
          }
        }

        contenidoPantalla = resultado.toString();
      }

      numeroAnterior = contenidoPantalla;
      operadorAnterior = valor;
      contenidoPantalla = contenidoPantalla + valor;
    }
  }

  else if (valor === '=') {
    if (numeroAnterior !== "" && operadorAnterior !== "") {
      let a = parseFloat(numeroAnterior);
      let textoB = contenidoPantalla.split(operadorAnterior)[1];
      let b = parseFloat(textoB);
      let resultado = "";

      if (operadorAnterior === '+') {
        resultado = a + b;
      }
      else if (operadorAnterior === '-') {
        resultado = a - b;
      }
      else if (operadorAnterior === '*') {
        resultado = a * b;
      }
      else if (operadorAnterior === '/') {
        if (b === 0) {
          resultado = "Error";
        }
        else {
          resultado = a / b;
        }
      }

      contenidoPantalla = resultado.toString();
      operadorAnterior = "";
      numeroAnterior = "";
    }
  }

  else {
    contenidoPantalla = contenidoPantalla + valor;
  }

  pantalla.innerHTML = contenidoPantalla;
}