document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.classList.remove('hidden');
        targetSection.classList.add('active');
    });
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        const sectionId = this.textContent.toLowerCase().replace(' ', '-');
        document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
        document.getElementById(sectionId).classList.remove('hidden');
    });
});
