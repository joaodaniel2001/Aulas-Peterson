
const texto = document.getElementById("texto")

const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")

btn1.addEventListener("click",
    function () {
        texto.style.display = "none"
    }
)

btn2.addEventListener("click",
    function () {
        texto.style.display = "flex"
    }    
)

btn3.addEventListener("click",
    function () {
        texto.style.color = "blue"
    }
)