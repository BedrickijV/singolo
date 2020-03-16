const nav = document.getElementById('nav-list');
const portfolio = document.getElementById('portfolio');
const portfolioNavigation = document.getElementById('portfolio-buttons');
const submitButton = document.getElementById('submit-button');
const sendBlock = document.getElementById('send-block');
const closeButton = document.getElementById('close-button');
const verticcalPhone = document.getElementById('vertical-phone');
const horizantalPhone = document.getElementById('horizontal-phone');


nav.addEventListener("click", changeActive,);
portfolio.addEventListener('click', changeActiveImage,);
portfolioNavigation.addEventListener('click', sortImages );
submitButton.addEventListener('click', sendInfo,);
closeButton.addEventListener('click', closeSendBlock,);
horizantalPhone.addEventListener('click', horizontalOffScreen,);
verticcalPhone.addEventListener('click', verticalOffScreen,);

function changeActive(event) {
    if (event.target.tagName ==='A') {
        nav.querySelectorAll('a').forEach(el => el.classList.remove('nav-active'));
        event.target.classList.add('nav-active');
    }

}

function changeActiveImage(event) {
    portfolio.querySelectorAll('div').forEach(el => el.classList.remove('image-active'));
    if (event.target.classList.contains('portfolio-image-item')) event.target.classList.add('image-active');

}

function sortImages(event) {
    if (event.target.tagName ==='BUTTON') {
        const images = [];
        portfolioNavigation.querySelectorAll('button').forEach(el => el.classList.remove('button-active'));
        event.target.classList.add('button-active');
        portfolio.querySelectorAll('div').forEach(el => images.push(el));
        images.sort(function(){
            return Math.random() - 0.5;
        });
        portfolio.innerHTML = '';
        images.forEach( el => portfolio.appendChild(el))
    }

}

function sendInfo(event) {
    event.preventDefault();
    sendBlock.style.display = 'block';
    let subject = document.getElementById('form-subject').value.toString();
    let describe = document.getElementById('form-describe').value.toString();

    if (subject === '' && describe !== '') {
        subject = 'Без темы';
        document.getElementById('theme').innerText = subject;
        document.getElementById('description').innerText = `Описание: ${describe}`;
    } else if (describe === '' && subject !== ''){
        describe = 'Без описания';
        document.getElementById('description').innerText = describe;
        document.getElementById('theme').innerText = `Тема: ${subject}`;
    } else if (subject === '' && describe === '') {
        subject = 'Без темы';
        describe = 'Без описания';
        document.getElementById('theme').innerText = subject;
        document.getElementById('description').innerText = describe;
        }  else {
        document.getElementById('theme').innerText = `Тема: ${subject}`;
        document.getElementById('description').innerText = `Описание: ${describe}`;
    }

}

function closeSendBlock() {
    document.getElementsByClassName('form')[0].reset();
    sendBlock.style.display = 'none'
}


function horizontalOffScreen(event) {
    const horizontalOffScreen = document.getElementById('horizontal-offscreen');
    if (event.target.tagName === 'IMG' || event.target.classList.contains('iphone-horiz-screen')) {
        horizontalOffScreen.classList.toggle('off')
    }

}

function verticalOffScreen(event) {
    const verticalOffScreen = document.getElementById('vertical-offscreen');
    if (event.target.tagName === 'IMG' || event.target.classList.contains('iphone-vert-screen')) {
        verticalOffScreen.classList.toggle('off')
    }

}

const slides = document.getElementById('slides');
const next =document.getElementById('right-control');
const prev =document.getElementById('left-control');

let isEnabled = true;
next.addEventListener('click', () => changeSlide('right'),);
prev.addEventListener('click', () => changeSlide('left'),);


function changeSlide (direction) {
    if(!isEnabled) return;
    isEnabled = false;

    let activeSlide = document.querySelector('.slider-slide.active');
    let nextSlide = null;
    let activeSlideX = activeSlide.offsetLeft;
    let nextSlideX = activeSlide.offsetWidth;
    let slideSpeed = 34;

    if (direction === 'right') {
        nextSlide = activeSlide.nextElementSibling || activeSlide.parentElement.firstElementChild;
        nextSlide.style.left = `${activeSlide.clientWidth}px`;
        activeSlideX = activeSlide.offsetLeft;
        nextSlideX = activeSlide.offsetWidth;
        slideSpeed *= -1;
    } else if (direction === 'left'){
        nextSlide = activeSlide.previousElementSibling || activeSlide.parentElement.lastElementChild;
        nextSlide.style.right = `-${activeSlide.clientWidth}px`;
        activeSlideX = activeSlide.offsetLeft;
        nextSlideX = -activeSlide.offsetWidth;
    }

    let moveSlides = setInterval( () => {
        activeSlideX += slideSpeed;
        nextSlideX += slideSpeed;
        activeSlide.style.left = `${activeSlideX}px`;
        nextSlide.style.left = `${nextSlideX}px`;

        if (nextSlide.offsetLeft === 0) {
            clearInterval(moveSlides);
            isEnabled = true;
        }
    }, 1000/60);

    nextSlide.classList.add('active');
    activeSlide.classList.remove('active');
}
