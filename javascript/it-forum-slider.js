const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(sliderContainer => {
    const slider = sliderContainer.querySelector('.slider');
    const slides = sliderContainer.querySelectorAll('.slide');
    const description = sliderContainer.querySelector('.slider-description');
    const nextButton = sliderContainer.querySelector('.next');
    const prevButton = sliderContainer.querySelector('.prev');

    const descriptions = [
        'This is the first image description.',
        'This is the second image description.',
        'This is the third image description.'
    ];

    let currentSlide = 0;
    let totalSlides = slides.length;

    function changeSlide(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        description.textContent = descriptions[currentSlide];
    }

    setInterval(() => {
        changeSlide(currentSlide + 1);
    }, 5000);

    nextButton.addEventListener('click', () => {
        changeSlide(currentSlide + 1);
    });

    prevButton.addEventListener('click', () => {
        changeSlide(currentSlide - 1);
    });

    changeSlide(currentSlide);
});


// 2nd image slider

const sliders2 = document.querySelectorAll('.slider-container2');

sliders.forEach(sliderContainer2 => {
    const slider2 = sliderContainer.querySelector('.slider2');
    const slides2 = sliderContainer.querySelectorAll('.slide2');
    const description = sliderContainer.querySelector('.slider-description2');
    const nextButton = sliderContainer.querySelector('.next2');
    const prevButton = sliderContainer.querySelector('.prev2');

    const descriptions2 = [
        'This is the first image description.',
        'This is the second image description.',
        'This is the third image description.'
    ];

    let currentSlide2 = 0;
    let totalSlides2 = slides2.length;

    function changeSlide2(index) {
        currentSlide2 = (index + totalSlides2) % totalSlides2;
        slider2.style.transform = `translateX(-${currentSlide2 * 100}%)`;
        description.textContent = descriptions[currentSlide2];
    }

    setInterval(() => {
        changeSlide2(currentSlide2 + 1);
    }, 5000);

    nextButton.addEventListener('click', () => {
        changeSlide2(currentSlide2 + 1);
    });

    prevButton.addEventListener('click', () => {
        changeSlide2(currentSlide2 - 1);
    });

    changeSlide2(currentSlide2);
});