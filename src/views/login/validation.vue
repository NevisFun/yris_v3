<template>
  <canvas ref="canvasRef" :width="width" :height="height" @click="draw"></canvas>
</template>

<script>
import { defineComponent, onMounted, ref, unref } from 'vue';

export default defineComponent({
  name: 'Validation',
  setup() {
    const canvasRef = ref();
    const width = ref(120);
    const height = ref(42);

    const codeLen = 4;
    let codeText = '';

    onMounted(() => {
      draw();
    });

    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    };

    const randomColor = (min, max, opicity = 1) => {
      const r = randomNumber(min, max);
      const g = randomNumber(min, max);
      const b = randomNumber(min, max);
      return `rgba(${r},${g},${b},${opicity})`;
    };

    const draw = () => {
      const canvasWrap = unref(canvasRef);
      const canvas = canvasWrap.getContext('2d');
      canvas.fillStyle = randomColor(16, 32, 0.7);
      canvas.fillRect(0, 0, width.value, height.value);
      canvas.font = '32px Source Code Pro Black';

      codeText = String(Math.floor(Math.random() * Math.pow(10, codeLen)));
      codeText = '0'.repeat(codeLen - codeText.length) + codeText;

      let posX = 16;
      for (let index = 0; index < codeLen; index++) {
        canvas.fillStyle = randomColor(80, 150);
        canvas.fillText(codeText.split('')[index], posX, 30);
        posX = posX + 24;
      }

      for (let index = 0; index < 8; index++) {
        canvas.beginPath();
        canvas.moveTo(randomNumber(0, width.value), randomNumber(0, height.value));
        canvas.lineTo(randomNumber(0, width.value), randomNumber(0, height.value));
        canvas.strokeStyle = randomColor(180, 230, 0.2);
        canvas.closePath();
        canvas.stroke();
      }

      for (let index = 0; index < 40; index++) {
        canvas.beginPath();
        canvas.arc(randomNumber(0, width.value), randomNumber(0, height.value), 1, 0, 2 * Math.PI);
        canvas.closePath();
        canvas.fillStyle = randomColor(150, 200, 0.5);
        canvas.fill();
      }
    };

    const compareCode = (pareCode) => {
      return pareCode === codeText;
    };

    return { canvasRef, width, height, compareCode, draw };
  }
});
</script>

<style lang="less" scoped>
@import '../../styles/quote.less';
canvas {
  margin-left: @inline-gap;
  cursor: pointer;
}
</style>
