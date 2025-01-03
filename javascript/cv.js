document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".theme_button");
    const resume = document.getElementById("area-cv");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");
            resume.style.backgroundColor = color;

            if (color === "#212529") {
                resume.style.color = "#ffffff";
            } else {
                resume.style.color = "#000000";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".template_button");
    const resume = document.getElementById("area-cv");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTemplate = button.getAttribute("data-template");
            resume.className = "resume";
            resume.classList.add(selectedTemplate);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents[0].style.display = 'block';

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            tabs.forEach(t => {
                t.classList.remove('active');
                const contentId = t.getAttribute('data-tab');
                document.getElementById(contentId).style.display = 'none';
            });

            this.classList.add('active');
            const tabContentId = this.getAttribute('data-tab');
            document.getElementById(tabContentId).style.display = 'block';
        });
    });
});


function searchJobs() {
    const query = document.getElementById('jobSearch').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>نتایج جستجوی شما برای: <strong>${query}</strong></p>`;
}