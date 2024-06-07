const slider = document.querySelector('#slider')
const sliderItems = Array.from(slider.children);
const next = document.querySelector('#arrowNext');
const previous = document.querySelector('#arrowPrevious');

const navigation = document.querySelectorAll('.nav-item');
const navigationItems = Array.from(navigation).map(item => item.querySelector('a'));


sliderItems.forEach(function (slide, index) {

    if (index !== 0) slide.classList.add('hidden');

    slide.dataset.index = index;
    sliderItems[0].setAttribute('data-active', "")
    
    slide.addEventListener('click', function() {
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');

        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active',"");

        navigationItems.forEach(link => link.classList.remove('active'));
        const activeLink = navigationItems[nextSlideIndex];
        activeLink.classList.add('active');
    });
});


navigationItems.forEach(function(link, index) {
    link.dataset.index = index;
    if (index === 0) link.classList.add('active');

    link.addEventListener('click', function(e) {
        e.preventDefault();

        navigationItems.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');

        const currentSlide = slider.querySelector('[data-active]');
        currentSlide.classList.add('hidden');
        currentSlide.removeAttribute('data-active');

        const nextSlide = slider.querySelector(`[data-index="${index}"]`);
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', "");
    });
});

arrowNext.onclick = function () {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', "");

    navigationItems.forEach(link => link.classList.remove('active'));
    const activeLink = navigationItems[nextSlideIndex];
    activeLink.classList.add('active');
}

arrowPrevious.onclick = function () {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', "");

    navigationItems.forEach(link => link.classList.remove('active'));
    const activeLink = navigationItems[nextSlideIndex];
    activeLink.classList.add('active');
}