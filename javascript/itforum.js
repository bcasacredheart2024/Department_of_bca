// Function to add fade-in effect as elements enter viewport
const faders = document.querySelectorAll('.fade-in');

const options = {
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
