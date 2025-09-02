
const p = document.getElementById("mensagem");

let btn1 = document.getElementById("botao1");
let btn2 = document.getElementById("botao2");
let btn3 = document.getElementById("botao3");

// Troca o texto
btn1.addEventListener("click",
    function () {
        p.textContent = "Você clicou no primeiro botão!";
    }
)

// Troca a cor do Background
btn2.addEventListener("click",
    function () {
        document.body.style.backgroundColor = "yellow";
    }
)

// Novo elemento
btn3.addEventListener("click",
    function () {
        let novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = "novo elemento";

        document.body.appendChild(novoParagrafo)
    }
)