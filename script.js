document.addEventListener("DOMContentLoaded", () => {
  let draggedElement = null;

  // Select all divs with class "image"
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    // Handle the dragstart event
    image.addEventListener('dragstart', (e) => {
      draggedElement = e.target; // Store the dragged element
      e.dataTransfer.effectAllowed = "move"; // Allow moving the element
    });

    // Prevent default behavior on dragover to allow drop
    image.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = "move";
    });

    // Handle the drop event
    image.addEventListener('drop', (e) => {
      e.preventDefault();

      if (draggedElement !== e.target) {
        // Swap the innerHTML of the dragged and dropped elements
        const tempHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = e.target.innerHTML;
        e.target.innerHTML = tempHTML;
      }
    });
  });
});
