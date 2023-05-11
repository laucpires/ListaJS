function contaVogais() {
    let palavra = prompt('Digite uma palavra para contar as vogais presentes nela:');
    let palavraMaiuscula = palavra.toUpperCase();
    let contador = 0;
    let erro = false;
    
    for (let i = 0; i < palavraMaiuscula.length; i++) {
        let charCode = palavra.charCodeAt(i);
        if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
            alert('Por favor, digite apenas letras do alfabeto.');
            erro = true;
            break;
        }
        else if (palavraMaiuscula[i] == 'A' || palavraMaiuscula[i] == 'E' || palavraMaiuscula[i] == 'I' || palavraMaiuscula[i] == 'O' || palavraMaiuscula[i] == 'U') {
            contador++;
        }
    }
    
    if (!erro) {
        alert(`A palavra ${palavra} possui ${contador} vogais.`);
    }
}