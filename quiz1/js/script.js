
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.responsive-image').forEach(image => {
    image.addEventListener('click', function() {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        modal.style.zIndex = '1000';

        const modalImage = document.createElement('img');
        modalImage.src = this.src;
        modalImage.style.maxWidth = '90%';
        modalImage.style.maxHeight = '90%';
        modalImage.style.borderRadius = '10px';
        modal.appendChild(modalImage);

        const closeModal = document.createElement('span');
        closeModal.innerText = 'X';
        closeModal.style.position = 'absolute';
        closeModal.style.top = '20px';
        closeModal.style.right = '20px';
        closeModal.style.color = 'white';
        closeModal.style.fontSize = '2em';
        closeModal.style.cursor = 'pointer';
        modal.appendChild(closeModal);

        closeModal.addEventListener('click', function() {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    });
});
