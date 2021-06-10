<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible class="yris-layout-sider" width="160">
    <div id="logo">
      <router-link to="Home"> <img src="../assets/image/logo.svg" /> </router-link>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys" class="vab-menu" theme="dark" mode="inline">
      <vab-menu v-for="route in routes" :key="route.path" :item="route" />
    </a-menu>
  </a-layout-sider>
</template>


      // <div id="logo">
      //   <router-link to="Home"> <img src="../assets/image/logo.svg" /> </router-link>
      // </div>
      // <a-menu
      //   v-model:selectedKeys="selectedKeys"
      //   v-model:openKeys="openKeys"
      //   class="vab-menu"
      //   theme="dark"
      //   mode="inline"
      // >
      //   <vab-menu v-for="route in routes" :key="route.path" :item="route" />
      // </a-menu>

<script >
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sider'
});
</script>

<style lang="scss" scoped>
@import '../../css/variable.scss';
$widthNavigator: 160px;

#navigator {
  #logo {
    background-color: rgba(black, 0.2);
    box-sizing: border-box;
    height: $widthNavigator;
    padding: ($widthNavigator - 80px)/2;
  }

  #nav {
    .el-menu {
      border-right: 0;
      background-color: transparent;
    }

    :deep(.el-submenu__title),
    .el-menu-item {
      height: 48px;
      line-height: 48px;
      color: $textColorMinor;
      &:hover {
        color: $textColorNormal;
      }
    }

    i {
      padding: 0 12px 0 0;
    }

    :deep(.el-menu--inline) {
      background-color: rgba(white, 0.1);
    }

    ::v-deep .el-menu-item.is-active {
      background-color: $colorTheme;
      color: $textColorLight;
    }
  }
}
</style>
