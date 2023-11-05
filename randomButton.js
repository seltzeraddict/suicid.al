// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('randomBtn');
    button.addEventListener('click', () => {
        const sections = ['post1', 'post2', 'post3', 'post4']; // Add all your section ids here
        const randomSection = sections[Math.floor(Math.random() * sections.length)];
        location.hash = `#${randomSection}`;
    });
});
