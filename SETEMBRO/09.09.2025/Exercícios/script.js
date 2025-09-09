
/* --- querySelector --- */

    // 01
    document.querySelector("#titulo").innerHTML = `Cardápio Especial do dia`

    // 02
    document.querySelector("#menu").children[0].innerHTML = `<li><a href="#cafes">Bebidas Quentes</a></li>`

    // 03
    document.querySelector("header p").innerHTML = `O melhor da França em cada xícara`

    // 04
    document.querySelector("header").style.backgroundColor = `darkblue`

/* --- children --- */

    // 01
    console.log(document.querySelector("#lista-produtos").children[1])

    // 02
    document.querySelector("#lista-produtos").children[3].innerHTML = `Tarte de Limão`

    // 03
    console.log(document.querySelector("#lista-produtos").children)

    // 04
    document.querySelector("#lista-produtos").children[2].style.backgroundColor = `yellow`

/* --- innerHTML --- */

    // 01
    document.querySelector("#rodape").innerHTML = `Endereço: Rua das Flores, 123 - Paris`

    // 02
    document.querySelector("#lista-produtos").innerHTML += `<li> Madeleine </li>`

    // 03
    document.querySelector("#titulo").innerHTML = `🍰 Cardápio Especial do Dia`

    // 04
    document.querySelector("header p").innerHTML = `Aberto todos os dias, das 8h às 20h.`

/* --- outerHTML --- */

    // 01
    document.querySelector("#lista-produtos").children[0].outerHTML = `<li>Macaron de Framboesa</li>`;

    // 02
    document.querySelector("#rodape").outerHTML = `<p id="rodape">© 2025 Dulce Paris - Feito com ❤️ para você.</p>`;

    // 03
    document.querySelector("h2").outerHTML = `<h2 id="titulo">🍵 Nossas Bebidas & Doces</h2>`;

    // 04
    const menu = document.querySelector("#menu");
    menu.children[menu.children.length - 1].outerHTML = `<li><a href="#doces">Doces</a></li>`;

/* --- Desafio Extra --- */

    // 01
    document.querySelector("#menu").innerHTML += `<li><a href="#contato">Contato</a></li>`;

    // 02
    document.querySelector("#menu").children[1].outerHTML = "<li><a>Sobremesas</a></li>";

    // 03
    document.querySelector("#lista-produtos").innerHTML = `<h3>Mais Pedidos:</h3>` + document.querySelector("#lista-produtos").innerHTML;
