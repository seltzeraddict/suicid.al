// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const link = document.getElementById('randomBtn');
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default anchor action
        const sections = ['post1', 'post2', 'post3', 'post4']; // Add all your section ids here
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        location.hash = `#${randomSection}`;
    });
});

