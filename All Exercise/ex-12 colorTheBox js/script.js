// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'box'
    const boxes = document.querySelectorAll('.box');

    // Array of colors to use
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

    // Loop through each box and assign a color
    boxes.forEach((box, index) => {
        box.style.backgroundColor = colors[index];
    });
});