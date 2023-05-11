function inverte() {
    let numero = prompt('Digite um número:');
    let numeroInvertido = Number(numero.toString().split('').reverse().join(''));
    alert(`O número ${numero} invertido é igual a ${numeroInvertido}.`);
}