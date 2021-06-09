/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-07 20:18:55
 * @modify date 2021-06-08 21:04:51
 * @desc 后端请求通用设置
 */

import axios from 'axios';
import queryString from 'qs';
import config from '../config/index.js';
import store from '../store/index.js';
import router from '../router/index.js';
import { message } from 'ant-design-vue';

let loadingInstance;

/**
 * @author wang.chaofeng
 * @desc 处理code异常
 * @param {*} code
 * @param {*} text
 */
const handleCode = (code, text) => {
  switch (code) {
    case 401:
      message.error(text || '登录失效');
      store.dispatch('user/resetAll').catch(() => {});
      break;
    case 403:
      router.push({ path: '/403' }).catch(() => {});
      break;
    default:
      message.error(text || `后端接口${code}异常`);
      break;
  }
};

/**
 * @author wang.chaofeng
 * @desc axios初始化
 */
const instance = axios.create({
  url: config.serverUrl,
  timeout: config.requestTimeout,
  headers: {
    'Content-Type': config.contentType
  }
});

/**
 * @author wang.chaofeng
 * @desc axios请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    config.headers[config.tokenName] = store.getters['user/accessToken'];

    if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8')
      config.data = queryString.stringify(config.data);
    if (config.debounce.some((item) => config.url.includes(item))) {
      //这里写加载动画
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * @author wang.chaofeng
 * @desc axios响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    if (loadingInstance) loadingInstance.close();

    const { data, config } = response;
    const { code, messageText } = data;
    if (config.successCode.includes(code)) {
      return data;
    } else {
      handleCode(code, messageText);
      return Promise.reject('请求异常拦截:' + JSON.stringify({ url: config.url, code, messageText }) || 'Error');
    }
  },
  (error) => {
    if (loadingInstance) loadingInstance.close();
    const { response, message } = error;
    if (error.response && error.response.data) {
      const { status, data } = response;
      handleCode(status, data.msg || message);
      return Promise.reject(error);
    } else {
      let { message } = error;
      if (message === 'Network Error') {
        message = '后端接口连接异常';
      }
      if (message.includes('timeout')) {
        message = '后端接口请求超时';
      }
      if (message.includes('Request failed with status code')) {
        const code = message.substr(message.length - 3);
        message = '后端接口' + code + '异常';
      }
      message.error(message || '后端接口未知异常');
      return Promise.reject(error);
    }
  }
);

export default instance;
