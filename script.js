/* ========================================= */
/* Student Contribution Website - JavaScript */
/* ========================================= */

/* ========================================= */
/* DOCUMENT READY FUNCTION */
/* Runs when the HTML page is fully loaded */
/* This ensures all elements exist before we try to use them */
/* ========================================= */
document.addEventListener('DOMContentLoaded', function() {

    /* ========================================= */
    /* DARK MODE FUNCTIONALITY */
    /* ========================================= */

    /* How Dark Mode Works:
     * 1. We store a preference in localStorage (browser's storage)
     * 2. When the page loads, we check if user previously chose dark mode
     * 3. If yes, we add 'dark-mode' class to the body
     * 4. CSS variables change colors based on this class
     * 5. The button toggles this class on/off
     */

    // Get the dark mode button element
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Get the body element (the entire page)
    const body = document.body;

    /* ========================================= */
    /* Check for saved dark mode preference */
    /* localStorage is like a small database in the browser */
    /* It remembers user choices even after they close the page */
    /* ========================================= */
    const savedDarkMode = localStorage.getItem('darkMode');

    // If user previously chose dark mode, apply it
    if (savedDarkMode === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<span class="icon">🌙</span>';
    }

    /* ========================================= */
    /* Add click event to dark mode button */
    /* This runs when user clicks the toggle button */
    /* ========================================= */
    darkModeToggle.addEventListener('click', function() {

        // Toggle the dark-mode class on the body
        body.classList.toggle('dark-mode');

        /* ========================================= */
        /* Check if dark mode is now enabled or disabled */
        /* Update the button icon and save preference */
        /* ========================================= */
        if (body.classList.contains('dark-mode')) {
            // Dark mode is ON - show moon icon
            darkModeToggle.innerHTML = '<span class="icon">🌙</span>';
            // Save this preference to localStorage
            localStorage.setItem('darkMode', 'enabled');
        } else {
            // Dark mode is OFF - show sun icon
            darkModeToggle.innerHTML = '<span class="icon">☀️</span>';
            // Save this preference to localStorage
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    /* ========================================= */
    /* CONTRIBUTOR COUNTER FUNCTIONALITY */
    /* ========================================= */

    /* How the Contributor Counter Works:
     * 1. We look at all elements with class "student-card"
     * 2. We count how many there are
     * 3. We display that number on the page
     * 4. This updates automatically as students add cards
     */

    // Get the counter display element
    const contributorCountElement = document.getElementById('contributorCount');

    /* ========================================= */
    /* Function to count and display contributors */
    /* Counts all cards with class "student-card" */
    /* ========================================= */
    function updateContributorCount() {
        // Get all student cards from the page
        const allCards = document.querySelectorAll('.student-card');

        // Get the number of cards
        const count = allCards.length;

        // Display the count
        contributorCountElement.textContent = count;
    }

    // Run the function when page loads
    updateContributorCount();

    /* ========================================= */
    /* Optional: Log a welcome message */
    /* This helps students see JavaScript is working */
    /* ========================================= */
    console.log('Welcome to the Student Contribution Website!');
    console.log('Dark mode and contributor counter are ready.');

});