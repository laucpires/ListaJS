function calcular() {
    let base = Number(document.getElementById('base').value);
    let altura = Number(document.getElementById('altura').value);
    let formula = (base * altura) / 2;
    let resposta = document.querySelector('p#resposta');
    resposta.innerHTML = `A área do triângulo de base igual a ${base} e altura igual a ${altura} é igual a ${formula}.`
}