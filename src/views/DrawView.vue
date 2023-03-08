<template>
    <div class="max-w-screen-xl mx-auto px-4 py-10">
        <div id="app" class="p-8 flex flex-col items-center bg-green-300 rounded-md shadow-lg ">
            <h1 class="flex text-3xl text-slate-700 mb-4">Sketch</h1>
            <div class="flex justify-center mb-4">
        <button v-for="color in colors" :key="color" @click="setColor(color)" :style="{ backgroundColor: color }" class="w-8 h-8 rounded-full border-2 border-white focus:outline-none"></button>
      </div>
            <canvas id="canvas" width="600" height="600" class="rounded-md border-4 border-rose-500 bg-white"></canvas>
        </div>
    </div>
</template>


<script>
import $ from "jquery";

// Base code sourced from 
export default {
    data() {
    return {
      lastX: null,
      lastY: null,
      drawing: false,
      colors: ["black", "red", "green", "blue", "orange"],
      currentColor: "black",
    };
  },
    mounted(){
        let lastX, lastY;
        let drawing = false;

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

        ctx.strokeStyle = this.currentColor;

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

            // ctx.strokeStyle = "orange";

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
    methods: {
    setColor(color) {
      this.currentColor = color;
    },
  }
}
</script>