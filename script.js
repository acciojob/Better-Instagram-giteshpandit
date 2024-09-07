//your code here
const images = document.querySelectorAll('.image');
let draggedElement = null;

// Add event listeners to each image div
images.forEach(image => {
  // When dragging starts
  image.addEventListener('dragstart', (e) => {
    draggedElement = e.target; // Store the element being dragged
    e.target.classList.add('selected'); // Add a visual indication that it's selected
  });

  // When dragging ends
  image.addEventListener('dragend', () => {
    draggedElement.classList.remove('selected'); // Remove the visual indication
    draggedElement = null; // Reset the dragged element
  });

  // Allow dropping by preventing the default action
  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // When the image is dropped on another image, swap the images
  image.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement !== e.target) {
      // Swap the background images of the dragged element and the target element
      let tempBackground = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = tempBackground;
    }
  });
});


