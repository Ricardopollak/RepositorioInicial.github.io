var darkMode = false;

document.getElementById('modeBtn').addEventListener('click', function() {
    darkMode = !darkMode;
    applyMode(darkMode);
});

function applyMode(dark) {
    if (dark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}