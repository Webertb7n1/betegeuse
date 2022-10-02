var pacientes = []; //declara vetor global

function adicionarPaciente() {
    //cria referência aos elementos da página
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value; //obtém conteúdo do campo inPaciente

    //verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.push(nome); // adiciona o nome no final do vetor
    
    var lista = ""; //string para concatenar pacientes

    //percorre os elementos do vetos
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    //altera o conteúdo da tag outLista
    outLista.textContent = lista;

    //limpa o campo e posiciona o cursoor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
//cria referência ao btAdicionar e associa function ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarPaciente);

// function btEmergencia

function pacienteUrgencia() {
    //cria referência aos elementos da página
    var inPaciente = document.getElementById("inPaciente");
    var outLista = document.getElementById("outLista");

    var nome = inPaciente.value; //obtém conteúdo do campo inPaciente

    //verifica preenchimento do nome do paciente
    if (nome == "") {
        alert("Informe o nome do paciente");
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome); // adiciona o nome no inicio  do vetor
    
    var lista = ""; //string para concatenar pacientes

    //percorre os elementos do vetos
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + ". " + pacientes[i] + "\n";
    }

    //altera o conteúdo da tag outLista
    outLista.textContent = lista;

    //limpa o campo e posiciona o cursoor em inPaciente
    inPaciente.value = "";
    inPaciente.focus();
}
//cria referência ao elemento btemergencia que associa a function ao evenmto click
var btUrgencia = document.getElementById("btUrgencia");
btUrgencia.addEventListener("click", pacienteUrgencia);

function atenderPaciente() {
    //verifica se o vetor paciente está vazio
    if (pacientes.length == 0) {
        alert("Não há pacientes na fila de espera");
        inPaciente.focus();
        return;
    }
    // cria referência aos elementos de saída de dados
    var outAtendimento = document.getElementById("outAtendimento");
    var outLista = document.getElementById("outLista");

    //remove paciente do inicio da fila (e obtém nome)
    var atender = pacientes.shift();

    //exibe o nome do paciente em atendimento
    outAtendimento.textContent = atender;

    //string para concatenar pacientes
    var lista = "";

    //percorre os elementos do vetos
    for (i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + pacientes[i] + "\n";
    }
    //altera o conteúdo da tag outLista
    outLista.textContent = lista;
}
// cria referência ao btAtender associado a function pelo evento click
var btAtender = document.getElementById("btAtender");
btAtender.addEventListener("click", atenderPaciente);