document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.getElementById('close');

    gallery.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            openModal(event.target.src);
        }
    });

    function openModal(src) {
        modal.style.display = 'block';
        modalImg.src = src;
        modalImg.style.transform = 'scale(0.8)'; // Scale the image down to 80%
    }

    close.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});

