document.addEventListener("DOMContentLoaded", function() {
  const botoes = document.querySelectorAll(".main");
  const contador = document.getElementById("contador");
  let contadorCarrinho = 0;

  botoes.forEach(function(botao) {
    
    botao.addEventListener("click", function() {
      if (botao.textContent === "Adicionar ao carrinho") {
        botao.textContent = "Remover do carrinho";
        botao.style.backgroundColor = "coral";   
        botao.classList.add("adicionado");
        contadorCarrinho++; 
      } else {
        botao.textContent = "Adicionar ao carrinho";
        botao.style.backgroundColor = "white";
        botao.classList.remove("adicionado");
        contadorCarrinho--;
      }
            contador.textContent = ": " + contadorCarrinho;

    });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const capa = document.getElementById("capa");
  const entrarBtn = document.getElementById("entrarBtn");
  const nomeInput = document.getElementById("nomeUsuario");

  entrarBtn.addEventListener("click", function() {
    const nome = nomeInput.value.trim();
    
    const usuario = document.querySelector(".direita h4");
    usuario.textContent = `${nome} |`;

    capa.style.opacity = "0";
    setTimeout(() => {
      capa.style.display = "none";
    }, 600);
  });
});


