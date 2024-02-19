let canvas = document.getElementById('imageCanvas');
let ctx = canvas.getContext('2d');
let img = document.getElementById('sourceImage');

// Funkce pro generování vstupních polí pro linkové texty
function generateLinkInputs() {
    const numLinks = document.getElementById('numLinks').value;
    const linkTextsContainer = document.getElementById('linkTexts');
    linkTextsContainer.innerHTML = ''; // Vyčistíme předchozí linkové texty

    for (let i = 1; i <= numLinks; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
        input.id = `linkText${i}`;
        input.placeholder = `Zadejte text do políčka linky ${i}`;
        linkTextsContainer.appendChild(input);
        linkTextsContainer.appendChild(document.createElement('br'));
    }
}
function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    // Hlavní text - vycentrování v kreslící oblasti
    const mainText = document.getElementById('mainText').value;
    drawText(mainText, 26, 405 + 20, '20px', 'white', 349); // Posunutí hlavního textu dolů o 20px

    // Shromáždění linkových textů
    let linkTexts = [];
    const numLinks = document.getElementById('numLinks').value; // Získáme počet linků uživatele
    for (let i = 1; i <= numLinks; i++) { // Iterujeme pouze přes počet linků, který uživatel chtěl
        let input = document.getElementById(`linkText${i}`);
        if (input && input.value.trim()) {
            linkTexts.push(input.value.trim());
        }
    }

    // Dynamické pozice pro linkové texty
    let dynamicPositions = calculateDynamicPositions(linkTexts.length);

    // Vykreslení linkových textů na správných pozicích
    linkTexts.forEach((text, index) => {
        drawText(text, dynamicPositions[index].x, dynamicPositions[index].y + 20, '26px', 'black', 44); // Posunutí linkových textů dolů o 20px
    });
}


function drawText(text, x, y, fontSize, color, boxWidth = null) {
    ctx.font = `${fontSize} 'CustomFont'`;
    ctx.fillStyle = color;
    if (boxWidth) {
        let metrics = ctx.measureText(text);
        let textWidth = metrics.width;
        x += (boxWidth - textWidth) / 2; // Upravení x pro vycentrování v boxu
    }
    ctx.fillText(text, x, y);
}

function calculateDynamicPositions(linkCount) {
    const basePositions = [
        { x: 27, y: 443 }, { x: 81, y: 443 }, { x: 141, y: 443 },
        { x: 201, y: 443 }, { x: 261, y: 443 }, { x: 321, y: 443 }
    ];
    switch (linkCount) {
        case 1:
            return [{ x: (basePositions[2].x + basePositions[3].x) / 2, y: 443 }];
        case 3:
            return [basePositions[1], basePositions[2], basePositions[3]];
        case 5:
            return basePositions.slice(1, 6);
        default:
            return basePositions.slice(0, linkCount);
    }
}

function resetText() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height);

    document.getElementById('mainText').value = '';
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`linkText${i}`).value = '';
    }
}

img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
};

if (img.complete) {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
}
