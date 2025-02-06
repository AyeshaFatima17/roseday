document.getElementById("surprise-btn").addEventListener("click", function() {
    const messageContainer = document.getElementById("message-container");
    const heartsContainer = document.getElementById("hearts-container");

    // Display the message "Happy Rose Day!" and make it float upwards
    messageContainer.innerHTML = "Happy Rose Day! 💗";
    messageContainer.style.display = "block";
    messageContainer.style.animation = "fadeInUp 2s ease-out";

    // Create hearts floating up from the bottom at random speeds
    const numberOfHearts = 25; // Adjust the number of hearts
    for (let i = 0; i < numberOfHearts; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement("span");
        heart.textContent = "💗";
        heart.classList.add("heart");

        // Randomize the position and animation speed for variety
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2-5s

        heartsContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000); // Make sure the heart is removed after 5 seconds
    }
});
