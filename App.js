
/*function realizar(){
    let numero1 = parseFloat(document.getElementById("n1").value)
    let numero2 = parseFloat(document.getElementById("n2").value)
    let op = document.getElementById("Op").value
    const resultado = document.getElementById('result')

    if(op == "+") resultado.innerHTML = numero1 + numero2
    else if(op == "-") resultado.innerHTML = numero1 - numero2
    else if(op == "/" && numero2 != 0) resultado.innerHTML = numero1 / numero2
    else if(op == "/" && numero2 == 0) resultado.innerHTML = "NO SE PUEDE DIVIDIR POR CERO."
    else resultado.innerHTML = numero1 * numero2
}*/

function realizar2(ingresado){
    const numero = document.getElementById('num')
    
    if(typeof ingresado == Number){
        console.log("ho la")
        let num = ingresado.toString()
        numero.innerHTML += num
    }
    if(typeof ingresado == String){
        if(num1 == null) num1 = numero 
        else if (num2 == null) num2 = numero
        else if (num1 == null && num2 == null) numero.innerHTML = 'NO SE HA INGRESADO NINGUN NUMERO'
        else if (num1 >= 0 && num1 >= 0){/* si quiere ingresar mas de dos numeros vamos a sumar los dos numeros anteriores en 'num1' y escribir el nuevo en 'num2' y asi...*/
            num1 = num1 + num2
            num2 = null
        } 
        numero.innerHTML = ''
        if (op == '+' || op == '-' || op == '*' || op == '/') op = ingresado
        /*else if (op == 'M+') /* aca hay que guardar el resultado*/
        /*else if (op == 'M') /* Traer de lka memoria el resultado guardado para poder operar */
        else if (op == '<='){
            num2.RemoveAt(num2.length -1)
            numero.innerHTML = num2
        } 
    }
    
        
}
