// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Find all images with the class 'kyle_photo'
    const images = document.querySelectorAll('img.kyle_photo');

    // Create a lightbox container
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.zIndex = '1000';
    lightbox.style.opacity = '0';
    lightbox.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(lightbox);

    // Create an image element inside the lightbox for the clicked image
    const lightboxImage = document.createElement('img');
    lightboxImage.style.maxWidth = '80%';
    lightboxImage.style.maxHeight = '80%';
    lightboxImage.style.position = 'absolute';
    lightboxImage.style.top = '50%';
    lightboxImage.style.left = '50%';
    lightboxImage.style.transform = 'translate(-50%, -50%)';
    lightbox.appendChild(lightboxImage);

    // Function to open the lightbox
    function openLightbox(src) {
        lightboxImage.src = src;
        lightbox.style.display = 'block';
        setTimeout(() => { // Ensures the transition plays
            lightbox.style.opacity = '1';
        }, 10);
    }

    // Function to close the lightbox
    function closeLightbox() {
        lightbox.style.opacity = '0';
        setTimeout(() => { // Waits for the transition to finish before hiding
            lightbox.style.display = 'none';
        }, 500);
    }

    // Attach click event listeners to images
    images.forEach(image => {
        image.addEventListener('click', function () {
            openLightbox(this.src);
        });
    });

    // Close the lightbox when clicked
    lightbox.addEventListener('click', function () {
        closeLightbox();
    });

    // Optional: Close the lightbox when pressing the Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
});
