// Define functions in the global scope
function playfilelink() {
    const file = fileInput.files[0];
    if (file) {
        const objectUrl = URL.createObjectURL(file);
        playerDiv.innerHTML = `<video controls width="400" height="300" src="${objectUrl}"></video>`;
    }
}

function nowurl() {
    const url = urlInput.value;
    if (url) {
        const videoId = extractVideoId(url);
        if (videoId) {
            const objectUrl = `https://www.youtube.com/embed/${videoId}`;
            playerDiv.innerHTML = `<iframe width="400" height="300" src="${objectUrl}" frameborder="0" allowfullscreen></iframe>`;
        } else {
            console.error('Invalid YouTube URL');
        }
    }
}

function extractVideoId(url) {
    const match = url.match(/[?&]v=([^?&]+)/);
    return match && match[1];
}

// Add event listeners inside the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
    const playerDiv = document.getElementById('player');
    const fileInput = document.getElementById('fileInput');
    const urlInput = document.getElementById('urlInput');

    // Add event listeners
    document.getElementById('playButton').addEventListener('click', playfilelink);
    document.getElementById('youtubeButton').addEventListener('click', nowurl);
});
