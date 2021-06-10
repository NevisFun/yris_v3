<template>
  <!-- <a-row>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <menu-unfold-outlined v-if="collapse" class="trigger" @click="toggleCollapse" />
            <menu-fold-outlined v-else class="trigger" @click="toggleCollapse" />
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <vab-avatar />
          </a-col>
        </a-row> -->
  <a-layout-header id="titlebar">
    <div id="toolbar">
      <el-button type="text"><i class="yrisicon-pull"/></el-button>
      <userinfo id="userinfo" />
      <el-tooltip placement="bottom" :content="isFull ? '退出全屏' : '全屏模式'">
        <el-button type="text" @click="toggleFull">
          <i :class="isFull ? 'yrisicon-shrink' : 'yrisicon-spread'" />
        </el-button>
      </el-tooltip>
    </div>

    <taskbar id="taskbar" />

    <div id="caption">
      <img id="yris" src="../../asset/image/yris.svg" alt="yris" style="vertical-align: -2px" />
      <span id="title">业务办公信息管理系统</span>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Taskbar from "./Taskbar.vue";
import Userinfo from "./TheUser.vuee

export default defineComponent({
  name: "Titlebar",
  components: { Taskbar, Userinfo },

  setup() {
    const isFull = ref(false);

    const toggleFull = (): void => {
      isFull.value = !isFull.value;
      if (isFull.value) {
        fullScreen();
      } else exitScreen();
    };

    const fullScreen = (): void => {
      let element = document.documentElement as any;
      let requestFull = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullscreen;
      if (typeof requestFull != "undefined" && requestFull) {
        requestFull.call(element);
      }
    };

    const exitScreen = (): void => {
      let cencelFull = document as any;
      if (cencelFull.exitFullscreen) {
        cencelFull.exitFullscreen();
      } else if (cencelFull.webkitCancelFullScreen) {
        cencelFull.webkitCancelFullScreen();
      } else {
        cencelFull.msExitFullscreen();
      }
    };

    return { isFull, toggleFull };
  }
});
</script>

<style lang="scss" scoped>
@import '../../css/variable.scss';
$heightTitlebar: 40px;

#titlebar {
  width: 100%;
  height: $heightTitlebar;
  display: grid;
  grid-template-columns: 170px auto 284px;

  #toolbar {
    display: grid;
    grid-template-columns: 40px auto 40px;

    #userinfo {
      padding: 0 8px 0 8px;
      height: $heightTitlebar;
    }

    #taskbar {
      height: heightTitlebar;
    }
  }

  #caption {
    padding: 8px 16px 8px 16px;
    text-align: center;
    background-color: rgba($colorTheme, 0.05);
    #yris {
      margin-right: 8px;
      height: 16px;
    }
    #title {
      font-size: 18px;
      font-weight: 600;
      color: $textColorMajor;
    }
  }
}
</style>
