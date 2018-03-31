function startAnimation() {
    wait(1000);
    displayContent();
}

function displayContent() {
    document.getElementById('animation').style.display = 'none';
    document.getElementById('index-header').style.display = 'block';
    document.getElementById('index-content').style.display = 'block';
    document.getElementById('index-footer').style.display = 'block';
}

function wait(ms) {
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

window.onload = startAnimation;