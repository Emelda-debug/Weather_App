var backgroundImages = [
    "{{ url_for('static', filename='static/assets/images/slides/aurora.jpg') }}",
    "{{ url_for('static', filename='static/assets/images/slides/city.jpg') }}",
    "{{ url_for('static', filename='static/assets/slides/images/monsterra.jpg') }}",
    "{{ url_for('static', filename='static/assets/slides/images/nature.jpg') }}",
    "{{ url_for('static', filename='static/assets/slides/tree.jpg') }}"
    // Add more image URLs as needed
  ];
  
  document.addEventListener('DOMContentLoaded', function() {
    var currentImageIndex = 0;
    var backgroundContainer = document.getElementById('backgroundContainer');
  
    function changeBackgroundImage() {
      if (currentImageIndex < 0 || currentImageIndex >= backgroundImages.length) {
        // currentImageIndex is out of bounds
        // Handle the error or adjust the index accordingly
      } else {
        // currentImageIndex is within the valid range
        // Continue with the code
        backgroundContainer.style.backgroundImage = "url(" + backgroundImages[currentImageIndex] + ")";
        currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
      }
    }
  
    // Change background image every 5 seconds
    setInterval(changeBackgroundImage, 5000);
  });