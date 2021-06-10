<template>
  <div class="outline" @click="toggleClick">
    <i class="yrisicon-search" />
  </div>
  <el-drawer v-model="drawer" direction="rtl" size="20%">
    <template #title>快速查找 </template>
  </el-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Setting",
  setup() {
    const drawer = ref<boolean>(false);
    function toggleClick(): void {
      drawer.value = !drawer.value;
    }

    return {
      drawer,
      toggleClick
    };
  }
});
</script>

<style lang="scss" scoped>
@import "../../css/variable.scss";

.outline {
  position: fixed;
  top: 40%;
  right: 0;
  padding: $gapIcon;
  color: $textColorLight;
  cursor: pointer;
  background: $colorTheme;
  border-radius: $gapIcon 0 0 $gapIcon;
}
</style>
