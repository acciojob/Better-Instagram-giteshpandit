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

    // Ensure that we are swapping two different divs
    if (draggedElement !== droppedElement) {
      // Swap the content of the dragged and dropped elements
      const draggedHTML = document.getElementById(draggedId).innerHTML;
      const droppedHTML = droppedElement.innerHTML;

      // Swap the innerHTML
      document.getElementById(draggedId).innerHTML = droppedHTML;
      droppedElement.innerHTML = draggedHTML;
    }
  });
});



