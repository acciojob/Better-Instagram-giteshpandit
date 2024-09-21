const draggables = document.querySelectorAll('.image');
let draggedElement = null;

// Event listener for drag start
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    draggedElement = e.target; // Store the dragged element
    e.dataTransfer.setData('text/plain', draggedElement.id); // Store the id of the dragged element
  });

  // Prevent default behavior on dragover
  draggable.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle drop event
  draggable.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const droppedElement = e.target;

    // Swap the content (images or text) of the dragged and dropped elements
    if (draggedElement !== droppedElement) {
      const temp = draggedElement.innerHTML;
      draggedElement.innerHTML = droppedElement.innerHTML;
      droppedElement.innerHTML = temp;
    }
  });
});



