<template>
  <a-layout class="yris_layout" has-sider>
    <Sider />
    <a-layout class="yris_layout-main">
      <Titlebar />
      <WorkSpace />
      <Statusbar />
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import Sider from './Sider.vue';
import Titlebar from './Titlebar.vue';
import WorkSpace from './WorkSpace.vue';
import Statusbar from './Statusbar.vue';

export default defineComponent({
  name: 'Layout',
  components: { Sider, Titlebar, WorkSpace, Statusbar }
});
</script>

<style lang="less">
.yris_layout {
  height: 100vh;
  display: flex;
  flex: 1;
  .yris_layout-main {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
