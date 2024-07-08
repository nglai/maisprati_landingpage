function funcaoEnviar() {
    alert("Mensagem enviada com sucesso!");
    window.open("http://127.0.0.1:5500/index.html", "_self");
}

//Hamburguer
const abreHamburguer = document.getElementById("hamburguer");
const hamburguer = document.getElementById("menu_menor");
const fechaHamburguer = document.getElementById("menu_menor_icone");

abreHamburguer.addEventListener("click", () => {
    hamburguer.style.display = "block";
})

fechaHamburguer.addEventListener("click", () => {
    hamburguer.style.display = "none";
})


//Carrosel
let count = 1;
document.getElementById("radio1").checked = true;
setInterval(() => {
    count++;
    if (count > 3){count = 1;}
    document.getElementById("radio" + count).checked = true;
}, 8000);


function pesquisar () {
    console.log("aaa")
}