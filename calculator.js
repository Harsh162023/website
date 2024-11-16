document.getElementById('food-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const foodChoice = document.getElementById('food-choice').value;
    const quantity = parseFloat(document.getElementById('quantity').value);
    let foodData = {};
    let foodName = '';

    // Environmental impact data (per kg of food)
    const impactData = {
        beef: {
            name: "Beef (Meat-based)",
            co2: 27, // CO2 in kg
            water: 15000, // Liters of water
            land: 600, // Square meters of land
            deforestation: 0.6 // Hectares of deforested land
        },
        chicken: {
            name: "Chicken (Poultry)",
            co2: 6.9, // CO2 in kg
            water: 4000, // Liters of water
            land: 200, // Square meters of land
            deforestation: 0.2 // Hectares of deforested land
        },
        plant: {
            name: "Vegetables/Grains (Plant-based)",
            co2: 2, // CO2 in kg
            water: 1000, // Liters of water
            land: 50, // Square meters of land
            deforestation: 0.05 // Hectares of deforested land
        }
    };

    // Get the impact data based on the selected food
    foodData = impactData[foodChoice];
    foodName = foodData.name;

    // Calculate the environmental impact based on the quantity (in kg)
    const totalCO2 = foodData.co2 * quantity;
    const totalWater = foodData.water * quantity;
    const totalLand = foodData.land * quantity;
    const totalDeforestation = foodData.deforestation * quantity;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';

    resultDiv.innerHTML = `
        <h3>Environmental Impact of ${foodName}</h3>
        <p><strong>CO2 Emissions:</strong> ${totalCO2.toFixed(2)} kg</p>
        <p><strong>Water Use:</strong> ${totalWater.toFixed(2)} liters</p>
        <p><strong>Land Use:</strong> ${totalLand.toFixed(2)} m²</p>
        <p><strong>Deforestation Impact:</strong> ${totalDeforestation.toFixed(2)} hectares</p>

        <p>${foodName === "Beef (Meat-based)" ? "Consider reducing beef consumption to help lower your carbon footprint and save water." : "A plant-based diet is generally more sustainable for the environment!"}</p>
    `;
});
