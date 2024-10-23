// Define the current zone and potential next zones
let currentZone = { x: 300, y: 200, width: 600, height: 400 };
let nextZones = [
    { x: 400, y: 300, width: 600, height: 400 }, // Next Zone 1
    { x: 200, y: 150, width: 600, height: 400 }, // Next Zone 2
    { x: 350, y: 250, width: 600, height: 400 }  // Next Zone 3
];

// Function to render the simulation
function renderSimulation() {
    // Render current zone
    const zoneElement = document.getElementById('current-zone');
    zoneElement.style.left = currentZone.x + 'px';
    zoneElement.style.top = currentZone.y + 'px';
    zoneElement.style.width = currentZone.width + 'px';
    zoneElement.style.height = currentZone.height + 'px';
    zoneElement.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // Current zone color

    // Render next zones
    const nextZonesContainer = document.getElementById('next-zones-container');
    nextZonesContainer.innerHTML = ''; // Clear previous zones
    nextZones.forEach((nextZone, index) => {
        const nextZoneElement = document.createElement('div');
        nextZoneElement.style.position = 'absolute';
        nextZoneElement.style.left = nextZone.x + 'px';
        nextZoneElement.style.top = nextZone.y + 'px';
        nextZoneElement.style.width = nextZone.width + 'px';
        nextZoneElement.style.height = nextZone.height + 'px';
        nextZoneElement.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Next zone color
        nextZoneElement.dataset.index = index; // Store index for feedback
        nextZoneElement.classList.add('next-zone');
        
        // Add click event to next zone
        nextZoneElement.addEventListener('click', () => evaluateChoice(index));
        nextZonesContainer.appendChild(nextZoneElement);
    });
}

// Function to evaluate user choices
function evaluateChoice(index) {
    const chosenZone = nextZones[index];

    // Calculate the distance from the current zone to the chosen zone
    const distance = Math.sqrt(Math.pow(chosenZone.x - currentZone.x, 2) + Math.pow(chosenZone.y - currentZone.y, 2));

    let feedback;
    if (distance < 100) {
        feedback = "Good choice! This zone is relatively close.";
    } else {
        feedback = "Be careful! This zone is quite far.";
    }

    // Display feedback to the user
    alert(feedback);
}

// Call renderSimulation to display the initial state
renderSimulation();
