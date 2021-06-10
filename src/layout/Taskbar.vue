<template>
  <!-- <el-tabs
    v-model="activeName"
    :tab-position="tabPosition"
    @tab-click="changeTab"
  >
    <el-tab-pane
      v-for="(item, $index) in tabRouters"
      :key="$index"
      :name="item.path === '/' ? '/home' : item.path"
    >
      <template #label>
        <div class="label-item">
          <svg-icon :icon-class="filterTab(item, 'icon')" />
          <div class="title-item">{{ filterTab(item, 'title') }}</div>
        </div>
      </template>
    </el-tab-pane>
  </el-tabs> -->

  <el-tabs type="card" closable id="taskbar">
    <el-tab-pane name="capital">
      <template #label>
        <span><i class="yrisicon-capital"></i> 业务资金</span>
      </template>
    </el-tab-pane>
    <el-tab-pane name="draft">
      <template #label>
        <span><i class="yrisicon-draft"></i> 业务草稿</span>
      </template>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="dispatch">
      <template #label>
        <span><i class="yrisicon-dispatch"></i> 采购分配</span>
      </template>
    </el-tab-pane>
    <el-tab-pane label="用户管理" name="bank">
      <template #label>
        <span><i class="yrisicon-bank"></i> 银行对账</span>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { appStore } from '_@/store/modules/app'
// import { permissionStore } from '_@/store/modules/permission'
// import type { RouteRecordRaw } from 'vue-router'
// import { useRouter } from 'vue-router'
// import { findIndex } from '@/utils'
// import { isExternal } from '@/utils/validate'

export default defineComponent({
  name: "Taskbar",
  setup() {
    // const { currentRoute, push } = useRouter()
    // const activeName = ref<string>('')
    // const routers = computed((): RouteRecordRaw[] => permissionStore.routers)
    // const tabRouters = computed((): RouteRecordRaw[] => routers.value.filter(v => !v.meta?.hidden))
    // const layout = computed(() => appStore.layout)
    // const tabPosition = computed(() => layout.value === 'Classic' ? 'left' : 'top')
    // function init() {
    //   const currentPath = currentRoute.value.fullPath.split('/')
    //   const index = findIndex(tabRouters.value, (v: RouteRecordRaw) => {
    //     if (v.path === '/') {
    //       return `/${currentPath[1]}` === '/dashboard'
    //     } else {
    //       return v.path === `/${currentPath[1]}`
    //     }
    //   })
    //   if (index > -1) {
    //     activeName.value = `/${currentPath[1]}`
    //     setActive(index)
    //     permissionStore.SetAcitveTab(activeName.value)
    //   }
    // }
    // function filterTab(item: RouteRecordRaw | any, key: string): any {
    //   return item.meta && item.meta[key] ? item.meta[key] : item.children[0].meta[key]
    // }
    // function setActive(index: number): void {
    //   const currRoute: any = tabRouters.value[index]
    //   permissionStore.SetMenuTabRouters(currRoute.children)
    // }
    // function changeTab(item: any) {
    //   const currRoute: any = tabRouters.value[item.index]
    //   permissionStore.SetMenuTabRouters(currRoute.children)
    //   if (isExternal(currRoute.children[0].path)) {
    //     window.open(currRoute.children[0].path)
    //   } else {
    //     push(`${activeName.value === '/dashboard' ? '' : activeName.value}/${currRoute.children[0].path}`)
    //     permissionStore.SetAcitveTab(activeName.value)
    //   }
    // }
    // onMounted(() => {
    //   init()
    // })
    // watch(
    //   () => currentRoute.value,
    //   () => {
    //     init()
    //   }
    // )
    // watch(
    //   () => activeName.value,
    //   (val) => {
    //     permissionStore.SetAcitveTab(val)
    //   }
    // )
    // return {
    //   activeName,
    //   tabRouters,
    //   tabPosition,
    //   filterTab,
    //   setActive,
    //   changeTab
    // }
  }
});
</script>

<style lang="scss" scoped>
@import "../../css/variable.scss";
#taskbar {
  :deep(.el-tabs__header) {
    margin-bottom: 0;
    border-bottom: 0;
  }
  :deep(.el-tabs__nav) {
    border-radius: 0;
    border-top: 0;
  }
  :deep(.el-tabs__item) {
    border-bottom: 0;
    color: $textColorNormal;
    background-color: $colorBack;
  }
  :deep(.el-tabs__item.is-active) {
    color: $textColorWhite;
    background-color: $colorTheme;
  }
}
</style>
