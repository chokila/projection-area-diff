const R = 6378; // Earth's radius in km

function calculate() {
    // Get input values
    const localArea = parseFloat(document.getElementById('localArea').value);
    const distance = parseFloat(document.getElementById('distance').value);

    // Validate inputs
    if (isNaN(localArea) || isNaN(distance) || localArea < 0 || distance < 0) {
        alert('Please enter valid positive numbers');
        return;
    }

    // Perform calculations
    const xSquared = Math.pow(distance, 2);
    const twoRSquared = 2 * Math.pow(R, 2);
    const k = 1 + (xSquared / twoRSquared);
    const kSquared = Math.pow(k, 2);
    const nationalArea = localArea * kSquared;
    const areaDifferenceA = (nationalArea - localArea);
    const areaDifferenceM = areaDifferenceA * 4046.86; // Convert acres to m²
    const areaDifferenceF = areaDifferenceA * 43560; // Convert acres to ft²

    // Display results
    document.getElementById('scaleFactor').textContent = k.toFixed(6);
    document.getElementById('nationalArea').textContent = nationalArea.toFixed(4);
    document.getElementById('areaDifferenceA').textContent = areaDifferenceA.toFixed(4);
    document.getElementById('areaDifferenceM').textContent = areaDifferenceM.toFixed(2);
    document.getElementById('areaDifferenceF').textContent = areaDifferenceF.toFixed(2);
}

// Initial calculation on page load
calculate();