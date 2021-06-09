<template>
  <div>
    <h1>YRIS登录</h1>
    <a-form>
      <a-form-item label="username">
        <a-input>admin</a-input>
      </a-form-item>
      <a-form-item label="password">
        <a-input>123456</a-input>
      </a-form-item>
      <a-button type="primary" @click="login"> login </a-button>
    </a-form>
    <div>themeName:{{ themeName }}</div>
    <router-link to="home">
      home
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Login',

  setup() {
    const store = useStore();
    // console.log(store.mutations['setting/setThemeName']);
    const themeName = store.getters['setting/themeName'];
    const setTheme = () => {
      store.commit('setting/setThemeName', 'sfsafsfsfdwerwerwffvc');
    };
    const login = () => {
      store.commit('user/setAccessToken', 'admin');
    };
    return { setTheme, login, themeName };
  }
});
</script>

<style scoped lang="less"></style>
