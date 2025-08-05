function cadastrarNoticias() {
  let noticias = [];

  // Pergunta quantas notícias cadastrar
  let total = parseInt(prompt("Quantas notícias deseja cadastrar?"));
  if (isNaN(total) || total <= 0) {
    alert("Número inválido. Encerrando o sistema.");
    return;
  }

  for (let i = 0; i < total; i++) {
    alert(`Cadastro da notícia ${i + 1} de ${total}`);

    let titulo = prompt("Título da notícia:");
    while (!titulo) {
      titulo = prompt("Título inválido. Por favor, digite o título da notícia:");
    }

    let autor = prompt("Autor:");
    while (!autor) {
      autor = prompt("Autor inválido. Por favor, digite o nome do autor:");
    }

    let categoria = prompt("Categoria (ex: Política, Esporte, Tecnologia, Cultura):");
    while (!categoria) {
      categoria = prompt("Categoria inválida. Por favor, digite a categoria:");
    }

    let conteudo = prompt("Conteúdo da notícia:");
    while (!conteudo) {
      conteudo = prompt("Conteúdo inválido. Por favor, digite o conteúdo da notícia:");
    }

    noticias.push({ titulo, autor, categoria, conteudo });
  }

  // Organiza as notícias por categoria
  let categoriasMap = {};

  for (let noticia of noticias) {
    let cat = noticia.categoria.trim().toLowerCase();
    if (!categoriasMap[cat]) {
      categoriasMap[cat] = [];
    }
    categoriasMap[cat].push(noticia);
  }

  // Monta a mensagem para exibir
  let mensagem = "Notícias cadastradas por categoria:\n\n";
  for (let cat in categoriasMap) {
    mensagem += `Categoria: ${cat.charAt(0).toUpperCase() + cat.slice(1)}\n`;
    categoriasMap[cat].forEach((noticia, idx) => {
      mensagem += `  ${idx + 1}. ${noticia.titulo} (Autor: ${noticia.autor})\n`;
      mensagem += `     Conteúdo: ${noticia.conteudo}\n\n`;
    });
  }

  alert(mensagem);
}

cadastrarNoticias();
