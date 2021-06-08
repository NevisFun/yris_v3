import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';
import Antd from 'ant-design-vue';

import './styles/ant.less';

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount('#app');
