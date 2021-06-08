/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-07 20:18:55
 * @modify date 2021-06-07 20:24:07
 * @desc 后端请求通用设置
 */

import axios from 'axios';
import queryString from 'qs';
import { serverUrl, contentType, requestTimeout, successCode } from '../config/index.js';
import { debounce, tokenName } from '../config/setting.js';
import store from '../store/index.js';
import router from '../router/index.js';
import { isArray } from '../utils/validate.js';
import { message } from 'ant-design-vue';

let loadingInstance;

/**
 * @author wang.chaofeng
 * @description 处理code异常
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
 * @description axios初始化
 */
const instance = axios.create({
  serverUrl,
  timeout: requestTimeout,
  headers: {
    'Content-Type': contentType
  }
});

/**
 * @author wang.chaofeng
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
  (config) => {
    config.headers[tokenName] = store.getters['user/accessToken'];

    if (config.data && config.headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8')
      config.data = queryString.stringify(config.data);
    if (debounce.some((item) => config.url.includes(item))) {
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
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  (response) => {
    if (loadingInstance) loadingInstance.close();

    const { data, config } = response;
    const { code, msg } = data;
    // 操作正常Code数组
    const codeVerificationArray = isArray(successCode) ? [...successCode] : [...[successCode]];
    // 是否操作正常
    if (codeVerificationArray.includes(code)) {
      return data;
    } else {
      handleCode(code, msg);
      return Promise.reject('请求异常拦截:' + JSON.stringify({ url: config.url, code, msg }) || 'Error');
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
