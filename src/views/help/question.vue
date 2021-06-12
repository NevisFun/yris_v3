<template>
  <h1>Question List</h1>
  <a-space>
    <router-link to="/help/question/A">QuestionA</router-link>
    <router-link to="/help/question/B">QuestionB</router-link>
    <router-view></router-view>
  </a-space>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Question',
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
