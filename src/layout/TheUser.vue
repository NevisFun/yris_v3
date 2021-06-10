<template>
  <div id="userinfo">
    <el-dropdown trigger="hover">
      <el-button type="text"><i class="yrisicon-user"></i></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item key="1">
            <span @click="toHome">编辑信息</span>
          </el-dropdown-item>
          <el-dropdown-item key="2">
            <span @click="toHome">修改密码</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-button type="text"><i class="yrisicon-message"></i> </el-button>
    <el-tooltip placement="bottom" content="退出系统">
      <el-button type="text"><i class="yrisicon-exit"></i></el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Userinfo"
});
</script>

<style lang="scss" scoped>
@import "../../css/variable.scss";

#userinfo {
  display: flex;
  justify-content: space-between;
  .el-button {
    margin: 0;
    padding: 0;
  }
}
</style>