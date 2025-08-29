
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
