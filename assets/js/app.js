const calcularFactorial = (num) => {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
};

// const userNumber = +prompt("Elija un numero del 1 al 20");

if (userNumber >= 1 && userNumber <= 20) {
    document.write("correcto <br>");
    for (let i = 1; i <= userNumber; i++) {
        document.write(`${i} x ${userNumber} = ${i * userNumber}` + "<br>");
    }
    for (let i = 1; i <= userNumber; i++) {
        document.write(`El factorial de ${i} es: ${calcularFactorial(i).toLocaleString()}` + "<br>");
    }
} else {
    document.write("numero incorrecto");
}
