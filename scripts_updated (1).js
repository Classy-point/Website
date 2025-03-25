
document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelector('.gallery-images');
    const images = ['project1.jpg', 'project2.jpg', 'project3.jpg']; // Example image names

    images.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = 'Work Image';
        img.style.width = '30%';
        img.style.margin = '10px';
        galleryImages.appendChild(img);
    });
});
