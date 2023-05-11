function conversao() {
    let temperatura = prompt('Digite uma temperatura em Fahrenheit para converter em Celsius:');
    let formulaFparaC = (temperatura - 32) * (5 / 9);
    let resposta = document.getElementById('resposta');
    resposta.innerHTML = `${temperatura}°F é igual a ${formulaFparaC}°C.`;
}