<template>
    <div class="max-w-screen-xl mx-auto px-4 py-10">
        <div id="app" class="p-8 flex flex-col items-center bg-green-300 rounded-md shadow-lg ">
            <h1 class="flex text-3xl text-slate-700 mb-4">Sketch</h1>
            <div class="flex justify-center mb-4">
                <input type="color" v-model="currentColor" class="w-10 h-10 rounded-full border-3 border-white focus:outline-none" />
            </div>
<canvas id="canvas" width="600" height="600" class="rounded-md border-4 border-rose-500 bg-white"></canvas>
        </div>
    </div>
</template>


<script>
import $ from "jquery";

// Base code sourced from "https://jsfiddle.net/e4spyo5d/1/"
export default {
    data() {
    return {
      lastX: null,
      lastY: null,
      drawing: false,
      currentColor: "#906cff",
    };
  },
    mounted(){
        let lastX, lastY;
        let drawing = false;
        const vm = this;

        const canvasX = function (e) { return e.pageX - $('canvas').offset().left;}
        const canvasY = function (e) { return e.pageY - $('canvas').offset().top; }

        const ctx = document.querySelector('canvas').getContext('2d');
        const canvas = document.querySelector('canvas');
        canvas.style.cursor = 'crosshair';

        $('canvas').on('mousedown', function (e) {
        drawing = true;
        lastX = canvasX(e);
        lastY = canvasY(e);
        ctx.moveTo(lastX, lastY);
        });

        $('canvas').on('mouseup', function () {
        drawing = false;
        })

        $('canvas').on('mousemove', function (e) {
        if (! drawing) return;
        const x = canvasX(e);
        const y = canvasY(e);

        ctx.strokeStyle = vm.currentColor;

        ctx.beginPath();

        let lineThickness = 1 + Math.sqrt((lastX - x) * (lastX - x) + (lastY - y) * (lastY - y)) / 5;
            if (lineThickness > 10) {
                lineThickness = 10;
            }
        ctx.lineWidth = lineThickness;

        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(600-lastX, lastY);
        ctx.lineTo(600-x, y);
        ctx.stroke();
        ctx.closePath();
        
            ctx.lineJoin="round";
            ctx.lineCap="round";

        lastX = x;
        lastY = y;
        });
    },
}

</script>