<template>
    <div>
        <div id="app" class="flex flex-col items-center rounded-md shadow-lg ">
            <div class="flex justify-center mb-4 content-center">
                <div class="flex flex-row mr-5 mt-1">
                    <p class="mr-4 text-lg">Line colour 1: </p>
                    <input type="color" v-model="currentColor1" class="w-6 h-6 cursor-pointer" />
                </div>
                <div class="flex flex-row mr-5 mt-1">
                    <p class="mr-4 text-lg">Line colour 2: </p>
                    <input type="color" v-model="currentColor2" class="w-6 h-6 cursor-pointer" />
                </div>         
                <div class="flex flex-row mr-5 mt-1">
                    <p class="mr-4 text-lg">Background colour: </p>
                    <input type="color" v-model="canvasBgColor" class="w-6 h-6 cursor-pointer" />
                </div> 
                <div class="flex flex-row mr-5 mt-1 content-center justify-center">
                    <button @click="resetCanvas" class="hover:bg-gray-800 text-white px-1 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/>
                        </svg>
                    </button>
                </div> 
                <div class="flex flex-row content-center justify-center">
                    <button @click="showSaveMessage" class="hover:bg-gray-800 text-white px-1 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                        </svg>
                    </button>
                </div> 
            </div>
            <p class="mb-4 italic text-emerald-500" v-if="showMessage">{{ message }}</p>
            <canvas id="canvas" width="600" height="600" :style="{ backgroundColor: canvasBgColor }" class="rounded-md border-4"></canvas>
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
      currentColor1: "#906cff",
      currentColor2: "#6cff70",
      canvasBgColor: '#000000',
      showMessage: false,
      message: ''
    };
  },
    mounted(){
        let lastX, lastY;
        let drawing = false;
        const line1 = this;
        const line2 = this;

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

        let lineThickness = 1 + Math.sqrt((lastX - x) * (lastX - x) + (lastY - y) * (lastY - y)) / 5;
            if (lineThickness > 10) {
                lineThickness = 10;
            }
        ctx.lineWidth = lineThickness;
        ctx.lineJoin="round";
        ctx.lineCap="round";

        ctx.strokeStyle = line1.currentColor1;

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();

        ctx.strokeStyle = line2.currentColor2;

        ctx.beginPath();
        ctx.moveTo(600-lastX, lastY);
        ctx.lineTo(600-x, y);
        ctx.stroke();
        ctx.closePath();
        
        lastX = x;
        lastY = y;
        });
    },
    methods: {
        showSaveMessage() {
            this.showMessage = !this.showMessage;
            if (this.showMessage) {
            this.setMessage("To save your artwork, right click the canvas and select 'Save Image As...'");
            } else {
            this.setMessage('');
            }
        },
        setMessage(message) {
            this.message = message;
        },
        resetCanvas() {
            const ctx = document.querySelector('canvas').getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}

</script>