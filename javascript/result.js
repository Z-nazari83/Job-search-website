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