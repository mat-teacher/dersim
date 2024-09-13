document.addEventListener('DOMContentLoaded', function () {
    const subjectsList = document.getElementById('subjects-list');

    const colors = {
        '7A': '#e0f7fa',  // Mavi tonları
        '7B': '#fff3e0'   // Turuncu tonları
    };

    document.querySelectorAll('#classes-frame a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const className = this.getAttribute('data-class');
            const color = colors[className] || '#ffffff';
            subjectsList.style.backgroundColor = color;
        });
    });
});
