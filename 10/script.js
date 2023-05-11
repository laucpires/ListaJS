function contaCaractere() {
    let palavra = prompt("Digite uma palavra:");
    let caractere = prompt("Digite um caractere presente na palavra para contar suas repetições:");
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].toLowerCase() == caractere.toLowerCase()) {
            contador++;
        }
    }
    alert(`O caractere ${caractere} aparece ${contador} vezes na palavra ${palavra}.`);
}