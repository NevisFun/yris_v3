<template>
  <div>
    <h1>Sale</h1>
    <BillDetail />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import BillDetail from '../common/BillDetail.vue';

export default defineComponent({
  name: 'Sale',
  components: { BillDetail },
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less"></style>
