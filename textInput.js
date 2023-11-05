let submitted = false;

function validateEmail(email) {
    // This is a simple regex for email validation. There are more comprehensive ones, but this serves most use cases.
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function handleSubmission() {
    const email = document.getElementById("emailInput").value;

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    submitted = true;
    return true; // Continue with form submission
}

function displayThanks() {
    if (submitted) {
        document.getElementById("emailInput").value = " thank you! :D";
        
        // Pixel explosion effect
        const container = document.querySelector('.explosion-container');
        const numOfPixels = 75;
        
        for (let i = 0; i < numOfPixels; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            
            // Position the pixel around the center of the input
            pixel.style.left = '40%';
            pixel.style.top = '20%';
            
            // Apply random velocities and directions
            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 150; // You can adjust this for larger/smaller explosion
            
            pixel.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            container.appendChild(pixel);
            
            // Make the pixel visible
            requestAnimationFrame(() => {
                pixel.style.opacity = '0.5';
            });
            
            // After the animation is done, remove the pixel
            setTimeout(() => {
                container.removeChild(pixel);
            }, 500); // matches the CSS transition duration
        }

        submitted = false; // reset the flag
    }
}