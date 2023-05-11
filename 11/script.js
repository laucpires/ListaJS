function verificaPrimo() {
    let numero = prompt("Digite um número:");
    let primo = true;
    numero = Number(numero);
    if (numero <= 1) {
        alert("O número 1 ou seus antecessores não são primos.");
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        alert(`O número ${numero} é primo.`);
    }
    else {
        alert(`O número ${numero} não é primo.`);
    }
}