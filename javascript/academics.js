document.querySelectorAll('.delayed-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('disabled');
        setTimeout(() => {
            link.classList.remove('disabled');
        }, 1000);
    });

    link.addEventListener('click', (event) => {
        if (link.classList.contains('disabled')) {
            event.preventDefault();
        }
    });
});