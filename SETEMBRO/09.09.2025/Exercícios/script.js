
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

