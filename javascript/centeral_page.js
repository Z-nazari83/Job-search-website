const sidebar = document.querySelector('.side_bar_items');
const toggleButton = document.querySelector('#toggleSidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

var isMoved = false;
document.getElementById('toggleSidebar').addEventListener('click', function() {
    var item = document.getElementById('toggleSidebar');
    if (!isMoved) {
        item.style.right = '80px'; 
        item.style.backgroundColor = 'rgba(0, 255, 255, 0)';
        item.style.border = '1px solid rgba(168, 168, 168, 0.25)';
        isMoved = true;
    } else {
        item.style.right = '0';
        item.style.backgroundColor = 'rgba(0, 255, 255, 0.319)';
        isMoved = false;
    }
});

document.querySelectorAll('.icon-container').forEach(icon => {
    icon.addEventListener('click', () => {
        document.querySelectorAll('.icon-container').forEach(item => {
            item.classList.remove('active');
        });
        icon.classList.add('active');

        const link = icon.querySelector('.hidden-text');
        link.href = icon.getAttribute('data-link');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("frame_item");
    const defaultPage = "../html/home.html";
    iframe.src = defaultPage;

    const updateIframeSource = (url) => {
        if (url == "../html/home.html")  {
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.top = "0px";
        } 
        else if((url=="../html/profile.html")){
            iframe.style.width = "90%";
            iframe.style.height = "100%";
            iframe.style.top = "80px";
        }
        else {
            iframe.style.width = "80%";
            iframe.style.height = "80%";
            iframe.style.top = "100px";
        }
        iframe.src = url;
    };

    const buttons = document.querySelectorAll("#bar #btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const url = button.getAttribute("data-url");
            updateIframeSource(url);
        });
    });

    const profileButton = document.getElementById("profile-btn");
    profileButton.addEventListener("click", () => {
        const url = profileButton.getAttribute("data-url");
        updateIframeSource(url);
    });
});
