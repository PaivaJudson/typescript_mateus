const inputNumero1 = document.getElementById("numero1") as HTMLInputElement;

const inputNumero2 = document.getElementById("numero2") as HTMLInputElement;

const btnSomar = document.getElementById("btnSomar") as HTMLButtonElement;

const btnSubtrair = document.getElementById("btnSubtrair") as HTMLButtonElement;

const resultado = document.getElementById("resultado") as HTMLSpanElement;

const mensagemErro = document.getElementById("mensagemErro") as HTMLDivElement;

mensagemErro.style.display = "none";

btnSomar.addEventListener("click", () => {
    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    const soma = numero1 + numero2;
    resultado.textContent = soma.toString();
    mensagemErro.style.display = "none";
    
});

btnSubtrair.addEventListener("click", () => {
    const numero1 = parseInt(inputNumero1.value);
    const numero2 = parseInt(inputNumero2.value);
    const subtracao = numero1 - numero2;
    resultado.textContent = subtracao.toString();
});