<template>
  <div class="login_outline">
    <a-layout class="login_window">
      <a-layout class="login_window-sider">
        <div class="owner">
          九江雍泽再生资源有限公司
        </div>
        <img class="logo" src="../../assets/image/logo.svg" alt="logo" />
        <div class="version">
          V1.0 1920*1080 Be Only Compatible With Latest Chrome
        </div>
      </a-layout>

      <a-layout>
        <a-layout-header height="160px" class="login_window-header">
          <img class="icon" src="../../assets/image/yris.svg" alt="icon" />
          <div class="title">
            业务办公信息管理系统
          </div>
        </a-layout-header>

        <a-layout-content class="login_window-content">
          <a-form :model="loginInfo">
            <a-form-item name="username">
              <a-input v-model:value="loginInfo.username" placeholder="请输入账号" allow-clear>
                <template #prefix>
                  <i class="yrisicon-account"></i>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item name="password">
              <a-input-password v-model:value="loginInfo.password" placeholder="请输入密码">
                <template #prefix>
                  <i class="yrisicon-password"></i>
                </template>
              </a-input-password>
            </a-form-item>

            <div class="vertify-wrap">
              <a-input v-model:value="loginInfo.vertify" placeholder="输入验证码" allow-clear>
                <template #prefix>
                  <i class="yrisicon-validation"></i>
                </template>
              </a-input>
              <Validation id="validation" ref="validationRef" />
            </div>

            <div class="check-group">
              <a-checkbox v-model:checked="saveUser" @change="toggleUser">
                保存用户
              </a-checkbox>
              <a-checkbox v-model:checked="saveCode" @change="toggleCode">
                保存密码
              </a-checkbox>
            </div>

            <a-button type="primary" @click="onSubmit()">
              登录系统
            </a-button>
          </a-form>
        </a-layout-content>
      </a-layout>
    </a-layout>

    <div class="login_footer">
      <div class="copyright">
        {{ copyright }}
      </div>
      <svg
        class="animation-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.2)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.1)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(255,255,255,0.4)" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, unref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import config from '../../config/setting.js';
import Validation from './validation.vue';

export default defineComponent({
  name: 'Login',
  components: { Validation },
  setup() {
    const store = useStore();
    const router = useRouter();
    const validationRef = ref(null);

    const loginInfo = reactive({ username: '', password: '', vertify: '' });
    const saveUser = ref(store.getters['setting/saveUser']);
    const saveCode = ref(store.getters['setting/saveCode']);

    const copyright = ref(config.copyright);
    const toggleUser = () => {
      store.commit('setting/setSaveUser', saveUser.value);
    };
    const toggleCode = () => {
      store.commit('setting/setSaveCode', saveCode.value);
    };

    onMounted(() => {
      if (saveUser.value) loginInfo.username = store.getters['setting/userName'];
      if (saveCode.value) loginInfo.password = store.getters['setting/passWord'];
    });

    const onSubmit = () => {
      const validation = unref(validationRef);
      if (validation.compareCode(loginInfo.vertify)) {
        router.push({ path: '/home', replace: true });
        store.commit('user/setAccessToken', 'safdasf');
      }

      if (saveUser.value) store.commit('setting/setUsername', loginInfo.username);
      if (saveCode.value) store.commit('setting/setPassword', loginInfo.password);
    };
    return { loginInfo, validationRef, onSubmit, saveUser, saveCode, toggleUser, toggleCode, copyright };
  }
});
</script>

<style lang="less">
@import '../../styles/quote.less';

.login_outline {
  width: 100%;
  height: 100vh;
  background-color: @theme-color;
  background-size: cover;
  background-image: url('../../assets/image/login.svg');
}

.login_window {
  @window-height: 480px;
  @window-width: 840px;
  @content-height: 320px;

  height: @window-height;
  width: @window-width;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -(@window-width / 2);
  margin-top: -(@window-height / 2);
  z-index: 1;
  .set-grid-layout(@columns: @window-height auto, @gap: 0);

  &-sider {
    height: @window-height;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 48px;
    background-color: lighten(@back-color-side, 10%);
    color: @text-color-light;
    .owner {
      font-size: @font-size-large;
    }
    .logo {
      width: 120px;
      height: 120px;
    }
    .version {
      font-size: @font-size-small;
    }
  }

  &-header {
    height: @window-height - @content-height;
    padding: 36px;
    background-color: @back-color-side;
    text-align: center;

    .icon {
      width: 144px;
      height: 36px;
    }
    .title {
      line-height: 36px;
      color: @text-color-minor;
      font-size: @font-size-huge;
      letter-spacing: 2px;
      font-weight: 600;
    }
  }

  &-content {
    height: @content-height;
    background-color: @back-color-side;
    padding: 0 40px;
    text-align: center;

    .ant-form-item {
      padding: 0;
      margin: 0;
    }

    .ant-form-item-control-wrapper {
      width: 100%;
    }

    .ant-input-affix-wrapper {
      padding: 0 11px;
      margin: @inline-gap 0;
      line-height: 40px;
    }

    .ant-input-prefix {
      color: @text-color-holder;
      padding-right: @icon-padding;
    }

    .vertify-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .check-group {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      margin-bottom: 32px;
      .ant-checkbox-wrapper {
        color: @text-color-minor;
      }
    }
  }
}

.login_footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .copyright {
    text-align: center;
    font-size: @font-size-large;
    color: @text-color-light;
  }
  .animation-waves {
    width: 100%;
    margin-bottom: -3px;
    height: 20vh;
    min-height: 100px;
    max-height: 150px;
  }
  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
}
</style>
