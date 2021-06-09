<template>
  <div>
    <h2>layout</h2>
    <router-link to="/business/sale">Sale</router-link>| <router-link to="/business/purchase">Purchase</router-link>|
    <router-link to="/business">business</router-link>|<router-link to="/help/about">About</router-link>|
    <router-link to="/help">Tip</router-link>||<router-link to="/login">Login</router-link>|
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: '',
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
