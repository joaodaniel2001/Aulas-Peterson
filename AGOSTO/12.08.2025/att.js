// 1. Declaração de variáveis
const nomeAluno = "João";
const idadeAluno = 17;
const estaPresente = true;
alert(`Nome: ${nomeAluno}\nIdade: ${idadeAluno}\nPresente? ${estaPresente}`);
console.log("Nome:", nomeAluno);
console.log("Idade:", idadeAluno);
console.log("Presente?", estaPresente);

// 2. Cálculo de média
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const media = (nota1 + nota2) / 2;
alert(media >= 6 ? `Aprovado! Média: ${media.toFixed(2)}` : `Reprovado! Média: ${media.toFixed(2)}`);

// 3. Aumento de nota com bônus
const notaBase = parseFloat(prompt("Digite a nota base:"));
const notaFinal = notaBase * 1.15;
alert(`Nota final com bônus: ${notaFinal.toFixed(2)}`);

// 4. Verificação de idade
const idade = parseInt(prompt("Digite a idade do aluno:"));
alert(idade >= 16 ? "Pode participar do curso técnico." : "Não pode participar.");

// 5. Comparação com == e ===
const strCinco = "5";
const numCinco = 5;
alert(`"5" == 5: ${strCinco == numCinco}`);
alert(`"5" === 5: ${strCinco === numCinco}`);

// 6. Turno escolar
const turno = prompt("Digite seu turno (manhã, tarde ou noite):").toLowerCase();
switch (turno) {
    case "manhã":
        alert("Bom dia! Aproveite seu turno da manhã.");
        break;
    case "tarde":
        alert("Boa tarde! Aproveite seu turno da tarde.");
        break;
    case "noite":
        alert("Boa noite! Aproveite seu turno da noite.");
        break;
    default:
        alert("Turno inválido.");
}

// 7. Condicional ternária
const participaClube = confirm("Você participa de algum clube escolar?");
alert(participaClube ? "Que legal!" : "Considere participar!");

// 8. Função de saudação
function saudacao(nome) {
    alert(`Bom dia, ${nome}!`);
}
const nomeInput = prompt("Digite seu nome:");
saudacao(nomeInput);

// 9. Arrow Function com cálculo
const calcularMedia = (a, b) => (a + b) / 2;
alert(`Média: ${calcularMedia(7, 8).toFixed(2)}`);

// 10. Lista de materiais escolares
const materiais = ["Caderno", "Lápis", "Borracha"];
materiais.push("Caneta");
alert("Materiais: " + materiais.join(", "));

// 11. Exibir materiais com loop
for (let i = 0; i < materiais.length; i++) {
    alert(`Material ${i + 1}: ${materiais[i]}`);
}

// 12. Remover item da mochila
materiais.pop();
alert("Lista atualizada: " + materiais.join(", "));

// 13. Procurar item no array
alert(materiais.includes("Tesoura") ? "Tesoura está na lista." : "Tesoura não está na lista.");

// 14. Sistema de registro de presença
function registrarPresenca(nomeAluno) {
    return `Aluno ${nomeAluno} está presente na aula de hoje.`;
}
alert(registrarPresenca("Maria"));

// 15. Cadastro de alunos
const alunos = [];
for (let i = 0; i < 3; i++) {
    alunos.push(prompt(`Digite o nome do aluno ${i + 1}:`));
}
console.log(alunos);

// 16. Contar alunos cadastrados
alert(`Total de alunos cadastrados: ${alunos.length}`);

// 17. Exibir nomes em maiúsculas
alunos.forEach(aluno => alert(aluno.toUpperCase()));

// 18. Soma de idades
let somaIdades = 0;
for (let i = 0; i < 3; i++) {
    somaIdades += parseInt(prompt(`Digite a idade do aluno ${i + 1}:`));
}
alert(`Soma das idades: ${somaIdades}`);

// 19. Média de horas de estudo
let somaHoras = 0;
for (let i = 0; i < 5; i++) {
    somaHoras += parseFloat(prompt(`Horas de estudo do dia ${i + 1}:`));
}
alert(`Média diária: ${(somaHoras / 5).toFixed(2)} horas`);

// 20. Ranking escolar
const nomes = ["Ana", "Bruno", "Carlos"];
const notas = [8.5, 9.2, 7.8];
let maiorNota = notas[0];
let indiceMaior = 0;

for (let i = 1; i < notas.length; i++) {
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
        indiceMaior = i;
    }
}
alert(`Aluno com maior nota: ${nomes[indiceMaior]} (${maiorNota})`);
