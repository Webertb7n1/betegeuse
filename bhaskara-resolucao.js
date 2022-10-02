function calcularBhaskara() {
    //cria referencia aos elementos da página
    var inValorA = document.getElementById("inValorA");
    var inValorB = document.getElementById("inValorB");
    var inValorC = document.getElementById("inValorC");

    //obtém os conteúdos digitados
    var valorA = Number(inValorA.value);
    var valorB = Number(inValorB.value);
    var valorC = Number(inValorC.value);

    //verifica se foram digitados números apenas
    if (isNaN(valorA)) {
        alert("insira um número válido para A");
        inValorA.focus();
        return;
    } if (isNaN(valorB)) {
        alert("Insira um número valido para B");
        inValorB.focus();
        return;
    } if (isNaN(valorC)) {
        alert("Insira um número válido para C");
        inValorC.focus();
        return;
    }
    //calcula o valor de delta
    var delta = valorB**2 - (4 * valorA * valorC);
    //faz referência aos campos de saída da página
    var outFormula = document.getElementById("outFormula");
    outFormula.textContent = "Delta = B² - 4 * A * C";
    var outContaInicio = document.getElementById("outContaInicio");
    outContaInicio.textContent = "Delta = " + valorB + "²" + " - 4 * " + valorA + " * " + valorC;
    var outContaUm = document.getElementById("outContaUm");
    outContaUm.textContent = "Delta = " + (valorB * valorB) + " - " + (4 * valorA * valorC);
    var outContaDois = document.getElementById("outContaDois");
    outContaDois.textContent = "Delta = " + ((valorB * valorB) - (4 * valorA * valorC));
    var outContaTresResultadoDelta = document.getElementById("outContaTresResultadoDelta");
    outContaTresResultadoDelta.textContent = "Vamos cacular o valor de X1 e X2";
    outContaTresResultadoDelta.style.color = "#036";
    var outCalcularX = document.getElementById("outCalcularX");
    outCalcularX.textContent = "X1 = -B + V¨" + delta + " / 2 * A " + " " + " " + " || " + " X2 = -B - V¨" + delta + " / 2 * A";
    outCalcularX.style.color = "black";
    // parou de pegar aqui

     // obtém os valores X1 e X2
     var XUM = (-valorB + Math.sqrt(delta)) / (2 * valorA);
     var XDOIS = (-valorB - Math.sqrt(delta)) / (2 * valorA);


    var outRespostaX1 = document.getElementById("outRespostaX1");
    outRespostaX1.textContent = "X1 = " + (-valorB) + " + " + (Math.sqrt(delta)) + " / 2 * " + valorA;
    outRespostaX1.style.color = "orange";
    var outRespostaX2 = document.getElementById("outRespostaX2");
    outRespostaX2.textContent = "X2 = " + (-valorB) + " - " + (Math.sqrt(delta)) + " / 2 * " + valorA;
    outRespostaX2.style.color = "purple";
    var outSolucao = document.getElementById("outSolucao");
    outSolucao.textContent = "Solução: { X1 = " + XUM + " || " + " X2 = " + XDOIS + " }";
    outSolucao.style.color = "green";


    //encera o programa caso não haja raiz real
    if (isNaN(XUM) && isNaN(XDOIS)) {
        outContaTresResultadoDelta.textContent = "Não há raiz Real";
        outContaTresResultadoDelta.style.color = "red";
        outCalcularX.textContent = "";
        outRespostaX1.textContent = "";
        outRespostaX2.textContent = "";
        outSolucao.textContent = "";
        return;
    }
}
    
var btCalcular = document.getElementById("btCalcular"); //obtém o btCalcular
btCalcular.addEventListener("click", calcularBhaskara); //aciona a funçao CalcularBhaskara pelo btCalcular pelo evento click