document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");

    themeToggleButton.addEventListener("click", () => {
        // Check if the light theme is currently applied
        if (document.documentElement.style.getPropertyValue('--b1') === '#E1D7C6') {
            // Switch to Dark Theme
            document.documentElement.style.setProperty('--b1', '#001F3F');
            document.documentElement.style.setProperty('--cl2', '#640D5F');
            document.documentElement.style.setProperty('--cl3', '#EDE8DC');
            document.documentElement.style.setProperty('--bp', '#384B70');
            themeToggleButton.innerHTML = '🌙';  // Dark theme icon
        } else {
            // Switch to Light Theme
            document.documentElement.style.setProperty('--b1', '#E1D7C6');
            document.documentElement.style.setProperty('--cl2', '#FCF0D4');
            document.documentElement.style.setProperty('--cl3', '#001F3F');
            document.documentElement.style.setProperty('--bp', '#E7F0DC');
            themeToggleButton.innerHTML = '🌞';  // Light theme icon
        }
    });
});

let isMouseDown = false;
let startX, scrollLeft;

const slider = document.getElementById('slider');

slider.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.style.cursor = 'grabbing';
});

slider.addEventListener('mouseleave', () => {
    isMouseDown = false;
});

slider.addEventListener('mouseup', () => {
    isMouseDown = false;
    slider.style.cursor = 'grab';
});

slider.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Scroll fast, adjust this number for speed
    slider.scrollLeft = scrollLeft - walk;
});
