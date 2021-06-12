<template>
  <a-config-provider :locale="locale">
    <router-view />
  </a-config-provider>
</template>

<script>
import { defineComponent } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
export default defineComponent({
  data() {
    return { locale: zhCN };
  }
});
</script>
