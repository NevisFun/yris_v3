<template>
  <a-layout class="yris-layout">
    <Sider />

    <a-layout>
      <Titlebar />

      <Taskbar />
      <vab-content />
      <a-layout-footer>
        <Statusbar />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import Sider from './Sider.vue';
import Titlebar from './Titlebar.vue';
import Taskbar from './Taskbar.vue';
import Statusbar from './Statusbar.vue';

export default defineComponent({
  name: 'Layout',
  components: { Sider, Titlebar, Taskbar, Statusbar }
});
// import VabAvatar from './vab-avatar';
// import VabMenu from './vab-menu';
// import VabTabs from './vab-tabs';
// import VabContent from './vab-content';
// import { mapActions, mapGetters } from 'vuex';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';

// export default {
//   components: {
//     VabAvatar,
//     VabMenu,
//     VabTabs,
//     VabContent,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined
//   },
//   data() {
//     return {
//       selectedKeys: [],
//       openKeys: []
//     };
//   },
//   computed: {
//     ...mapGetters({
//       collapse: 'settings/collapse',
//       routes: 'routes/routes',
//       device: 'settings/device'
//     }),
//     classObj() {
//       return {
//         'vab-mobile': this.device === 'mobile',
//         'vab-collapse': this.collapse
//       };
//     }
//   },
//   watch: {
//     $route: {
//       handler({ path, matched }) {
//         matched[0].children.length > 1 ? (this.selectedKeys = [path]) : (this.selectedKeys = [matched[0].path]);
//         this.openKeys = [matched[0].path];
//       },
//       immediate: true
//     }
//   },
//   beforeMount() {
//     window.addEventListener('resize', this.handleLayouts);
//   },
//   beforeUnmount() {
//     window.removeEventListener('resize', this.handleLayouts);
//   },
//   mounted() {
//     this.handleLayouts();
//   },
//   methods: {
//     ...mapActions({
//       toggleDevice: 'settings/toggleDevice',
//       handleFoldSideBar: 'settings/foldSideBar',
//       toggleCollapse: 'settings/toggleCollapse'
//     }),
//     handleLayouts() {
//       const width = document.body.getBoundingClientRect().width;
//       if (this.width !== width) {
//         const isMobile = width - 1 < 992;
//         this.toggleDevice(isMobile ? 'mobile' : 'desktop');
//         this.width = width;
//       }
//     }
//   }
// };
</script>

<style lang="less">
// .vab-layout-wrap {
//   .vab-sider {
//     position: fixed;
//     left: 0;
//     height: 100vh;
//     overflow: auto;
//     .vab-menu {
//       height: calc(100vh - @vab-header-height);
//     }
//   }
//   .vab-layout {
//     padding-left: 250px;
//     transition: all 0.2s;
//   }
//   .vab-mobile-layout {
//     padding-left: 0;
//     transition: all 0.2s;
//   }
//   .vab-collapse {
//     .vab-logo .anticon + span {
//       display: inline-block;
//       max-width: 0;
//       opacity: 0;
//       transition: all 0.2s;
//     }
//     & + .vab-layout {
//       padding-left: 81px;
//       transition: all 0.2s;
//     }
//   }
//   .vab-mask {
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     z-index: 998;
//     width: 100%;
//     height: 100vh;
//     overflow: hidden;
//     background: #000;
//     opacity: 0.5;
//   }
//   .vab-mobile {
//     position: fixed !important;
//     z-index: 999;
//     &.vab-collapse {
//       width: 0 !important;
//       min-width: 0 !important;
//       max-width: 0 !important;
//       * {
//         display: none !important;
//         width: 0 !important;
//         min-width: 0 !important;
//         max-width: 0 !important;
//       }
//       .ant-menu-item,
//       .ant-menu-submenu {
//         display: none !important;
//         width: 0 !important;
//         min-width: 0 !important;
//         max-width: 0 !important;
//       }
//       & + .vab-layout {
//         padding-left: 0px !important;
//         transition: all 0.2s;
//       }
//     }
//   }
//   .vab-header {
//     padding: 0;
//     background: #fff;
//     .ant-col + .ant-col {
//       display: flex;
//       justify-content: flex-end;
//       padding: 0 @vab-padding;
//     }
//     .trigger {
//       height: @vab-header-height;
//       padding: 0 @vab-padding;
//       font-size: 18px;
//       line-height: @vab-header-height;
//       cursor: pointer;
//       transition: color 0.3s;
//       &:hover {
//         color: #1890ff;
//       }
//     }
//   }
// }
</style>
