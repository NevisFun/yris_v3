<template>
  <a-space align="center">
    <a-dropdown :trigger="['click', 'hover']">
      <a-button type="link"><i class="yrisicon-user"></i></a-button>
      <template #overlay>
        <a-menu>
          <a-menu-item key="1">
            <span @click="toHome">编辑信息</span>
          </a-menu-item>
          <a-menu-item key="2">
            <span @click="toHome">修改密码</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    <a-button type="link"><i class="yrisicon-message"></i> </a-button>
    <a-tooltip placement="bottom" content="退出系统">
      <a-button type="link"><i class="yrisicon-exit"></i></a-button>
    </a-tooltip>
  </a-space>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginUser'
});
</script>

<style lang="less"></style>
