function funcaoEnviar() {
    alert("Mensagem enviada com sucesso!");
    window.open("http://127.0.0.1:5500/index.html", "_self");
}

const abreHamburguer = document.getElementById("hamburguer");
const hamburguer = document.getElementById("menu_menor");
const fechaHamburguer = document.getElementById("menu_menor_icone");

abreHamburguer.addEventListener("click", () => {
    hamburguer.style.display = "block";
})

fechaHamburguer.addEventListener("click", () => {
    hamburguer.style.display = "none";
})

function pesquisar () {
    console.log("aaa")
}