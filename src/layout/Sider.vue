<template>
  <a-layout-sider :collapsed="isCollapse" collapsible class="yris_layout-sider" width="160" :trigger="null">
    <div class="layout_sider-title" :class="isCollapse ? 'state-shrink' : 'state-expand'">
      <router-link to="/home">
        <img src="../assets/image/logo.svg" />
      </router-link>
    </div>

    <a-menu v-model:selectedKeys="selectedKey" theme="dark" mode="inline">
      <template v-for="route in accessRoutes">
        <a-sub-menu v-if="route.children && route.children.length" :key="route.path">
          <template #title>
            <span class="anticon"><i :class="route.meta.icon"/></span>
            <span>{{ route.meta.title }}</span>
          </template>

          <a-menu-item v-for="child in route.children" :key="child.fullPath">
            <span class="anticon"><i :class="child.meta.icon"/></span>
            <span>{{ child.meta.title }}</span>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Sider',

  setup() {
    const store = useStore();
    const accessRoutes = useRouter().getRoutes();

    const selectedKey = ref(['\\home']);
    const isCollapse = computed({
      get() {
        return store.getters['setting/isCollapse'];
      },
      set(value) {
        store.commit('setting/setCollapse', value);
      }
    });

    console.log(accessRoutes, accessRoutes[1].children);
    return { isCollapse, selectedKey, accessRoutes };
  }
});
</script>

<style lang="less">
@import '../styles/quote.less';
@import '~ant-design-vue/dist/antd.less';

.yris_layout-sider {
  width: @sider-width;

  .layout_sider-title {
    background-color: @back-color-side;
  }
  .state-expand {
    height: calc(@sider-width / 1);
    padding: calc(@sider-width / 4);
  }
  .state-shrink {
    height: calc(@sider-width / 2);
    padding: calc(@sider-width / 8);
  }
  .ant-menu-item-selected {
    border-left: 2px solid @white;
  }
}
</style>
