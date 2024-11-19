document.getElementById("file-upload-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const fileInput = document.getElementById("ppt-file");
    const formData = new FormData();
    formData.append("ppt-file", fileInput.files[0]);

    // Make an API request to send the file to the backend
    fetch("/upload", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.audioUrl) {
            // Display the audio player with the returned audio file
            document.getElementById("audio-source").src = data.audioUrl;
            document.getElementById("audio-player").load();
            document.getElementById("audio-controls").style.display = "block";

            // Enable download button
            document.getElementById("download-btn").onclick = function() {
                const link = document.createElement("a");
                link.href = data.audioUrl;
                link.download = "audio.mp3";
                link.click();
            };
        }
    })
    .catch(error => console.error('Error:', error));
});

