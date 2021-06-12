<template>
  <a-layout-footer class="yris_layout-statusbar">
    <div class="statusbar-welcome">欢迎使用本系统</div>
    <div class="statusbar-summary">计数：35 求和：35544.04</div>
    <div class="statusbar-state">{{ copyright }}</div>
  </a-layout-footer>
</template>

<script>
import { defineComponent } from 'vue';
import config from '../config/setting.js';

export default defineComponent({
  name: 'Statusbar',
  setup() {
    return { copyright: config.copyright };
  }
});
</script>

<style lang="less">
@import '../styles/quote.less';

.yris_layout-statusbar {
  height: @bar-height;
  background-color: @back-color-bar;
  line-height: @bar-height;
  display: grid;
  grid-template-columns: auto 240px fit-content(0);

  .statusbar-welcome {
    padding-left: @area-padding;
  }

  .statusbar-summary {
    text-align: center;
    border-left: 1px solid rgba(@border-color-light, 0.5);
    border-right: 1px solid rgba(@border-color-light, 0.5);
    .minor-text();
  }

  .statusbar-state {
    padding: 0 @area-padding;
    color: @theme-color;
  }
}
</style>
