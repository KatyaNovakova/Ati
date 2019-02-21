const docElem = document.documentElement;
const accordion = document.querySelector('.affordable-theme-left');

accordion.addEventListener('click', function (event) {
    let target = event.target;

    while (target !== this) {
        if (target.classList.contains('affordable-theme-title')) {
            target.classList.toggle('open');
            return;
        }
        target = target.parentNode;
    }
}, false);

init();

setupBlockScrolling('.portfolio-row-bottom', 'portfolio-animation-bottom');
setupBlockScrolling('.portfolio-row-top', 'portfolio-animation');
setupBlockScrolling('.advantages-section', 'advantages-animation');
setupBlockScrolling('.feedback', 'feedback-animation');
setupBlockScrolling('.affordable-theme-block', 'affordable-theme-block-animation');

function init() {
    window.addEventListener('scroll', scrollPage, false);
}

function scrollPage() {
    let scrollTop = scrollY();
    if (scrollTop !== 0) {
        document.querySelector('.js-header').classList.add('smaller');
    } else {
        document.querySelector('.js-header').classList.remove('smaller');
    }
}

function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
}

function setupBlockScrolling(elemSelector, animationClass) {

    const elemAnimated = document.querySelector(elemSelector);

    window.addEventListener('scroll', function( event ) {
        const scrollPosition = window.pageYOffset;
        const viewHeight = window.innerHeight;
        const elemPosition = elemAnimated.getBoundingClientRect();
        const elemPositionTop = elemPosition.top + scrollPosition;
        const crossLine = scrollPosition + viewHeight * 0.8;

        if (crossLine >= elemPositionTop && !elemAnimated.classList.contains(animationClass)) {
            elemAnimated.classList.add(animationClass);
        }
        else if (crossLine < elemPositionTop && elemAnimated.classList.contains(animationClass)) {
            elemAnimated.classList.remove(animationClass);
        }
    });

}
