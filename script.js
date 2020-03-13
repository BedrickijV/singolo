const nav = document.getElementById('nav-list');
const portfolio = document.getElementById('portfolio');
const portfolioNavigation = document.getElementById('portfolio-buttons');

nav.addEventListener("click", changeActive,);
portfolio.addEventListener('click', changeActiveImage,);
portfolioNavigation.addEventListener('click', sortImages );

function changeActive(event) {
    nav.querySelectorAll('a').forEach(el => el.classList.remove('nav-active'));
    event.target.classList.add('nav-active');

}

function changeActiveImage(event) {
    portfolio.querySelectorAll('div').forEach(el => el.classList.remove('image-active'));
    if (event.target.classList.contains('portfolio-image-item')) event.target.classList.add('image-active');

}

function sortImages(event) {
    if (event.target.tagName ==='BUTTON') {
        portfolioNavigation.querySelectorAll('button').forEach(el => el.classList.remove('button-active'));
        event.target.classList.add('button-active');
    }
}

