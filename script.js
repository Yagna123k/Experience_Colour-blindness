var colorInput = document.getElementById('normal');
var extractButton = document.getElementById('checkButton');
const colorDiv = document.getElementById('colorDiv');
var blindnessSelect = document.getElementById('selected');
var blindnessLabel = document.getElementById('blindnessLabel');

function simulateColorBlindness(red, green, blue, type) {
    switch (type) {
        case 'Protanopia':
            return `rgb(${red * 0.45}, ${green * 0.73}, ${blue})`;
        case 'Deuteranopia':
            return `rgb(${red * 0.45}, ${green * 0.73}, ${blue * 0.9})`;
        case 'Tritanopia':
            return `rgb(${red * 1.55}, ${green * 1.55}, ${blue * 0.55})`;
        case 'Protanomaly':
            return `rgb(${red * 0.77}, ${green * 0.77}, ${blue})`;
        case 'Deuteranomaly':
            return `rgb(${red * 0.77}, ${green * 0.77}, ${blue})`;
        case 'Tritanomaly':
            return `rgb(${red * 1.23}, ${green * 1.23}, ${blue * 0.77})`;
        case 'Monochromacy':
            return `rgb(128, 128, 128)`;
        default:
            return `rgb(${red}, ${green}, ${blue})`;
    }
}

function updateColorBoxes(red, green, blue) {
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');
    var box5 = document.getElementById('box5');
    var box6 = document.getElementById('box6');
    var box7 = document.getElementById('box7');

    box1.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Protanopia');
    box2.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Deuteranopia');
    box3.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Tritanopia');
    box4.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Deuteranomaly');
    box5.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Protanomaly');
    box6.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Tritanomaly');
    box7.style.backgroundColor = simulateColorBlindness(red, green, blue, 'Monochromacy');
}

extractButton.addEventListener('click', () => {
    const selectedColor = colorInput.value;

    const red = parseInt(selectedColor.slice(1, 3), 16);
    const green = parseInt(selectedColor.slice(3, 5), 16);
    const blue = parseInt(selectedColor.slice(5, 7), 16);

    const selectedBlindness = blindnessSelect.value;
    const simulatedColor = simulateColorBlindness(red, green, blue, selectedBlindness);

    colorDiv.style.backgroundColor = simulatedColor;
    blindnessLabel.textContent = selectedBlindness;

    // Update other boxes
    updateColorBoxes(red, green, blue);
});
