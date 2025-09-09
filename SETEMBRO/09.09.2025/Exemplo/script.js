
function executar () {

    /* --- DESAFIO 01 --- */

    // 01
    let mercado = document.querySelector("#mercado");
    console.log(mercado);

    // 02
    let padaria = document.querySelector("#padaria").children;
    console.log(padaria);

    // 03
    let li = document.querySelector("#mercado ul").children[1];
    console.log(li);

    /* --- DESAFIO 02 --- */

    //01
    let ul = document.querySelector("#mercado ul").children[1];
    console.log(ul);

    // 02
    let ul2 = document.querySelector("#padaria ul").children[2];
    console.log(ul2);

    // 03
    let li2 = document.querySelector("#padaria ul").children.length;
    console.log(li2);

    /* --- DESAFIO 03 --- */

    // 01
    document.querySelector("#mercado ul").children[0].innerHTML = "Arroz Integral"

    // 02
    document.querySelector("#mercado ul").innerHTML += "<li> Óleo </li>"

    // 03
    document.querySelector("#padaria ul").children[1].innerHTML = "Bolo de Chocolate"

    /* --- DESAFIO 04 --- */

    // 01
    document.querySelector("#mercado ul").outerHTML = "<strong> Lista apagada </strong>"

    // 02
    document.querySelector("#padaria ul").innerHTML = "<li> Torta </li> <li> Biscoito </li> <li> Café </li>"

    /* --- DESAFIO 05 --- */

    // 01
    document.querySelector("#padaria ul").innerHTML += "<li> Suco </li> <li> Pão </li>"

    // 02
    let padariaUl = document.querySelector("#padaria ul").innerHTML;
    console.log(padariaUl)

    // 03
    document.querySelector("#padaria ul").children[0].innerHTML = "Croissant"

    // 04
    document.querySelector("#padaria ul").outerHTML = "<strong> Padaria fechada </strong>"

}