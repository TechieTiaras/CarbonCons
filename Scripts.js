document.getElementById('footprint-form').addEventListener('submit', function(event) { 
    event.preventDefault(); 
     
    const productType = document.getElementById('product-type').value; 
    const frequency = document.getElementById('usage-frequency').value; 
    const years = document.getElementById('years-using').value; 
     
    let carbonReduction = 0; 
     
    // Basic Carbon Footprint calculation (example, actual formula could be more complex) 
    if (productType === "bamboo-toothbrush") { 
        carbonReduction = (frequency * years * 0.01); // Example value 
    } else if (productType === "reusable-bag") { 
        carbonReduction = (frequency * years * 0.02); // Example value 
    } else if (productType === "organic-soap") { 
        carbonReduction = (frequency * years * 0.03); // Example value 
    } 
 
    document.getElementById('footprint-result').textContent = `By using this product, you will save approximately ${carbonReduction} kg of CO2 over ${years} years.`; 
}); 
