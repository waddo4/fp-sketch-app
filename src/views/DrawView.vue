<template>
    <div class="max-w-screen-xl mx-auto px-4 py-10">
        <div id="app" class="p-8 flex flex-col items-center bg-green-300 rounded-md shadow-lg ">
            <h1 class="flex text-3xl text-slate-700 mb-4">Sketch</h1>
            <canvas id="canvas" width="1060" height="460" class="rounded-md border-4 border-rose-500 bg-white"></canvas>
            <p>
                x-axis: <strong>{{ x }}</strong>, 
                y-axis: <strong>{{ y }}</strong>
            </p>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

$("#canvas").on('mousemove', (e) => {
    const { pageX:x, pageY:y } = e; // Destructuring with renaming
    console.log(`X: ${ x }, Y: ${ y }`)
});

let xStart,
    xStart1,
    xEnd,
    xEnd1,
    yStart,
    yStart1,
    yEnd,
    yEnd1,
    paint,
    ctx;
    const diff = 50;

export default {
    mounted() {
        const canvas = $('#canvas')[0];
        if (canvas) {
        ctx = canvas.getContext("2d");
        ctx.strokeStyle = 'blue';
        ctx.font = '40pt Calibri';
        ctx.fillStyle = 'blue';
        ctx.fillText('Hello World', 150, 100);
        ctx.lineJoin="round";
        ctx.lineCap="round";
        ctx.lineWidth = 10;
    
    
$('canvas').bind('mousedown mousemove mouseup mouseleave touchstart touchmove touchend', function(e){
            let orig = e.originalEvent;
            
            if(e.type == 'mousedown'){
                e.preventDefault(); e.stopPropagation();
    
                 xStart = e.clientX - $(this).offset().left;
                 xStart1 = (e.clientX + diff) - $(this).offset().left;
                  yStart = e.clientY - $(this).offset().top;
                  yStart1 = (e.clientY + diff) - $(this).offset().top;

                  xEnd = xStart;
                  xEnd1 = xStart1;
                  yEnd = yStart;
                  yEnd1 = xStart1;
                
                paint = true;
                draw(e.type);
            
            }else if(e.type == 'mousemove'){
                if(paint==true){
                    xEnd = e.clientX - $(this).offset().left;
                    xEnd1 = (e.clientX + diff) - $(this).offset().left;
                    yEnd = e.clientY - $(this).offset().top;
                    yEnd1 = (e.clientY + diff) - $(this).offset().top;
                    
                   let lineThickness = 1 + Math.sqrt((xStart - xEnd) * (xStart - xEnd) + (yStart - yEnd) * (yStart - yEnd))/5;
                   
                   if(lineThickness > 10){
                        lineThickness = 10;   
                    }
                    
                    ctx.lineWidth = lineThickness;
                    draw(e.type);
                }
            }else if(e.type == 'mouseup'){
                paint = false;
            }else if(e.type == 'mouseleave'){
                paint = false;
            }else if(e.type == 'touchstart'){
                if(orig.touches.length == 1){
                    e.preventDefault(); e.stopPropagation();

                       xStart = orig.changedTouches[0].pageX - $(this).offset().left;
                      yStart = orig.changedTouches[0].pageY - $(this).offset().top;
                      xEnd = xStart;
                      yEnd = yStart; 
        
                    paint = true;
                    draw(e.type);
                }
            }else if(e.type == 'touchmove'){
                if(orig.touches.length == 1){
                    if(paint==true){
                        xEnd = orig.changedTouches[0].pageX - $(this).offset().left;
                          yEnd = orig.changedTouches[0].pageY - $(this).offset().top;
                         
        lineThickness = 1 + Math.sqrt((xStart - xEnd) * (xStart-xEnd) + (yStart - yEnd) * (yStart-yEnd))/6;
                   if(lineThickness > 10){
                        lineThickness = 10;   
                    }
                    
        ctx.lineWidth = lineThickness;
                                
                        draw(e.type);
                    }
                }
            }else if(e.type == 'touchend'){
                paint = false;
            }
            
        });
}}};


function draw(event){
                
        if(event == 'mousedown'){
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xEnd, yEnd);
            ctx.moveTo(xStart1, yStart);
            ctx.lineTo(xEnd1, yEnd);
            ctx.stroke();
        }else if(event == 'mousemove'){
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xEnd, yEnd);
            ctx.moveTo(xStart1, yStart);
            ctx.lineTo(xEnd1, yEnd);
            ctx.stroke();
        }else if(event == 'touchstart'){
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xEnd, yEnd);
            ctx.stroke();
        }else if(event == 'touchmove'){
            ctx.beginPath();
            ctx.moveTo(xStart, yStart);
            ctx.lineTo(xEnd, yEnd);
            ctx.stroke();
        }
        xStart = xEnd;
        yStart = yEnd;                     
    }
</script>

