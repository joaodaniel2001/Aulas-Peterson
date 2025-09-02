function clicou() {
    console.log("Clicou no botão!");
}

let botao2 = document.querySelector(".botao2");

botao2.addEventListener("click",
    function () {
        clicou();
    }
)