    const playerDiv = document.getElementById('player');
    const fileInput = document.getElementById('fileInput');
    const urlInput = document.getElementById('urlInput');

    function playFile() {
      const file = fileInput.files[0];
      if (file) {
        const objectUrl = URL.createObjectURL(file);
        playerDiv.innerHTML = '<video controls width="400" height="300" src="${objectUrl}">/video>';
          
      }
    }

    function playUrl() {
      const url = urlInput.value;
      if (url) {
        const videoId = extractVideoId(url);
        if (videoId) {
          playerDiv.innerHTML = <iframe width="400" height="300" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen>/iframe>;
        } else {
          console.error('Invalid YouTube URL');
        }
      }
    }

    function extractVideoId(url) {
      const match = url.match(/[?&]v=([^?&]+)/);
      return match && match[1];
    }
