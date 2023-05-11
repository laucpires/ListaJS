function calcular() {
    let raio = prompt('Digite o raio do círculo para calcular a área e o perímetro:');
    let formulaArea = Math.PI * (raio ** 2);
    let formulaPerimetro = (2 * Math.PI) * raio;
    alert(`A área do círculo é igual a ${formulaArea}.`);
    alert(`O perímetro do círculo é igual a ${formulaPerimetro}.`);
}