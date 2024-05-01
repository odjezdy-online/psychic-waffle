<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Editor</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .input-container {
            margin-bottom: 10px;
        }
        input {
            display: block;
            width: 100%;
            padding: 5px;
            margin-bottom: 5px;
        }
    </style>
</head>
<body>
    <h1>Image Editor</h1>
    <input type="file" id="sourceImage" accept="image/*" onchange="loadImage()">
    <canvas id="imageCanvas"></canvas>
    <div id="textInputArea">
        <div class="input-container">
            <label for="mainText">Main Text:</label>
            <input type="text" id="mainText" placeholder="Enter main text">
        </div>
        <div class="input-container">
            <label for="numLinks">Number of Links:</label>
            <input type="number" id="numLinks" min="1" max="6" value="1">
        </div>
        <div id="linkTexts"></div>
    </div>
    <button onclick="updateCanvas()">Update Canvas</button>
    <button onclick="resetText()">Reset Text</button>

    <script>
        const canvas = document.getElementById('imageCanvas');
        const ctx = canvas.getContext('2d');
        let img;

        function loadImage() {
            img = new Image();
            img.src = URL.createObjectURL(document.getElementById('sourceImage').files[0]);
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                resetText();
            };
        }

        function generateLinkInputs() {
            const numLinks = parseInt(document.getElementById('numLinks').value);
            const linkTextsContainer = document.getElementById('linkTexts');
            linkTextsContainer.innerHTML = '';

            for (let i = 1; i <= numLinks; i++) {
                const inputContainer = document.createElement('div');
                inputContainer.className = 'input-container';

                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
                input.id = `linkText${i}`;
                input.placeholder = `Enter text for link ${i}`;
                inputContainer.appendChild(input);

                linkTextsContainer.appendChild(inputContainer);
                linkTextsContainer.appendChild(document.createElement('br'));
            }
        }

        function updateCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, img.width, img.height);

            const mainText = document.getElementById('mainText').value;
            drawText(mainText, 26, 405 + 20, '20px', 'white', 349);

            const linkTexts = [];
            const numLinks = document.getElementById('numLinks').value;

            for (let i = 1; i <= numLinks; i++) {
                const input = document.getElementById(`linkText${i}`);
                if (input && input.value.trim()) {
                    linkTexts.push(input.value.trim());
                }
            }

            const dynamicPositions = calculateDynamicPositions(linkTexts.length);

            linkTexts.forEach((text, index) => {
                drawText(text, dynamicPositions[index].x, dynamicPositions[index].y + 20, '26px', 'black', 44);
            });
        }

        function drawText(text, x, y, fontSize, color, boxWidth = null) {
            ctx.font = `${fontSize} 'CustomFont'`;
            ctx.fillStyle = color;

            if (boxWidth) {
                const metrics = ctx.measureText(text);
                const textWidth = metrics.width;
                x += (boxWidth - textWidth) / 2;
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

            generateLinkInputs();
        }

        // Initialize link inputs when the page loads
        window.onload = generateLinkInputs;
    </script>
</body>
</html>
