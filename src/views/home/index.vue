<template>
  <div>
    <h2>HOME</h2>
    <a-space>
      <router-link to="/business/sale">Sale</router-link>
      <router-link to="/business/purchase">Purchase</router-link>
      <router-link to="/help">Tip</router-link>
      <router-link to="/help/about">About</router-link>
      <router-link to="/help/question">Question</router-link>
    </a-space>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
