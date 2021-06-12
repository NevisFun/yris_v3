<template>
  <a-layout-header class="yris_layout-titlebar">
    <div class="titlebar-operation">
      <a-button type="link" @click="() => (isCollapse = !isCollapse)">
        <i :class="isCollapse ? 'yrisicon-pull' : 'yrisicon-push'" />
      </a-button>
      <LoginUser />
      <a-button type="link" @click="toggleFull">
        <i :class="isFull ? 'yrisicon-shrink' : 'yrisicon-spread'" />
      </a-button>
    </div>

    <Breadcrumb class="titlebar-bread" />

    <div class="titlebar-caption">
      <img class="icon" src="../assets/image/yris.svg" alt="yris" />
      <span class="title">业务办公信息管理系统</span>
    </div>
  </a-layout-header>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import LoginUser from './titlebar/LoginUser.vue';
import Breadcrumb from './titlebar/Breadcrumb.vue';

export default defineComponent({
  name: 'Titlebar',
  components: { LoginUser, Breadcrumb },

  setup() {
    const store = useStore();
    const isFull = ref(false);

    const isCollapse = computed({
      get() {
        return store.getters['setting/isCollapse'];
      },
      set(value) {
        store.commit('setting/setCollapse', value);
      }
    });

    const toggleFull = () => {
      isFull.value = !isFull.value;
      if (isFull.value) {
        fullScreen();
      } else exitScreen();
    };

    const fullScreen = () => {
      let element = document.documentElement;
      let requestFull =
        element.requestFullScreen ||
        element.webkitRequestFullScreen ||
        element.mozRequestFullScreen ||
        element.msRequestFullscreen;
      if (typeof requestFull != 'undefined' && requestFull) {
        requestFull.call(element);
      }
    };

    const exitScreen = () => {
      let cencelFull = document;
      if (cencelFull.exitFullscreen) {
        cencelFull.exitFullscreen();
      } else if (cencelFull.webkitCancelFullScreen) {
        cencelFull.webkitCancelFullScreen();
      } else {
        cencelFull.msExitFullscreen();
      }
    };

    return { isFull, isCollapse, toggleFull };
  }
});
</script>

<style lang="less">
@import '../styles/quote.less';

.yris_layout-titlebar {
  height: @bar-height;
  background-color: @back-color-work;
  display: grid;
  grid-template-columns: 200px auto 284px;

  .titlebar-operation {
    display: grid;
    grid-template-columns: 40px auto 40px;
    align-content: center;
    border-right: 1px solid rgba(@border-color-light, 0.5);
  }

  .titlebar-bread {
    padding: 8px 16px;
  }

  .titlebar-caption {
    padding: 4px 0;
    text-align: center;
    background-color: rgba(@theme-color, 0.3);
    .icon {
      margin-right: 8px;
      height: @font-size-large;
      vertical-align: -2px;
    }
    .title {
      font-size: @font-size-huge;
      font-weight: 600;
      color: @text-color-white;
    }
  }
}
</style>
