function coletarColegas() {
  let colegas = [];
  
  let total = parseInt(prompt("Quantos colegas deseja cadastrar?"));
  if (isNaN(total) || total <= 0) {
    alert("Número inválido. Encerrando o sistema.");
    return;
  }
  
  for (let i = 0; i < total; i++) {
    alert(`Cadastro do colega ${i + 1} de ${total}`);
    
    let nome = prompt("Nome completo:");
    while (!nome) {
      nome = prompt("Nome inválido. Por favor, digite o nome completo:");
    }
    
    let idade = parseInt(prompt("Idade:"));
    while (isNaN(idade) || idade <= 0) {
      idade = parseInt(prompt("Idade inválida. Digite uma idade válida:"));
    }
    
    let cidade = prompt("Cidade:");
    while (!cidade) {
      cidade = prompt("Cidade inválida. Por favor, digite a cidade:");
    }
    
    let hobby = prompt("Hobby favorito:");
    while (!hobby) {
      hobby = prompt("Hobby inválido. Por favor, digite o hobby favorito:");
    }
    
    colegas.push({ nome, idade, cidade, hobby });
  }
  
  // Mostrar todos os colegas cadastrados
  let mensagem = "Cadastros dos colegas:\n\n";
  colegas.forEach((c, index) => {
    mensagem += `Colega ${index + 1}:\n`;
    mensagem += `Nome: ${c.nome}\n`;
    mensagem += `Idade: ${c.idade}\n`;
    mensagem += `Cidade: ${c.cidade}\n`;
    mensagem += `Hobby favorito: ${c.hobby}\n\n`;
  });
  
  alert(mensagem);
}

coletarColegas();
