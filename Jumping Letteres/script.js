document.querySelectorAll('.letters span').forEach(letter => {
    letter.addEventListener('mouseover', () => {
        // Remove the animation class if it exists
        letter.classList.remove('jump');

        // Trigger reflow to restart the animation
        void letter.offsetWidth;

        // Add the animation class back
        letter.classList.add('jump');
    });
});