document.querySelectorAll('.menu_item').forEach((item) => {
const text = item.textContent;
const letters = [...text].map((letter) => {
    return letter.trim() ? `<span>${letter}</span>` : '&nbsp;';
}).join('');
item.innerHTML = letters;
});