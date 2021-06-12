<template>
  <a-layout-content class="yris_layout-content">
    <a-tabs v-model:activeKey="activeKey" type="editable-card" animated hide-add>
      <a-tab-pane key="0">
        <template #tab>
          <span><i class="yrisicon-home" /> 系统首页</span>
        </template>
        <router-view />
      </a-tab-pane>

      <a-tab-pane v-for="pane in panes" :key="pane.key" :closable="pane.closable">
        <template #tab>
          <span><i :class="pane.icon"></i> {{ pane.title }}</span>
        </template>
        <!-- <router-view /> -->
        {{ pane.title }}
      </a-tab-pane>
      <!-- <a-tab-pane v-for="item in visitedRoutes" :key="item.fullPath" :closable="!isAffix(item)" :tab="item.meta.title">
        <router-view v-slot="{ Component }">
          <transition mode="out-in" name="fade-transform">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-tab-pane> -->
    </a-tabs>
  </a-layout-content>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'Space',
  setup() {
    const panes = ref([
      { title: '业务资金', icon: 'yrisicon-capital', key: '1' },
      { title: '业务草稿', icon: 'yrisicon-draft', key: '2' },
      { title: '银行对账', icon: 'yrisicon-bank', key: '3', closable: false },
      { title: '发票管理', icon: 'yrisicon-invoice', key: '4' },
      { title: '业务草稿', icon: 'yrisicon-draft', key: '5' },
      { title: '银行对账', icon: 'yrisicon-bank', key: '6', closable: false }
    ]);
    const activeKey = ref('0');
    return { panes, activeKey };
  }
});
</script>

<style lang="less">
@import '../styles/quote.less';
@import '~ant-design-vue/dist/antd.less';

.yris_layout-content {
  height: calc(100vh - @bar-height * 2);
  background-color: @back-color-space;

  .ant-tabs-bar {
    margin: 0;
  }

  .ant-tabs-top-content {
    height: calc(100vh - @bar-height * 2 - @tabs-card-height);
    background-color: @white;
  }
}
</style>
