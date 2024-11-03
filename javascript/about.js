document.addEventListener('DOMContentLoaded', () => {
    const highlights = document.querySelectorAll('.highlights ul li');
    highlights.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200); // Delays animation for each list item
    });
});
