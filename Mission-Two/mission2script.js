const recipeGraphicsContainer = document.getElementById('recipeGraphics');
const recipeImage = document.getElementById('recipe-Image')
const textOverImage = document.getElementById('recipeImageDescriptor')

const serveCounter = document.getElementById("serveCount");
const serveLimitMessageDisplay = document.getElementById("serveLimitMessage")

// Event listeners for the recipe image

recipeGraphicsContainer.addEventListener('mouseenter', function() {
    recipeImage.style.opacity = '0.5';
    textOverImage.style.visibility = 'visible';
});
  
recipeGraphicsContainer.addEventListener('mouseleave', function() {
    recipeImage.style.opacity = '1';
    textOverImage.style.visibility = 'hidden';
});

// Initialise the conversion factors
let conversionFactors = [];

for (let i = 1; i <= 9; i++) {
    const quantity = Number(document.getElementById(`quantity${i}`).textContent);
    conversionFactors.push(quantity / 6);
}

// Update the quantities when the serve count changes
function updateQuantities() {
    for (let i = 1; i <= 9; i++) {
        const quantity = (conversionFactors[i - 1] * serveCount).toFixed(2);
        document.getElementById(`quantity${i}`).textContent = quantity;
    }
}

// Serve count functionality
let serveCount = 6;
function countMore() {
    if (serveCount < 10) {
        serveCount++;
  serveCounter.textContent = serveCount;
}
    else {
        serveLimitMessageDisplay.style.visibility = "visible";
    }
    updateQuantities();
}

function countLess() {
    if (serveCount > 1) {
        serveCount--;
        serveCounter.textContent = serveCount;
    }
    // If serveCount is less than 10, hide the serveLimitMessage
    if (serveCount < 10) {
        serveLimitMessageDisplay.style.visibility = "hidden";
    }
    updateQuantities();
}


