let produtos = [];

function cadastrarProduto() {
  let nome = prompt("Digite o nome do produto:");
  if (!nome) {
    alert("Nome inválido!");
    return;
  }
  let quantidade = parseInt(prompt("Digite a quantidade do produto:"));
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida!");
    return;
  }

  // Verifica se produto já existe para somar a quantidade
  let produtoExistente = produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
  if (produtoExistente) {
    produtoExistente.quantidade += quantidade;
  } else {
    produtos.push({ nome, quantidade });
  }

  alert(`Produto "${nome}" cadastrado com sucesso!`);
}

function venderProduto() {
  if (produtos.length === 0) {
    alert("Estoque vazio. Cadastre produtos primeiro.");
    return;
  }
  let nome = prompt("Digite o nome do produto para vender:");
  if (!nome) {
    alert("Nome inválido!");
    return;
  }
  let produto = produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
  if (!produto) {
    alert("Produto não encontrado no estoque.");
    return;
  }
  let quantidade = parseInt(prompt(`Digite a quantidade de "${produto.nome}" para vender:`));
  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Quantidade inválida!");
    return;
  }
  if (quantidade > produto.quantidade) {
    alert(`Quantidade indisponível. Estoque atual: ${produto.quantidade} unidades.`);
    return;
  }
  produto.quantidade -= quantidade;
  alert(`Venda realizada: ${quantidade} unidade(s) de "${produto.nome}".`);

  // Se a quantidade zerar, pode remover do estoque (opcional)
  if (produto.quantidade === 0) {
    produtos = produtos.filter(p => p.quantidade > 0);
  }
}

function mostrarEstoque() {
  if (produtos.length === 0) {
    alert("Estoque vazio.");
    return;
  }
  let mensagem = "Estoque Atual:\n";
  for (let p of produtos) {
    mensagem += `- ${p.nome}: ${p.quantidade} unidade(s)\n`;
  }
  alert(mensagem);
}

function menu() {
  let opcao = "";
  while (opcao !== "4") {
    opcao = prompt(
      "Menu do Sistema:\n" +
      "1 - Cadastrar Produto\n" +
      "2 - Vender Produto\n" +
      "3 - Mostrar Estoque\n" +
      "4 - Sair"
    );

    switch (opcao) {
      case "1":
        cadastrarProduto();
        break;
      case "2":
        venderProduto();
        break;
      case "3":
        mostrarEstoque();
        break;
      case "4":
        alert("Saindo do sistema. Até mais!");
        break;
      default:
        alert("Opção inválida! Escolha entre 1 e 4.");
    }
  }
}

menu();
