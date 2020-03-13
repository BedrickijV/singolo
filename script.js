const nav = document.getElementById('nav-list');

nav.addEventListener("click", changeActive,);

function changeActive(event) {
    nav.querySelectorAll('a').forEach(el => el.classList.remove('nav-active'));
    event.target.classList.add('nav-active');

}