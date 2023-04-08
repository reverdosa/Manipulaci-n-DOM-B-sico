const h1 = document.querySelector("h1");
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado")

btn.addEventListener("click", sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = Number (input1.value) + Number (input2.value);
    pResultado.innerText = "Resultado: " + sumaInputs;
}

