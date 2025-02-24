// Evento para o botão da página inicial
document.getElementById('enterButton').addEventListener('click', function() {
    // Ocultar o texto e alterar o GIF
    document.querySelector('.message-intro').classList.add('hidden');

    // Troca para o novo GIF apenas quando ele carregar corretamente
    let newGif = new Image();
    newGif.src = 'imagens/gif2.gif';
    newGif.onload = function() {
        document.querySelector('.welcome-gif').src = newGif.src;
    };

    // Altera o texto do botão e desabilita o botão
    const button = document.getElementById('enterButton');
    button.disabled = true;
    button.innerText = 'Carregando...';

    // Redireciona para a nova página após 4 segundos
    setTimeout(function() {
        window.location.href = 'nova-pagina.html';
    }, 4000);
});



