let numero = prompt("Digite um número para receber seu fatorial:");

function fatorial(numero) {
    numero = Number(numero);
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    alert(`O resultado do fatorial de ${numero} é ${resultado}.`);
}