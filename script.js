const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');

canvas.width = 450;
canvas.height = 300;

let drawing = false;
let penColor = '#000000';
let penSize = 2;
let eraserSize = 4;
let erasing = false;

const penSizeInput = document.getElementById('penSize');
const eraserSizeInput = document.getElementById('eraserSize');
const penButton = document.getElementById('pen');
const eraserButton = document.getElementById('eraser');

penSizeInput.addEventListener('input', (event) => {
    penSize = event.target.value;
    erasing = false;
});

eraserSizeInput.addEventListener('input', (event) => {
    eraserSize = event.target.value;
});

penButton.addEventListener('click', () => {
    erasing = false;
    penButton.classList.add('active');
    eraserButton.classList.remove('active');
});

eraserButton.addEventListener('click', () => {
    erasing = true;
    eraserButton.classList.add('active');
    penButton.classList.remove('active');
});

canvas.addEventListener('mousedown', (event) => {
    drawing = true;
    context.beginPath();
    context.moveTo(event.offsetX, event.offsetY);
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        context.lineWidth = erasing ? eraserSize : penSize;
        context.strokeStyle = erasing ? '#ffffff' : penColor;
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.closePath();
});

canvas.addEventListener('mouseleave', () => {
    drawing = false;
    context.closePath();
});

// Initialize with pen active
penButton.classList.add('active');

