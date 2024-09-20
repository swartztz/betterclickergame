let points = 0;
let pointsPerSecond = 0;
const pointsDisplay = document.getElementById('points');
const pointsPerSecondDisplay = document.getElementById('pointsPerClick');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const popup = document.getElementById('popup');

// Function to update points
function updatePoints() {
    points += pointsPerSecond;
    pointsDisplay.textContent = points;
}

// Event listener for the click button
clickButton.addEventListener('click', () => {
    points += 1; // Earn 1 point per click
    pointsDisplay.textContent = points;
});

// Event listener for the upgrade button
upgradeButton1.addEventListener('click', () => {
    if (points >= 100) {
        points -= 100; // Cost of the upgrade
        pointsPerSecond += 2; // Increase points per second
        pointsDisplay.textContent = points;
        pointsPerSecondDisplay.textContent = pointsPerSecond;
    } else {
        showPopup("Not enough points for an upgrade!");
    }
});

upgradeButton2.addEventListener('click', () => {
    if (points >= 120) {
        points -= 120; // Cost of the upgrade
        pointsPerSecond += 8; // Increase points per second
        pointsDisplay.textContent = points;
        pointsPerSecondDisplay.textContent = pointsPerSecond;
    } else {
        showPopup("Not enough points for an upgrade!");
    }
});

upgradeButton3.addEventListener('click', () => {
    if (points >= 1000) {
        points -= 1000; // Cost of the upgrade
        pointsPerSecond += 32; // Increase points per second
        pointsDisplay.textContent = points;
        pointsPerSecondDisplay.textContent = pointsPerSecond;
    } else {
        showPopup("Not enough points for an upgrade!");
    }
});

// Show popup function
function showPopup(message) {
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000); // Popup will disappear after 2 seconds
}

// Update points every second
setInterval(updatePoints, 1000);
