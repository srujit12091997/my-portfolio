function toggleSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.info').forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}
