document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a[href^="#"]'); // Select all nav links

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetSection = document.querySelector(targetId);

            // Remove active class from all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.add('hidden');
            });

            // Add active class to target section
            targetSection.classList.remove('hidden');

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Initial active section
    document.getElementById('home').classList.remove('hidden');
});

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}
