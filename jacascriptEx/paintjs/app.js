const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
const savaBtn = document.getElementById('jsSave');

const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = 'INITIAL_COLOR';
ctx.fillStyle = 'INITIAL_COLOR';
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}


function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); // 패스를 만듬
        ctx.moveTo(x, y); 
    } else{
        ctx.lineTo(x, y); // 라인을따라 패스가이동
        ctx.stroke(); // 실제로 그려지기 위해 사용
    }
}

function onMouseDown(event){
    painting = true;
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const strok = event.target.value;
    ctx.lineWidth = strok;
}

function handleModeClick(event){
    if(filling === true){
        filling = false;
        mode.innerText = 'Fill'
    } else{
        filling = true;
        mode.innerText = 'Paint'
    }
}

function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }   
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'PaintJS';
    link.click();
}

if(canvas){
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

Array.from(colors).forEach(changeColor => changeColor.addEventListener('click', handleColorClick));

if(range){
    range.addEventListener('input', handleRangeChange)
}

if(mode){
    mode.addEventListener('click', handleModeClick)
}

if(savaBtn){
    savaBtn.addEventListener('click', handleSaveClick)
}