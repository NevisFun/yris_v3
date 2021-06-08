import { storage, tokenName } from '../config/index.js';

/**
 * @author wang.chaofeng
 * @description 获取accessToken
 * @returns {string|*>}
 */
export function getAccessToken() {
  if ('sessionStorage' === storage) {
    return sessionStorage.getItem(tokenName);
  } else if ('localStorage' === storage) {
    return localStorage.getItem(tokenName);
  } else {
    // throw new Error('无法读取Token，存储设置无效！');
  }
}

/**
 * @author wang.chaofeng
 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(accessToken) {
  if ('localStorage' === storage) {
    return localStorage.setItem(tokenName, accessToken);
  } else if ('sessionStorage' === storage) {
    return sessionStorage.setItem(tokenName, accessToken);
  } else {
    throw new Error('无法存储Token，存储设置无效！');
  }
}

/**
 * @author wang.chaofeng
 * @description 清除accessToken
 * @returns {void|Promise<void>}
 */
export function removeAccessToken() {
  if ('localStorage' === storage) {
    return localStorage.removeItem(tokenName);
  } else if ('sessionStorage' === storage) {
    return sessionStorage.clear();
  } else {
    throw new Error('无法清除Token，存储设置无效！');
  }
}
