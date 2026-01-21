const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail-btn img');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function () {
        const newImageSrc = this.getAttribute('data-full');

        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = newImageSrc;
            mainImage.style.opacity = '1';
        }, 200);

        thumbnails.forEach(t => {
            t.classList.remove('opacity-100', 'ring-2', 'ring-blue-500');
            t.classList.add('opacity-60');
        });

        this.classList.remove('opacity-60');
        this.classList.add('opacity-100', 'ring-2', 'ring-blue-500', 'ring-offset-2');
    });
});