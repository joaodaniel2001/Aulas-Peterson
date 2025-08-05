
// Declaração de variáveis

let idadeAluno = 15;
const escola = "Escola Senai";
var frequenciaEmDia = true;

alert(`Seja bem vindo a ${escola}!`);
alert(`Idade do aluno: ${idade}!`);
console.log(`Frequência em dia? ${frequenciaEmDia}`);

// Operações aritméticas

let notaBase = Number(prompt("Digite a nota base do aluno (0 - 100): "))
let bonus = 0.1;

let notaFinal = notaBase + bonus * notaBase;

alert(`A nota final com bônus de participação: ${notaFinal}`)

// Verificação de idade para o ensino médio

if (idadeAluno >= 14) {
    alert(`O aluno já pode cursar o ensino médio`)
} else {
    alert(`O aluno não pode cursar o ensino médio`)
}

// Diferença entre == e ===

let resposta = "0";
let valor = 0;

alert(resposta == valor) // Saída: 1
alert(resposta === valor) // Saída: 0

// Condicional ternária

let participaProjeto = confirm("O aluno participa de algum projeto?")
let statusProjeto = participaProjeto ? "Participa" : "Não participa"

alert(`Status do aluno: ${statusProjeto}`)

// Estrutura SWITCH

let disciplina = prompt("Qual a disciplina favorita?")

switch(disciplina) {
    case "Português":
        alert("Essa matéria está incluida no Senai")
        break

    case "Matemática":
        alert("Essa matéria está incluida no Senai")
        break

    case "Ciências":
        alert("Essa matéria está incluida no Senai")
        break

    case "Geografia":
        alert("Essa matéria está incluida no Senai")
        break

    default:
        alert("Disciplina não encontrada!")
}

// Função de registro

function registrarAluno (nomeAluno) {
    alert(`Aluno ${nomeAluno} registrado`)
}

let nomeAluno = prompt("Digite o nome do aluno para registrar")
registrarAluno(nomeAluno)

// Arrow function para calcular horas restante de estudo

const calcularHorasRestantes = (horasTotais, horasEstudadas) => horasTotais - horasEstudadas

let horasEstudo = calcularHorasRestantes(240, 120)
alert(`Horas restantes: ${horasEstudadas}`)

// Array de materiais escolares

let materiais = ["Caderno", "lapis", "Borracha"]
materiais.push("Caderno")

alert(`Materias na mochila: ${materiais.join(" - ")}`)

// Loop FOR

for (let i = 1; i < materiais.length + 1; i++) {
    console.log(`Material ${i}: ${materiais[i]}`)
}