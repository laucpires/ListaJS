function limitDecimalPlaces(event) {
    const input = event.target;
    const maxDecimals = 2;
    if (input.value.includes('.')) {
        const decimalPlaces = input.value.split('.')[1].length;
        if (decimalPlaces > maxDecimals) {
            input.value = input.value.slice(0, input.value.length - 1);
        }
    }
}

function calcular() {
    let capital = document.getElementById("capital");
    let juros = document.getElementById("juros");
    let meses = document.getElementById("meses");
    if (capital.value.trim() === '' || juros.value.trim() === '' || meses.value.trim() === '') {
        alert("Preencha todos os dados corretamente.");
    } else {
        let montante = Number(capital.value) * ((1 + (Number(juros.value) / 100)) ** Number(meses.value));
        let resultado = montante.toFixed(2);
        alert(`O montante referente às informações é aproximadamente ${resultado}.`);
    }
}