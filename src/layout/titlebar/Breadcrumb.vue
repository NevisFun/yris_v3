<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(route, index) in routeTree" :key="route.name">
      <span>
        <i v-if="index == 0" class="tail-space" :class="route.meta.icon"></i>
        <router-link :to="route.path"> {{ route.meta.title }}</router-link>
      </span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const { currentRoute, push } = useRouter();
    const routeTree = ref();

    watchEffect(() => (routeTree.value = currentRoute.value.matched));
    return { currentRoute, routeTree, push };
  }
});
</script>

<style lang="less"></style>
