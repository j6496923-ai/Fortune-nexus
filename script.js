// Very simple prototype: move a camera in a flat world
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let x=0, y=0, dir=0;

// basic draw loop
function loop(){
    ctx.fillStyle="#333";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="#0f0";
    ctx.fillText("Position: "+x.toFixed(2)+", "+y.toFixed(2), 20, 40);
    ctx.fillText("Direction: "+dir.toFixed(2), 20, 60);
    requestAnimationFrame(loop);
}
loop();

// simple touch movement
let touchStart=null;
canvas.addEventListener('touchstart',e=>{
    touchStart = e.touches[0];
});
canvas.addEventListener('touchmove',e=>{
    if(!touchStart) return;
    let t=e.touches[0];
    let dx=t.clientX-touchStart.clientX;
    let dy=t.clientY-touchStart.clientY;
    x+=dx*0.02;
    y+=dy*0.02;
    touchStart=t;
});
