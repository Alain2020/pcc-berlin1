console.log('Script loaded successfully!');

// JavaScript for Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const expanded = navLinks.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
});

/// Define an array of Bible verses
const bibleVerses = [
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "I can do all things through him who strengthens me. - Philippians 4:13",
    "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. - Deuteronomy 31:6"
];

// Function to display a random Bible verse
function displayRandomVerse() {
    const randomIndex = Math.floor(Math.random() * bibleVerses.length);
    const verse = bibleVerses[randomIndex];
    const verseElement = document.querySelector('.bible-verse');
    verseElement.textContent = verse;
}

// Call the function to display a random verse when the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayRandomVerse();
});

// JavaScript for digital clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digital-clock').textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
