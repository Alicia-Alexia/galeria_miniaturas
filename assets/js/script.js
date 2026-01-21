// Seleciona os elementos
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail-btn img');

    // Adiciona o evento de clique em cada miniatura
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // 1. Pega a URL da imagem grande guardada no atributo 'data-full'
            const newImageSrc = this.getAttribute('data-full');
            
            // 2. Atualiza o src da imagem principal
            // Dica pro recrutador: Adicionamos uma pequena opacidade para dar efeito de troca
            mainImage.style.opacity = '0';
            
            setTimeout(() => {
                mainImage.src = newImageSrc;
                mainImage.style.opacity = '1';
            }, 200); // Tempo curto para criar um efeito de "fade" rápido
        });
    });