function toggleMenu() {
    var icon = document.getElementById('menuIcon').querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    var ul = document.querySelector('.nav-links');
    ul.classList.toggle('show');
}