<template>
    <div>
        <div id="app" class="flex flex-col items-center rounded-md shadow-lg ">
            <div class="flex justify-center mb-4">
                <input type="color" v-model="currentColor" class="w-6 h-6 rounded-full focus:outline-none" />
            </div>
            <canvas id="canvas" width="600" height="600" class="rounded-md border-4 bg-white"></canvas>
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