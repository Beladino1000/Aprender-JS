// Selecionando elementos do DOM
const mensagemParagrafo = document.getElementById("mensagem");
const meuBotao = document.getElementById("meuBotao");

// Adicionando um ouvinte de evento ao botão
meuBotao.addEventListener("click", function() {
    // Alterando o texto do parágrafo
    mensagemParagrafo.textContent = "Olá, Mundo! O JavaScript está funcionando!";

    // Alterando o estilo do parágrafo
    mensagemParagrafo.style.color = "blue";
    mensagemParagrafo.style.fontWeight = "bold";
});