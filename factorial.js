function calcularFactorial() {
    let entrada = document.getElementById('numero').value;
    let numero = Number(entrada);
    let resultado = 1;

    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText = "Error: El número debe ser un entero positivo.";
        return;
    }

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    document.getElementById('resultado').innerText = "El factorial de " + numero + " es " + resultado;
}