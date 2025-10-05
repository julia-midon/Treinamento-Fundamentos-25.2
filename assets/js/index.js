const botao = document.getElementById('produtoBtn');

function mudarTextoDoBotao() {
    if (botao.innerText === 'Adicionar ao carrinho') {
        botao.innerText = 'Remover do carrinho';
        botao.style.backgroundColor = '#f73b23ff'; 
    } else if (botao.innerText === 'Remover do carrinho'){
        botao.innerText = 'Adicionar ao carrinho';
        botao.style.backgroundColor = '#ffffffff';
    }
}

if (botao){
botao.addEventListener('click', mudarTextoDoBotao);
};