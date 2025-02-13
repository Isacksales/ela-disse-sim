function mudarFoto(novaFoto) {
    const fotoDestaque = document.querySelector('.foto img');
    fotoDestaque.src = novaFoto;

    // Remove a classe 'ativa' de todas as miniaturas
    document.querySelectorAll('.miniatura').forEach(miniatura => {
        miniatura.classList.remove('ativa');
    });

    // Adiciona a classe 'ativa' à miniatura clicada
    const miniaturaClicada = document.querySelector(`.miniatura[src="${novaFoto}"]`);
    if (miniaturaClicada) {
        miniaturaClicada.classList.add('ativa');
    }
}

// Controle da música
document.addEventListener("DOMContentLoaded", function() {
    const musica = document.getElementById("musica");
    const botaoMusica = document.getElementById("botaoMusica");

    musica.volume = 0.3; // Ajusta o volume da música

    botaoMusica.addEventListener("click", function() {
        if (musica.paused) {
            musica.play();
            botaoMusica.textContent = "⏸ Pausar Música";
        } else {
            musica.pause();
            botaoMusica.textContent = "🎵 Tocar Música";
        }
    });

    musica.addEventListener("error", function() {
        console.log("Erro ao carregar a música.");
        botaoMusica.textContent = "Erro ao carregar música";
        botaoMusica.disabled = true;
    });

    // Slideshow automático
    const fotos = document.querySelectorAll('.miniatura');
    let slideshowAtivado = false;
    let indice = 0;

    function slideshow() {
        if (slideshowAtivado) {
            const fotoDestaque = document.querySelector('.foto img');
            const miniaturaAtual = fotos[indice];
            fotoDestaque.src = miniaturaAtual.src;
            miniaturaAtual.classList.add('ativa');
            fotos.forEach(miniatura => {
                if (miniatura !== miniaturaAtual) {
                    miniatura.classList.remove('ativa');
                }
            });
            indice++;
            if (indice >= fotos.length) {
                indice = 0;
            }
            setTimeout(slideshow, 7000);
        }
    }

    fotos.forEach(function(foto) {
        foto.addEventListener('click', function() {
            if (!slideshowAtivado) {
                slideshowAtivado = true;
                slideshow();
            }
        });
    });
});