// script.js

// Sample data for the zones and player counts
const zones = [
    { zoneNumber: 1, playersAlive: 100, playerConcentration: 'Balanced' },
    { zoneNumber: 2, playersAlive: 70, playerConcentration: 'Tilted Towers Heavy' },
    { zoneNumber: 3, playersAlive: 50, playerConcentration: 'Edge of Zone' },
    { zoneNumber: 4, playersAlive: 30, playerConcentration: 'Safe Zone Heavy' },
    { zoneNumber: 5, playersAlive: 10, playerConcentration: 'End Game' }
];

let currentZoneIndex = 0;

// Function to update the displayed zone and player data
function updateSimulation() {
    const zone = zones[currentZoneIndex];
    document.getElementById('zone-number').textContent = zone.zoneNumber;
    document.getElementById('players-alive').textContent = zone.playersAlive;
    document.getElementById('player-concentration').textContent = zone.playerConcentration;
}

// Move to the next zone
document.getElementById('next-zone').addEventListener('click', () => {
    if (currentZoneIndex < zones.length - 1) {
        currentZoneIndex++;
        updateSimulation();
    } else {
        alert('Simulation Complete!');
    }
});

// Reset simulation
document.getElementById('reset-simulation').addEventListener('click', () => {
    currentZoneIndex = 0;
    updateSimulation();
});

// Initialize the simulation on page load
window.onload = updateSimulation;
