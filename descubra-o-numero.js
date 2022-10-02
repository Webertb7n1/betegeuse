//declara vetor de escopo global que irá conter os números já apostados
var erros = [];
//gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1;
//declara constante com número de chances
const CHANCES = 6;

//inicia a função
function apostarNumero() {
    //cria referência ao campo de entrada
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);

    //valida o número
    if (numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("informe um número válido...");
        inNumero.focus();
        return;
    }
    //refencia os espaços de saída de dados
    var outErros = document.getElementById("outErros");
    var outChances = document.getElementById("outChances");
    var outDica = document.getElementById("outDica");

    //se a aposta do jogador for igual ao número sorteado
    if (numero == sorteado) {
        alert("Parabéns!! Você Acertou!!!");
        //troca status dos botões
        btApostar.disabled = true;
        btJogar.className = "exibe";
        outDica.textContent = "Parabéns!! Número sorteado: " + sorteado;
        outDica.style.color = "green";
    } else {
        // se número existe no vetor erros
        if (erros.indexOf(numero) >= 0) {
            alert("Você já apostou o número " + numero + " Tente outro...");
        } else {
            erros.push(numero); //adiciona número ao vetor
            var numErros = erros.length; //obtém o tamanho do vetor
            var numChances = CHANCES - numErros; //calcula o número de chances
            //exibe o número de erros, conteúdo do vetor e numero de chances
            outErros.textContent = numErros + " (" + erros.join(",") + ")";
            outChances.textContent = numChances;
            if (numChances == 0) {
                alert("Suas chances acabaram...");
                btApostar.disabled = true;
                btJogar.className = "exibe";
                outDica.textContent = "Game Over!! Número sorteado: " + sorteado;
            } else {
                //usa o operador ternário (condicional) para mensagem da dica
                var dica = numero < sorteado ? "maior" : "menor"
                outDica.textContent = "Dica: Tente um número " + dica + " que " + numero;
            }
        }
    }
    if (numChances == 3){outChances.style.color = "green";}
    if (numChances == 2){outChances.style.color = "orange";}
    if (numChances == 1){outChances.style.color = "red"; outChances.textContent = numChances + " É a última chance !"}
    //limpa o campo de entrada e posiciona cursor neste campo
    inNumero.value = "";
    inNumero.focus();
}
    var btApostar = document.getElementById("btApostar");
    btApostar.addEventListener("click", apostarNumero);

    function jogarNovamente() {
        location.reload() //recarrega a página
    }
    var btJogar = document.getElementById("btJogar");
    btJogar.addEventListener("click", jogarNovamente);
