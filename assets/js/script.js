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
    });
});