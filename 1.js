// script.js
function uploadMedia() {
  const videoInput = document.getElementById('videoUpload');
  const photoInput = document.getElementById('photoUpload');
  const gallery = document.getElementById('mediaGallery');

  if (videoInput.files[0]) {
    const videoURL = URL.createObjectURL(videoInput.files[0]);
    const video = document.createElement('video');
    video.src = videoURL;
    video.controls = true;
    gallery.appendChild(video);
  }

  if (photoInput.files[0]) {
    const photoURL = URL.createObjectURL(photoInput.files[0]);
    const img = document.createElement('img');
    img.src = photoURL;
    gallery.appendChild(img);
  }
}