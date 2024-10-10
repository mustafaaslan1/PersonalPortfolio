document.addEventListener('DOMContentLoaded', function() {
    const darkModeBtn = document.querySelector('.darkMode');
    const body = document.body;

    darkModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        darkModeBtn.querySelector('i').classList.toggle('fa-moon');
        darkModeBtn.querySelector('i').classList.toggle('fa-sun');
    });
});
